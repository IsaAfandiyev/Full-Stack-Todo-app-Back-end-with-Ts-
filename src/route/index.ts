import { Controller } from "../controller";

const express = require("express");
let cors = require("cors");
const app = express();
const port = 6606;

const initializeRoutes = (controller: Controller) => {
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(cors());

  app.get("/todo", controller.allTodos);
  app.delete("/todo/:id", controller.deleteTodoById);
  app.post("/todo", controller.addTodo);
  app.put("/todo/:id", controller.updateTodo);
  app.put("/todo/:id/complete", controller.completedTodo);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

export { initializeRoutes };
