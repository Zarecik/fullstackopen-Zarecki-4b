const express = require('express')
const app = express()

// Middleware do obsługi JSON w body
app.use(express.json())

// Początkowe dane
let persons = [
  { id: "1", name: "Arto Hellas", number: "040-123456" },
  { id: "2", name: "Ada Lovelace", number: "39-44-5323523" },
  { id: "3", name: "Dan Abramov", number: "12-43-234345" },
  { id: "4", name: "Mary Poppendieck", number: "39-23-6423122" }
]

// Endpoint 3.1 – Zwraca listę osób
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// Endpoint 3.2 – Info o liczbie osób i dacie
app.get('/info', (req, res) => {
  const count = persons.length
  const date = new Date()
  res.send(`<p>Phonebook has info for ${count} people</p><p>${date}</p>`)
})

// Endpoint 3.3 – Zwraca jedną osobę po id
app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id
  const person = persons.find(p => p.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).json({ error: 'Person not found' })
  }
})

// Endpoint 3.4 – Usuwa osobę po id
app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id
  const personExists = persons.some(p => p.id === id)

  if (!personExists) {
    return res.status(404).json({ error: 'Person not found' })
  }

  persons = persons.filter(p => p.id !== id)
  res.status(204).end()
})

// Endpoint 3.5 – Dodaje nową osobę
app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'name or number is missing' })
  }

  const nameExists = persons.some(p => p.name === body.name)
  if (nameExists) {
    return res.status(400).json({ error: 'name must be unique' })
  }

  const newPerson = {
    id: (Math.random() * 100).toFixed(0),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(newPerson)
  res.status(201).json(newPerson)
})

// Uruchomienie serwera
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
