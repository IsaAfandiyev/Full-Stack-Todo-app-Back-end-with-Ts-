import mongoose from "mongoose";

interface ITodo extends mongoose.Document {
  date: Date;
  text: string;
  isCompleted: boolean;
  isDeleted: boolean;
}
const initializeModels = () => {
  const todoSchema = new mongoose.Schema<ITodo>({
    date: { type: Date },
    text: { type: String },
    isCompleted: { type: Boolean },
    isDeleted: { type: Boolean },
  });

  return mongoose.model<ITodo>("todo", todoSchema);
};

export { initializeModels, ITodo };
