import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todos } from '../../models/todos';

@Injectable()

export class TodoService {
    load(limit: number): Observable<Todos> {
    return of({
    limit: 0,
    total: 0,
    results: [],
    });
 }
}