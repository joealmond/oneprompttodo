import { Todo } from './todo.interface';
import { CreateTodoDto } from './create-todo.dto';
import { UpdateTodoDto } from './update-todo.dto';

/**
 * Abstract repository — swap this implementation to connect any database.
 * Implement this interface and provide it in TodosModule to switch persistence.
 */
export abstract class TodoRepository {
  abstract findAll(): Promise<Todo[]>;
  abstract findById(id: string): Promise<Todo | null>;
  abstract create(dto: CreateTodoDto): Promise<Todo>;
  abstract update(id: string, dto: UpdateTodoDto): Promise<Todo | null>;
  abstract delete(id: string): Promise<boolean>;
}
