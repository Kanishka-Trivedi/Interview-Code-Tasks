
const express = require('express');
const app = express();
const port = 3000; 

const users = [
    {id: 1, name: "Kanishka", age: 18},
    {id: 2, name: "Khushbu", age: 18},
    {id: 3, name: "Adeline", age: 24},
    {id: 4, name: "Morana", age: 22},
    {id: 5, name: "Arjun", age: 18},
    {id: 6, name: "Zade", age: 30},
    {id: 7, name: "Kaylin", age: 23},
 ]


app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/users/:id', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
