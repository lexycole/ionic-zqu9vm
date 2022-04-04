import { Action } from '@ngrx/store';
import { Todos } from '../models/todo';
export enum ItemActionTypes {
 Load = '[Todos] Load',
 LoadSuccess = '[Todos] Load Success',
 LoadFail = '[Todos] Load Fail',
}

export class Load implements Action {
 readonly type = TodoActionTypes.Load;
 constructor(public payload: number[]) {}
}

export class LoadSuccess implements Action {
 readonly type = TodoActionTypes.LoadSuccess;
 constructor(public payload: Todo[]) {}
}

export class LoadFail implements Action {
  readonly type = TodoActionTypes.LoadFail;
  constructor(public payload: any) {}
 }
 
 export type TodoActions = Load | LoadSuccess | LoadFail;