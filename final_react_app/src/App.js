import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Profile from './components/Profile';
import Keyboard from './components/Keyboard';
import Schedule from './components/Schedule';
import Timer from './components/Timer'
import Error from './components/Error';
import Navigation from './components/Navigation';
import HomePage from './components/Home';


class App extends Component {
  render() {
    return (     
       <BrowserRouter>
        <div className="App Container">
          <Navigation />
            <Switch>
             <Route path="/" component={HomePage} exact/>
             <Route path="/profile" component={Profile}/>
             <Route path="/keyboard" component={Keyboard}/>
             <Route path="/schedule" component={Schedule}/>
             <Route path="/timer" component={Timer}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;