import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { prefix } from "../config/index";
import routes from "../api/routes/index";
import bodyParser from "body-parser";

export default (app: Express) => {
  app.enable("trust proxy");
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(morgan("dev"));
  app.use(helmet());
  app.use(express.static("public"));
  app.disable("x-powered-by");
  app.disable("etag");

  app.use(prefix, routes);

  app.get("/", (_req, res) => {
    return res
      .status(200)
      .json({
        resultMessage: {
          en: "Project is successfully working...",
        },
        resultCode: "00004",
      })
      .end();
  });

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Content-Security-Policy-Report-Only", "default-src: https:");
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT POST PATCH DELETE GET");
      return res.status(200).json({});
    }
    next();
  });

  app.use((req, res, next) => {
    const error = new Error("Endpoint could not find!");
    res.status(404).send(error.message);
    next(res);
  });

  app.use((error, req, res, _next) => {
    res.status(error.status || 500);
    return res.json({
      resultMessage: error.message,
      resultCode: error.status,
    });
  });
};
