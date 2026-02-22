import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { randomUUID } from 'crypto';
import { TodoRepository } from './todo.repository';
import { Todo } from './todo.interface';
import { CreateTodoDto } from './create-todo.dto';
import { UpdateTodoDto } from './update-todo.dto';

const DATA_PATH = path.join(process.cwd(), 'data', 'todos.json');

/**
 * JSON-file-backed implementation of TodoRepository.
 * Replace this class (and its provider binding) to connect a real database.
 */
@Injectable()
export class JsonTodoRepository extends TodoRepository {
  private read(): Todo[] {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(raw) as Todo[];
  }

  private write(todos: Todo[]): void {
    fs.writeFileSync(DATA_PATH, JSON.stringify(todos, null, 2), 'utf-8');
  }

  async findAll(): Promise<Todo[]> {
    return this.read();
  }

  async findById(id: string): Promise<Todo | null> {
    return this.read().find((t) => t.id === id) ?? null;
  }

  async create(dto: CreateTodoDto): Promise<Todo> {
    const todos = this.read();
    const todo: Todo = {
      id: randomUUID(),
      title: dto.title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    todos.push(todo);
    this.write(todos);
    return todo;
  }

  async update(id: string, dto: UpdateTodoDto): Promise<Todo | null> {
    const todos = this.read();
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) return null;
    todos[index] = { ...todos[index], ...dto };
    this.write(todos);
    return todos[index];
  }

  async delete(id: string): Promise<boolean> {
    const todos = this.read();
    const next = todos.filter((t) => t.id !== id);
    if (next.length === todos.length) return false;
    this.write(next);
    return true;
  }
}
