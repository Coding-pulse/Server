import express from "express";
import { controller1, controller2 } from "../Controller/contro1.js";
const app = express();
const router = express.Router();

const middleware1 = (req, res, next) => {
  console.log("passing through the first");
  next();
};
const middleware2 = (req, res, next) => {
  req.data = "dude im telling you ";

  next();
};

const middleware3 = (req, res, next) => {
  res.on("finish", () => {});
};
const route1 = router.get("/", middleware1, controller1);
export { route1 };

const route2 = router.get("/js", middleware2, controller2);
export { route2 };
