import React from 'react'
import {
    BrowserRouter as Router,
    Route,

} from 'react-router-dom'
import Todo from './TodoApp';
import CounterApp from './CounterApp';
import Home from './Home';
import Navbar from './Navbar';
import Calculator from './Calculator';


const CustomLink = () => (
    <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/todo' component={Todo} />
            <Route path='/counter' component={CounterApp} />
            <Route path='/calculator' component={Calculator} />
            <Navbar />
        </div>
    </Router>


)


export default CustomLink;
