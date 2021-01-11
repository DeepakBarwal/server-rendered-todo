const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

let tasks = [];

app.get('/', (req, res) => {
  // let taskList = tasks.map((task) => `<li>${task}</li>`).join('\n');
  res.render('home', {
    title: 'Todo List',
    tasks,
  });
});

app.post('/', (req, res) => {
  tasks.push(req.body.newTask);
  res.redirect('/');
});

app.listen(3333, () => {
  console.log('http://localhost:3333');
});
