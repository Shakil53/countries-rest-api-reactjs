import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <CountriesApi></CountriesApi>
      <Country></Country>
      
    </div>
  );
}

function CountriesApi() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  },[]) 
  
  return (
    
    <div>
      <h1>All Countries Around The World</h1>
      <h4>Countries:{countries.length}</h4>
      {
        // countries.map(country => console.log(country.name.common))
       
        countries.man(country => <Country name={country.name.common}
        population={country.name.population}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2> 
      <h4>population: {props.population}</h4>
    </div>
  )
}

export default App;
