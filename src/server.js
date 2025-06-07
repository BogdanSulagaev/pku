const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Simple user credentials
const user = { username: 'user', password: 'pass' };

// Sample food data
const foods = [
  { id: 1, name: 'Apple', phenylalanineMg: 2 },
  { id: 2, name: 'Banana', phenylalanineMg: 8 },
  { id: 3, name: 'Chicken Breast (100g)', phenylalanineMg: 320 },
];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/api/foods', (req, res) => {
  res.json(foods);
});

app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'add.html'));
});

app.post('/add', (req, res) => {
  const { name, phenylalanineMg } = req.body;
  if (name && phenylalanineMg) {
    const newFood = {
      id: foods.length + 1,
      name,
      phenylalanineMg: Number(phenylalanineMg),
    };
    foods.push(newFood);
    res.redirect('/');
  } else {
    res.status(400).send('Invalid data');
  }
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
