const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
  let taskList = tasks.map((task) => `<li>${task}</li>`).join('\n');
  res.send(`
        <html>
        <body>
            <form action="/" method="POST">
                <input name="newTask">
                <button type="submit">ADD</button>
                <ul>
                    ${taskList}
                </ul>
            </form>
        </body>
        </html>
    `);
});

app.post('/', (req, res) => {
  tasks.push(req.body.newTask);
  res.redirect('/');
});

app.listen(3333, () => {
  console.log('http://localhost:3333');
});
