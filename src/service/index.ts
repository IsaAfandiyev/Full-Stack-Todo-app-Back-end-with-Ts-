import { Repository } from "../repository";
import { ITodo } from "../model";

class Service {
  private _repository: Repository;
  constructor(repository: Repository) {
    this._repository = repository;
  }

  async allTodos(): Promise<Array<ITodo>> {
    return await this._repository.allTodos();
  }
  async deleteTodoById(id: string): Promise<ITodo | null> {
    return await this._repository.deleteTodoById(id);
  }

  async addTodo(todo: ITodo): Promise<ITodo | null> {
    return await this._repository.addTodo(todo);
  }

  async updateTodo(todo: ITodo): Promise<ITodo | null> {
    const t = await this._repository.todoById(todo._id);
    t!.text = todo.text ? todo.text : t!.text;
    t!.isCompleted =
      todo.isCompleted !== null ? todo.isCompleted : t!.isCompleted;
    t!.isDeleted = todo.isDeleted !== null ? todo.isDeleted : t!.isDeleted;
    await t?.save();
    return t;
  }

  async completedTodo(id: string, completed: boolean): Promise<ITodo | null> {
    const t = await this._repository.todoById(id);
    t!.isCompleted = completed === undefined ? t!.isCompleted : completed;
    await t?.save();
    return t;
  }
}

export { Service };
