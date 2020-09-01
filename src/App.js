import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import ListEmployeeComponent from './component/ListEmployeeComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
            <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
