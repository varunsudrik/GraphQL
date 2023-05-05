import express from "express";
let app = express();

app.get("/", (req, res) => {
  res.send("Up and Running");
});

app.listen(5050, () => {
  console.log("running 5050");
});
