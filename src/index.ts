import  express from "express";
import { Express } from "express";
import { port } from "./config/index";
import loader from "./loaders/index";

const app: Express = express();

loader(app);
try {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
} catch (err) {
  console.log(err);
  process.exit(1);
}

export default app;
