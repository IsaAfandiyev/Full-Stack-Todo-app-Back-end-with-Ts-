import { Repository } from "./src/repository";
import * as process from "process";
import { Service } from "./src/service";
import { Controller } from "./src/controller";
import { initializeRoutes } from "./src/route";
require("dotenv").config();

if (typeof process.env.CONNECTAPI === "undefined") {
  console.log("connect api is not set");
  process.exit(2);
}
const repository = new Repository(process.env.CONNECTAPI);
const service = new Service(repository);
const controller = new Controller(service);
initializeRoutes(controller);
