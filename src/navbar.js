import React from 'react';

function Navbar(props) {
    return (
        <div className='navbar'>
        <input className='searchbar' type="text" placeholder="Type movie name to search" onChange={(e)=>props.name(e.target.value)}/>
        <button className='button'>Search</button>
        </div>
    )
}
export default Navbar;