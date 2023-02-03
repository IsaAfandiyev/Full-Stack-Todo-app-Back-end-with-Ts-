import { ITodo } from "../model";

interface ITodoResponse {
  id: string;
  date: Date;
  text: string;
  isCompleted: boolean;
  isDeleted: boolean;
}

const ITodoToITodoResponse = (todo: ITodo | null): ITodoResponse | null => {
  return todo
    ? {
        id: todo._id,
        date: todo.date,
        text: todo.text,
        isCompleted: todo.isCompleted,
        isDeleted: todo.isDeleted,
      }
    : null;
};
const ITodosToITodoResponses = (
  todos: ITodo[] | null
): (ITodoResponse | null)[] | null => {
  return todos
    ? todos.map((t) => {
        return ITodoToITodoResponse(t);
      })
    : null;
};

export { ITodoResponse, ITodoToITodoResponse, ITodosToITodoResponses };
