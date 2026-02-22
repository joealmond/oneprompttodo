import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  imports: [FormsModule],
  template: `
    <div class="flex items-start justify-center pt-16 pb-16 px-4">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 class="text-3xl font-bold text-indigo-600 mb-6 text-center">✅ Todo App</h1>

        <!-- Add todo form -->
        <form (ngSubmit)="addTodo()" class="flex gap-2 mb-6">
          <input
            [(ngModel)]="newTitle"
            name="title"
            type="text"
            placeholder="What needs to be done?"
            class="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            [disabled]="!newTitle().trim()"
            class="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
          >
            Add
          </button>
        </form>

        <!-- Filter bar -->
        <div class="flex gap-2 mb-4 text-sm">
          @for (f of filters; track f) {
            <button
              (click)="activeFilter.set(f)"
              [class]="activeFilter() === f
                ? 'bg-indigo-600 text-white rounded-full px-3 py-1'
                : 'text-slate-500 hover:text-indigo-600 rounded-full px-3 py-1'"
            >{{ f }}</button>
          }
        </div>

        <!-- Todo list -->
        @if (loading()) {
          <p class="text-center text-slate-400 py-8">Loading…</p>
        } @else if (filteredTodos().length === 0) {
          <p class="text-center text-slate-400 py-8">No todos here.</p>
        } @else {
          <ul class="divide-y divide-slate-100">
            @for (todo of filteredTodos(); track todo.id) {
              <li class="flex items-center gap-3 py-3">
                <input
                  type="checkbox"
                  [checked]="todo.completed"
                  (change)="toggleTodo(todo)"
                  class="w-4 h-4 accent-indigo-600 cursor-pointer"
                />
                <span
                  [class]="todo.completed
                    ? 'flex-1 line-through text-slate-400 text-sm'
                    : 'flex-1 text-slate-800 text-sm'"
                >{{ todo.title }}</span>
                <button
                  (click)="deleteTodo(todo.id)"
                  class="text-slate-300 hover:text-red-400 transition-colors text-lg leading-none"
                  aria-label="Delete"
                >×</button>
              </li>
            }
          </ul>
        }

        <!-- Footer counts -->
        @if (todos().length > 0) {
          <p class="text-xs text-slate-400 mt-4 text-right">
            {{ remaining() }} of {{ todos().length }} remaining
          </p>
        }
      </div>
    </div>
  `,
})
export class TodosComponent implements OnInit {
  private readonly todoService = inject(TodoService);

  todos = signal<Todo[]>([]);
  newTitle = signal('');
  loading = signal(true);
  activeFilter = signal<'All' | 'Active' | 'Completed'>('All');

  readonly filters = ['All', 'Active', 'Completed'] as const;

  filteredTodos() {
    const f = this.activeFilter();
    const all = this.todos();
    if (f === 'Active') return all.filter((t) => !t.completed);
    if (f === 'Completed') return all.filter((t) => t.completed);
    return all;
  }

  remaining() {
    return this.todos().filter((t) => !t.completed).length;
  }

  ngOnInit() {
    this.todoService.getAll().subscribe({
      next: (todos) => { this.todos.set(todos); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  addTodo() {
    const title = this.newTitle().trim();
    if (!title) return;
    this.todoService.create(title).subscribe((todo) => {
      this.todos.update((list) => [...list, todo]);
      this.newTitle.set('');
    });
  }

  toggleTodo(todo: Todo) {
    this.todoService.update(todo.id, { completed: !todo.completed }).subscribe((updated) => {
      this.todos.update((list) => list.map((t) => (t.id === updated.id ? updated : t)));
    });
  }

  deleteTodo(id: string) {
    this.todoService.delete(id).subscribe(() => {
      this.todos.update((list) => list.filter((t) => t.id !== id));
    });
  }
}
