import React from 'react';
import {NavLink} from 'react-router-dom'


const Navigation = () => {
    return (
        <div className='header'>
            <NavLink className='NavLink' exact  to='/' activeClassName="selectedLink" >Meet The Smurfs</NavLink>
            <NavLink className='NavLink' activeClassName="selectedLink" to='/smurf-form'>AddSmurfs</NavLink>
        </div>
    );
}

export default Navigation;
