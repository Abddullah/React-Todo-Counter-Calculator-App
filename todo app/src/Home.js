import React, { Component } from 'react';
import logo from './logo.svg';
// import Navbar from './Navbar';
import './App.css';
import {
    Link
} from 'react-router-dom'

class Home extends Component {



    render() {
        return (



            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">React Application</h1>
                    <h1 className="App-title">Using React, React Router 4 and bootstrap.Batch 4.1 Roll 5216</h1>
                </header>
                <br /><br />
                <hr /><hr />
                <center>
                    <Link to="/todo"><button className="btn btn-outline-info btnMarginCustom" >Todo App</button> </Link><br /><br />
                    <Link to="/counter">  <button className="btn btn-outline-info btnMarginCustom" >Counter App</button></Link><br /><br />
                    <Link to="/calculator"><button className="btn btn-outline-info btnMarginCustom" >Calculator</button></Link><br /><br />
                </center>
                <br /><br /> <br /><br />
                <hr /><hr />
            </div>
        );
    }
}

export default Home;
