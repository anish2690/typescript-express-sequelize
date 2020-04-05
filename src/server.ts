import express from "express";
import * as winston from "winston";
import morgan from "morgan";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import { Express } from "express";
import * as routes from "./routes/_index";

const PORT = process.env.PORT || 3000;

export class Server {
  private app: Express;

  constructor() {
    this.app = express();

    // Express middleware
    this.app.use(
      cors({
        optionsSuccessStatus: 200,
      })
    );

    this.app.use(
      urlencoded({
        extended: true,
      })
    );
    this.app.use(json());
    this.app.use(morgan("combined"));
    this.app.listen(PORT, () => {
      winston.log("info", `--> Server successfully started at port ${PORT}`);
    });
    routes.initRoutes(this.app);
  }

  getApp() {
    return this.app;
  }
}
new Server();
