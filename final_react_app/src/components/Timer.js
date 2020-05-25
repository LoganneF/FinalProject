import React, { Component } from 'react'

class Timer extends Component {
    state = {
        timerStarted: false,
        timerStopped: true,
        hours: 0,
        minutes: 0,
        seconds: 0,
        captures: []
    }

    handleTimerStart(e) {
        e.preventDefault();
        if(this.state.timerStopped) {
          this.timer = setInterval(() => {
              this.setState({timerStarted: true, timerStopped: false});
              if(this.state.timerStarted) {
                if(this.state.seconds >= 60) {
                  this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: 0}));
                }
                if(this.state.minutes >= 60) {
                  this.setState((prevState) => ({ hours: prevState.hours + 1, minutes: 0, seconds: 0}));
      
                }
                this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
              }
      
          }, 1000);
        }
      }

      handleTimerStop(e) {
          e.preventDefault();

        this.setState({timerStarted: false, timerStopped: true});
        clearInterval(this.timer);
      }

      handleTimerReset() {
        this.setState({
          timerStarted: false,
          timerStopped: true,
          seconds: 0,
          minutes: 0,
          hours: 0,
          captures: []
        });
        clearInterval(this.timer);
      }


    render () {
        
        return (
    
        <div className="container">
            <h2 className="text-center">React Based Timer</h2>
            <div className="timer-container">
                <div className="current-timer">
                    {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
                </div>
                <div className="timer-controls">
                <button className="btn btn-success" onClick={this.handleTimerStart.bind(this)}>Start 
                Timer</button>
                <button className="btn btn-alert" onClick={this.handleTimerStop.bind(this)}>Stop Timer</button>
                <button className="btn btn-danger" onClick={this.handleTimerReset.bind(this)}>Reset!</button>
                </div>
                <figure>
                  <img src={require('../images/help.png')} alt="help"/>
                  <figcaption>Help</figcaption>
                </figure>
            </div>
            <div className="tasks">
              <h1>My Tasks</h1>
              <figure>
                <img src={require('../images/homework.png')} alt="notebook paper"/>
                <figcaption>Homework</figcaption>
              </figure>
              <figure>
                <img src={require('../images/laundry.png')} alt="laundry basket"/>
                <figcaption>Laundry</figcaption>
              </figure>
              <figure>
                <img src={require('../images/sweep.png')} alt="broom"/>
                <figcaption>Sweep</figcaption>
              </figure>
              <figure>
                <img src={require('../images/cleanroom.png')} alt="dirty room"/>
                <figcaption>Clean Room</figcaption>
              </figure>
            </div>
            <div className="tasks">
              <h1>My Rewards</h1>
              <figure>
                <img src={require('../images/snack.png')} alt="watermelon slice"/>
                <figcaption>Snack</figcaption>
              </figure>
              <figure>
                <img src={require('../images/TV.png')} alt="television"/>
                <figcaption>TV</figcaption>
              </figure>
              <figure>
                <img src={require('../images/outside.png')} alt="tree"/>
                <figcaption>Outside</figcaption>
              </figure>
              <figure>
                <img src={require('../images/play.png')} alt="boy playing with tools"/>
                <figcaption>Play</figcaption>
              </figure>
              
            </div>
        </div>
    )
}
}   
export default Timer 