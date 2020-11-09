import './App.css';
import { Route, Switch } from 'react-router-dom';
import Component from './Component'
import './scss/style.scss'

function App() {
  return (
   <Switch>
     <Route path="/" exact component={Component} />
   </Switch>
  );
}

export default App;
