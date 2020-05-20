import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Profile from './components/Profile';
import Keyboard from './components/Keyboard';
import Schedule from './components/Schedule';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/profile" component={Profile}/>
             <Route path="/keyboard" component={Keyboard}/>
             <Route path="/schedule" component={Schedule}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;