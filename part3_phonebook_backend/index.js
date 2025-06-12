// 1. Importujemy Express
const express = require('express');
const app = express();

// 2. Dane na sztywno – książka telefoniczna
const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122"
  }
];

// 3. Endpoint GET /api/persons – wysyła dane jako JSON
app.get('/api/persons', (req, res) => {
  res.json(persons);
});

// 4. Uruchamiamy serwer na porcie 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
