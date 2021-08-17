import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3002/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.find(person => newName === person.name)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />

      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

const Filter = ({ filter, setFilter }) => (
  <div>
    filter shown with <input
      value={filter}
      onChange={(event) => { setFilter(event.target.value) }}
    />
  </div>
)

const PersonForm = (props) => {
  const { addPerson, newName, setNewName, newNumber, setNewNumber } = props

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input
          value={newName}
          onChange={(event) => { setNewName(event.target.value) }}
        />
      </div>

      <div>
        number: <input
          value={newNumber}
          onChange={(event) => { setNewNumber(event.target.value) }}
        />
      </div>

      <button type="submit">add</button>
    </form>
  )
}

const Persons = ({ persons }) => (
  <div>
    {persons.map(person => <Person key={person.id} person={person} />)}
  </div>
)

const Person = ({ person }) => (
  <p>{person.name} {person.number}</p>
)

export default App
