import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodoRepository } from './todo.repository';
import { JsonTodoRepository } from './json-todo.repository';

@Module({
  controllers: [TodosController],
  providers: [
    TodosService,
    // Swap JsonTodoRepository for any DB-backed implementation here
    { provide: TodoRepository, useClass: JsonTodoRepository },
  ],
})
export class TodosModule {}

