const express = require('express');
const bodyParser = require('body-parser');
const fileSystem = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5000;

app.get('/api/tasks', (req, res) => {
  const tasks = require('./data/tasks.json');
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const oldTasks = require('./data/tasks.json');
  const newTasks = [req.body, ...oldTasks];
  fileSystem.writeFile('./data/tasks.json', JSON.stringify(newTasks), err => {
    console.log(err);
  });
  res.status(200);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
