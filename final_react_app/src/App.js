import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Keyboard from './components/Keyboard';
import Schedule from './components/Schedule';
import Timer from './components/Timer'
import Error from './components/Error';
import Navigation from './components/Navigation';
import HomePage from './components/Home';
import Main from './components/Main';


class App extends Component {
  state = {
    profiles: []
  }

  handleAdd = (event, formInputs) => {
    event.preventDefault()
    fetch('http://localhost:3000/profiles', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
  })
  .then(createdProfile => createdProfile.json())
  .then(jsonedProfile => {
    this.setState({
      profiles: [jsonedProfile, ...this.state.profiles]
    })
  })
  .catch(error => console.log(error))
  }
  
  handleDelete = (deletedProfile) => {
    fetch(`http://localhost:3000/${deletedProfile.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((json) => {
        const profiles = this.state.profiles.filter(
          (profile) => profile.id !== deletedProfile.id
        );
        this.setState({ profiles });
      })
      .catch((error) => console.log(error));
  };
  
  handleUpdate = (event, formInputs) => {
    event.preventDefault();
    console.log("in it to add it");
    fetch(`http://localhost:3000/profiles/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((updatedProfile) => {
        this.getProfiles();
      })
      .catch((error) => console.log(error));
  };
  
  componentDidMount() {
    this.getProfile()
  }
  getProfile () {
    fetch('http://localhost:3000/profiles')
      .then(response => response.json())
      .then(json => this.setState({profiles: json}))
      .catch(error => console.error(error))
  }
  render() {
    return (     
       <BrowserRouter>
        <div className="App Container">
          <Navigation />
            <Switch>
             <Route path="/" component={HomePage} exact/>
             <Route path="/main" component={Main} 
              profiles={this.state.profiles}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
              handleSubmit={this.handleAdd}/>
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