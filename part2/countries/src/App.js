import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const api_key = process.env.REACT_APP_API_KEY
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [countriesToShow, setCountriesToShow] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => { setCountries(response.data) })
  }, [])

  useEffect(() => {
    setCountriesToShow(countries.filter(country =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    ))
  }, [countries, filter])

  const selectView = (numberOfContries) => {
    if (numberOfContries === 0) {
      return <p>No matches, specify another filter</p>
    } else if (numberOfContries === 1) {
      return <Country api_key={api_key} country={countriesToShow[0]} />
    } else if (numberOfContries <= 10) {
      return (
        <Countries
          countries={countriesToShow}
          setCountries={setCountriesToShow}
        />
      )
    } else {
      return <p>Too many matches, specify another filter</p>
    }
  }

  return (
    <div>
      <FindCountries filter={filter} setFilter={setFilter} />
      {selectView(countriesToShow.length)}
    </div>
  )
}

const FindCountries = ({ filter, setFilter }) => (
  <div>
    find countries
    <input
      value={filter}
      onChange={(event) => { setFilter(event.target.value) }}
    />
  </div>
)

const Countries = ({ countries, setCountries }) => (
  <div>
    {countries.map(country =>
      <div key={country.alpha2Code}>
        {country.name}
        <button onClick={() => { setCountries([country]) }}>show</button>
      </div>
    )}
  </div>
)

const Country = ({ api_key, country }) => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current`
        + `?access_key=${api_key}`
        + `&query=${country.capital}`)
      .then(response => { setWeather(response.data) })
  }, [api_key, country])

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <Languages languages={country.languages} />
      <img src={country.flag} alt={`Flag of ${country.name}`} height="150" />
      {weather && <Weather weather={weather} />}
    </div>
  )
}

const Languages = ({ languages }) => (
  <div>
    <h2>Spoken languages</h2>
    <ul>
      {languages.map(language =>
        <li key={language.iso639_1}>{language.name}</li>
      )}
    </ul>
  </div>
)

const Weather = ({ weather }) => (
  <div>
    <h2>Weather in {weather.location.name}</h2>
    <p><b>temperature: </b>{weather.current.temperature} Celcius</p>
    <img
      src={weather.current.weather_icons[0]}
      alt={weather.current.weather_descriptions[0]}
    />
    <p>
      <b>wind: </b>
      {weather.current.wind_speed} mph direction {weather.current.wind_dir}
    </p>
  </div>
)

export default App
