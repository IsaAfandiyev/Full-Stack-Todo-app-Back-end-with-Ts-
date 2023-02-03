import mongoose from "mongoose";
import { initializeModels, ITodo } from "../model";
class Repository {
  private readonly _todoModel: mongoose.Model<ITodo>;
  constructor(connectionString: string) {
    mongoose
      .connect(connectionString)
      .then(() => console.log("connected to Mongoose!"));
    this._todoModel = initializeModels();
  }

  async allTodos(): Promise<Array<ITodo>> {
    return await this._todoModel.find().exec();
  }

  async todoById(id: string): Promise<ITodo | null> {
    return await this._todoModel.findById(id).exec();
  }

  async deleteTodoById(id: string): Promise<ITodo | null> {
    return await this._todoModel.findByIdAndDelete(id).exec();
  }

  async addTodo(todo: ITodo): Promise<ITodo | null> {
    const newTodo = new this._todoModel(todo);
    return await newTodo.save();
  }
}

export { Repository };
