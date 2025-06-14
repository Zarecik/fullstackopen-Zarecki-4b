const express = require('express')
const app = express()

app.use(express.json())

let persons = [
  { id: "1", name: "Arto Hellas", number: "040-123456" },
  { id: "2", name: "Ada Lovelace", number: "39-44-5323523" },
  { id: "3", name: "Dan Abramov", number: "12-43-234345" },
  { id: "4", name: "Mary Poppendieck", number: "39-23-6423122" }
]

// Middleware 3.7 - logger
const requestLogger = (req, res, next) => {
  console.log('Method:', req.method)
  console.log('Path:  ', req.path)
  console.log('Body:  ', req.body)
  console.log('---')
  next()
}
app.use(requestLogger)

// 3.1 – Zwraca listę osób
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// 3.2 – Info o liczbie osób i dacie
app.get('/info', (req, res) => {
  const count = persons.length
  const date = new Date()
  res.send(`<p>Phonebook has info for ${count} people</p><p>${date}</p>`)
})

// 3.3 – Zwraca jedną osobę po id
app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id
  const person = persons.find(p => p.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).json({ error: 'Person not found' })
  }
})

// 3.4 – Usuwa osobę po id
app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id
  const personExists = persons.some(p => p.id === id)

  if (!personExists) {
    return res.status(404).json({ error: 'Person not found' })
  }

  persons = persons.filter(p => p.id !== id)
  res.status(204).end()
})

// 3.5 – Dodaje nową osobę
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

// 3.8 – Middleware obsługi błędów
const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}
app.use(errorHandler)

// Uruchomienie serwera
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


