import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import Component from './Component'
import './scss/style.scss'
import { useEffect } from 'react';
import { pokemonServices } from './Services';

function App() {
  useEffect(() => {
    pokemonServices.getPokemon().then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <Switch>
      <Route path="/" exact component={Component} />
      {/* <Route path="/user" exact component */}
    </Switch>
  );
}

export default App;
