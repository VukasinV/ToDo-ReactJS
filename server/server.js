const express = require("express");
const bodyParser = require("body-parser");
const fileSystem = require("fs");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5000;

app.get("/api/tasks", (req, res) => {
  let tasks = require("./data/tasks.json");
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const oldTasks = require("./data/tasks.json");
  let task = req.body;
  const newId =
    Math.max.apply(
      Math,
      oldTasks.map(x => {
        return x.id;
      })
    ) + 1;
  task = {
    id: newId,
    finished: false,
    dueTo: new Date(),
    ...task
  };
  const newTasks = [task, ...oldTasks];
  fileSystem.writeFile("./data/tasks.json", JSON.stringify(newTasks), err => {
    console.log(err);
  });
  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  let tasks = require("./data/tasks.json").filter(x => {
    // eslint-disable-next-line eqeqeq
    return x.id != req.params.id;
  });
  fileSystem.writeFile("./data/tasks.json", JSON.stringify(tasks), err => {
    console.log(err);
  });
  res.json(tasks);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
