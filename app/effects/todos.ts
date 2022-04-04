@Injectable()

  export class ItemsEffects {
      constructor(private actions$: Actions) {}

    @Effect()
        loadItems$: Observable<Action> = this.actions$.pipe(
        ofType(TodoActionTypes.Load),
          map((action: Load) => action.payload),
          mergeMap((ids: number[]) =>
          map((items: Item[]) => new LoadSuccess(items)),
          catchError(error => of(new LoadFail(error))),        
        )
    );
}