const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Sample food data
const foods = [
  { id: 1, name: 'Apple', phenylalanineMg: 2 },
  { id: 2, name: 'Banana', phenylalanineMg: 8 },
  { id: 3, name: 'Chicken Breast (100g)', phenylalanineMg: 320 },
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/foods', (req, res) => {
  res.json(foods);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
