import { connect, Schema, model } from "mongoose";

const schema = new Schema({
  name: { type: String },
  age: { type: Number },
  color: { type: String },
});
const Info = model("info", schema);
export { Info };
