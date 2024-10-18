import { Info } from "../Model/model.js";

const controller1 = async (req, res) => {
  const info = new Info({
    name: "brajesh",
    age: 12,
    color: "red",
  });
  await info.save();
  res.json(info);
};
export { controller1 };

const controller2 = async (req, res) => {
  const upd = await Info.updateOne({ name: "brajesh" }, { color: "violet" });
  //await upd.save();
  var obj = {
    first: req.data,
    second: "it dien okay?",
  };
  res.json(obj);
};
export { controller2 };
