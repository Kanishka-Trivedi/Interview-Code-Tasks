const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {id: 1, name: "Kanishka", age: 18},
    {id: 2, name: "Khushbu", age: 18},
    {id: 3, name: "Adeline", age: 24},
    {id: 4, name: "Morana", age: 22},
    {id: 5, name: "Arjun", age: 18},
    {id: 6, name: "Zade", age: 30},
    {id: 7, name: "Kaylin", age: 23},
 ];

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const initialLength = users.length;
  users = users.filter(u => u.id !== userId);

  if (users.length === initialLength) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.status(204).send();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
