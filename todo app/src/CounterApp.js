import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';


class CounterApp extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      range: 1,
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.formHandler = this.formHandler.bind(this)
    this.clearCounter = this.clearCounter.bind(this)
  }

  formHandler(ev) {
    this.setState({
      range: ev.target.value
    })
  }


  increment() {
    let cloneRange = Number(this.state.range)
    this.setState({
      counter: this.state.counter + cloneRange
    })

    if (this.state.counter > 100) {
      alert("You have reached maximum limit");
      this.setState({
        counter: 0
      })
    }
  }

  decrement() {
    let cloneRange = Number(this.state.range)

    this.setState({
      counter: this.state.counter - cloneRange
    })
    if (this.state.counter < -100) {
      alert("You have reached minimum limit");
      this.setState({
        counter: 0
      })
    }

  }


  clearCounter() {
    this.setState({
      counter: 0,
      range: 1,
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />  <br />
        <h1>Counter <span className="badge badge-secondary">{this.state.counter}</span></h1>

        <br />  <br />
        <p>Please set your range</p>
        <input type="text" className="form-control input-width1" placeholder="Please set your range" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.range} onChange={this.formHandler} />
        <br />  <br />
        <Button outline color="secondary btnMarginCustom btnMarginCustom1" onClick={this.increment}>Increment</Button>

        <Button outline color="secondary btnMarginCustom btnMarginCustom1" onClick={this.decrement}>Decrement</Button>
        <Button outline color="secondary btnMarginCustom btnMarginCustom1" onClick={this.clearCounter}>Clear</Button>

        <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><hr /><hr />

      </div>
    );
  }
}

export default CounterApp;
