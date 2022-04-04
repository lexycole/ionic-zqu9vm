import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TopStoriesActionTypes } from '../actions/top-stories';
import { catchError, map, mergeMap, switchMap, take, 
withLatestFrom } from 'rxjs/operators';
import * as fromTopStories from '../reducers';
import { pageSize } from '../reducers/pagination';
import * as itemActions from '../actions/items';
import * as topStoriesActions from '../actions/top-stories';

@Injectable()
export class TopStoriesEffects {
 constructor(private actions$: Actions,
 private store: Store<fromTopStories.State>,) {}

  @Effect()
  loadTopStories$: Observable<Action> = this.actions$.pipe(
  ofType(TopStoriesActionTypes.Refresh),

  switchMap(() =>
  this.db.list('/v0/topstories').valueChanges()
    .pipe(
      take(1),
          mergeMap((ids: number[]) => of<Action>(
              new topStoriesActions.LoadSuccess(ids),
              new itemActions.Load(ids.slice(0, pageSize)))),
          catchError(error => of(new topStoriesActions.
          LoadFail(error))),
        )  
      )
    );

  @Effect()
  loadMore$: Observable<Action> = this.actions$.pipe(
  ofType(TopStoriesActionTypes.LoadMore),
  withLatestFrom(this.store),
  map(([action, state]) => {
    const {
        pagination: {
          offset,
          limit,
        },
        stories: {
        ids,
        }
    } = state.topStories;

    return new itemActions.Load(ids.slice(offset, 
          offset + limit));
        })
      );
   }