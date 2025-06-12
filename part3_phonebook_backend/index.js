const express = require('express')
const app = express()

// Dane telefonicznej książki — początkowo 4 wpisy
let persons = [
  { 
    id: "1",
    name: "Arto Hellas", 
    number: "040-123456"
  },
  { 
    id: "2",
    name: "Ada Lovelace", 
    number: "39-44-5323523"
  },
  { 
    id: "3",
    name: "Dan Abramov", 
    number: "12-43-234345"
  },
  { 
    id: "4",
    name: "Mary Poppendieck", 
    number: "39-23-6423122"
  }
]

// 3.1: zwróć listę osób
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// 3.3: zwróć osobę po id
app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id
  const person = persons.find(p => p.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

// 3.2: info o telefonicznej książce i aktualnym czasie
app.get('/info', (req, res) => {
  const date = new Date()
  const entriesCount = persons.length

  res.send(`
    <p>Phonebook has info for ${entriesCount} people</p>
    <p>${date}</p>
  `)
})

// 3.4: usuń osobę po id
app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id

  const personExists = persons.some(p => p.id === id)
  if (!personExists) {
    return res.status(404).json({ error: 'Person not found' })
  }

  persons = persons.filter(p => p.id !== id)
  res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
