import React, { useState, useEffect } from 'react'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const createPerson = event => {
    event.preventDefault()

    const newPerson = { name, number }
    const person = persons.find(person => name === person.name)

    if (person) {
      if (window.confirm(name + ' is already added to phonebook'
        + ', replace the old number with a new one?')) {
        updatePerson(person)
        setName('')
        setNumber('')
      }
    } else {
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setName('')
          setNumber('')
        })
    }
  }

  const updatePerson = personToUpdate => {
    const changedPerson = { ...personToUpdate, number }

    personService
      .update(changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person =>
          person.id !== personToUpdate.id ? person : returnedPerson
        ))
      })
      .catch(() => {
        alert(`${personToUpdate.name} was already deleted from the server`)
        setPersons(persons.filter(person => person.id !== personToUpdate.id))
      })
  }

  const removePerson = personToRemove => {
    if (window.confirm(`Delete ${personToRemove.name}?`)) {
      personService
        .remove(personToRemove.id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== personToRemove.id))
        })
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
        createPerson={createPerson}
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} removePerson={removePerson} />
    </div>
  )
}

const Filter = ({ filter, setFilter }) => (
  <div>
    filter shown with
    <input
      value={filter}
      onChange={event => setFilter(event.target.value)}
    />
  </div>
)

const PersonForm = ({ createPerson, name, setName, number, setNumber }) => (
  <form onSubmit={createPerson}>
    <div>
      name:
      <input
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </div>

    <div>
      number:
      <input
        value={number}
        onChange={event => setNumber(event.target.value)}
      />
    </div>

    <button type="submit">add</button>
  </form>
)

const Persons = ({ persons, removePerson }) => (
  <div>
    {persons.map(person =>
      <Person
        key={person.id}
        person={person}
        removePerson={() => removePerson(person)}
      />
    )}
  </div>
)

const Person = ({ person, removePerson }) => (
  <p>
    {person.name} {person.number}
    <button onClick={removePerson}>delete</button>
  </p>
)

export default App
