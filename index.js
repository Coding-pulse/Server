import dotenv from "dotenv";
dotenv.config();
import { createServer } from "http";
import { readFile, readFileSync } from "fs";

//import express from "express";
const rf = readFileSync("./index.html", "utf-8");
/*const data = { arc: 10 };
const app = express();

app.listen(8080, () => {
  console.log("wraped in server");
});*/
/*
const server = createServer((req, res) => {
  console.log("server started");
  res.setHeader("Content-Type", "text/html");
  res.setHeader("dummy", "idkman");
  if (req.url == "/") {
    let er = rf.replace("World!", "Vergil!").replace("there", "Blip");
    // er = JSON.parse(er);
    res.end(er);
  } else if (req.url == "/read") {
    res.end("you cant win");
  }
});

server.listen(8080);
*/
/*
import { createStore } from "redux";
const init = {
  counter: 0,
};
const reducer = (store = init, action) => {
  if (action.type === "inc") return { counter: store.counter + 1 };
};
const store = createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};
store.subscribe(subscriber);

store.dispatch({ type: "inc" });
*/
/*
import { connect, Schema } from "mongoose";
import express from "express";

const db_connect = async () => {
  try {
    const db = await connect("mongodb://localhost:27017/My_database");
    console.log("connection established!");
  } catch (err) {
    console.log("something went wrong!");
  }
};
db_connect();
/*
const app = express();
const router = express.Router();
const ro1 = router.get(
  "/",
  (req, res, next) => {
    console.log(req.query);
    next();
  },
  (req, res) => {
    // res.status(245).sendFile("E:/node/index.html");
    /*
 app.send();
 app.sendFile();
 app.json();*/
/*
    res.json({ pal: "nada" });
  }
);
app.use(express.json());
app.use("/", ro1);
app.listen(8080, () => {
  console.log("it has began!");
});*/

import express from "express";
import { route1, route2 } from "./Router/route.js";
import { connect } from "mongoose";
const db_connect = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/project");
    console.log("connection to database established!");
  } catch (err) {
    console.log("something went wrong!");
  }
};
db_connect();
const app = express();
app.use(express.json());

app.use("/app", route1);
app.use("/app", route2);

app.listen(8080, (req, res) => {
  console.log("server started");
});
