const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.sendStatus(404);
  products[index] = { id, ...req.body };
  res.json(products[index]);
});

app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = products.length;
  products = products.filter(p => p.id !== id);
  if (products.length === initialLength) return res.sendStatus(404);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
