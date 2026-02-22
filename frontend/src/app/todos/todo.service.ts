import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

const API = 'http://localhost:3000/api/todos';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API);
  }

  create(title: string): Observable<Todo> {
    return this.http.post<Todo>(API, { title });
  }

  update(id: string, patch: Partial<Pick<Todo, 'title' | 'completed'>>): Observable<Todo> {
    return this.http.patch<Todo>(`${API}/${id}`, patch);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${API}/${id}`);
  }
}
