import React, { useState, useEffect } from 'react'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [isSuccessfulOperation, setIsSuccessfulOperation] = useState(true)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const createPerson = event => {
    event.preventDefault()

    const person = persons.find(person => name === person.name)
    const personToCreate = { name, number }

    if (person) {
      updatePerson(person)
    } else {
      personService
        .create(personToCreate)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          clearPersonForm()
          setNotification(`Added ${returnedPerson.name}`, true)
        })
    }
  }

  const updatePerson = personToUpdate => {
    const changedPerson = { ...personToUpdate, number }

    if (window.confirm(name + ' is already added to phonebook'
      + ', replace the old number with a new one?')) {
      personService
        .update(changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person =>
            person.id !== personToUpdate.id ? person : returnedPerson
          ))
          clearPersonForm()
          setNotification(`Replaced ${personToUpdate.name}'s number`, true)
        })
        .catch(() => {
          setPersons(persons.filter(person => person.id !== personToUpdate.id))
          setNotification('Information of ' + personToUpdate.name
            + ' has already been removed from server', false)
        })
    }
  }

  const removePerson = personToRemove => {
    if (window.confirm(`Delete ${personToRemove.name}?`)) {
      personService
        .remove(personToRemove.id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== personToRemove.id))
          setNotification(`Deleted ${personToRemove.name}`, true)
        })
    }
  }

  const clearPersonForm = () => {
    setName('')
    setNumber('')
  }

  const setNotification = (message, isSuccessfulOperation) => {
    setIsSuccessfulOperation(isSuccessfulOperation)
    setMessage(message)
    setTimeout(() => setMessage(null), 5000)
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={message}
        isSuccessfulOperation={isSuccessfulOperation}
      />
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
    <input value={filter} onChange={event => setFilter(event.target.value)} />
  </div>
)

const PersonForm = ({ createPerson, name, setName, number, setNumber }) => (
  <form onSubmit={createPerson}>
    <div>
      name:
      <input value={name} onChange={event => setName(event.target.value)} />
    </div>

    <div>
      number:
      <input value={number} onChange={event => setNumber(event.target.value)} />
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

const Notification = ({ message, isSuccessfulOperation }) => {
  const successfulOperationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  const unsuccessfulOperationStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  const style = isSuccessfulOperation
    ? successfulOperationStyle
    : unsuccessfulOperationStyle

  if (message === null) {
    return null
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default App
