import React from 'react'
import {
    Link
} from 'react-router-dom'
import './App.css';



const Navbar = () => (
    <div className="linkCenter">
        < Link to="/" >Home</Link>
        < Link to="/todo" >Todo App</Link>
        < Link to="/counter" >Counter Apps</Link>
        < Link to="/calculator" >Calculator</Link>
    </div>

)


export default Navbar;

