import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './home';
import Main from './main';
import './App.css';
import Sale from './sale';
import './Sale.css';
import Rent from './rent';
import './Rent.css';
import Home1 from './home1';
import Home2 from './home2';
import Home3 from './home3';
import './home.css';
import ListLayout from './listlayout';
import GridLayout from './gridlayout';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/listlayout" component={ListLayout}/>
        <Route exact path="/gridlayout" component={GridLayout}/>
        <Route exact path="/Home3" component={Home3}/>
        <Route exact path="/Home2" component={Home2}/>
        <Route exact path="/Home1" component={Home1}/>
        <Route exact path="/rent" component={Rent}/>
        <Route exact path="/sale" component={Sale}/>
        <Route exact path="/main" component={Main}/>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
