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

app.get('/users', (req, res) => {
    res.json(users);
});


app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});