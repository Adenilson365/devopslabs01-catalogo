import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
import "./database/index.js";

class App {
  constructor() {
    this.server = express(); 
    this.middlewares();      
    this.routes();           
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {

    this.server.use(routes);
  }
}

export default new App().server;
