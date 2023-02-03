import { Service } from "../service";
import { Request, Response } from "express";
import {
  ITodoResponse,
  ITodosToITodoResponses,
  ITodoToITodoResponse,
} from "./model";
import { ITodo } from "../model";

class Controller {
  private _service: Service;
  constructor(service: any) {
    this._service = service;
  }

  allTodos = async (_: Request, res: Response) => {
    let todos = await this._service.allTodos();
    let t = ITodosToITodoResponses(todos);
    res.send(t);
  };

  deleteTodoById = async (req: Request, res: Response) => {
    await this._service.deleteTodoById(req.params.id);
    res.status(204).send("");
  };

  addTodo = async (req: Request, res: Response) => {
    let newTodo = await this._service.addTodo({
      date: req.body.date,
      text: req.body.text,
      isCompleted: req.body.isCompleted,
      isDeleted: req.body.isDeleted,
    } as ITodo);

    res.send(ITodoToITodoResponse(newTodo));
  };

  updateTodo = async (req: Request, res: Response) => {
    let updatedTodo = await this._service.updateTodo({
      _id: req.params.id,
      date: req.body.date,
      text: req.body.text,
      isCompleted: req.body.isCompleted,
      isDeleted: req.body.isDeleted,
    } as ITodo);
    res.send(ITodoToITodoResponse(updatedTodo));
  };

  completedTodo = async (req: Request, res: Response) => {
    let updatedTodo = await this._service.completedTodo(
      req.params.id,
      req.body.completed
    );
    res.send(ITodoToITodoResponse(updatedTodo));
  };
}

export { Controller };
