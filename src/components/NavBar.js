import React from "react"
import { Link, NavLink } from 'react-router-dom'
import '../styles.css'

class NavBar extends React.Component {

    render(){
        return(

        <div className= "navBar">
                <img  className = "logo" src="https://theundefeated.com/wp-content/uploads/2017/06/nbalogo.jpg?w=700" /> 
  
            <div>
                <NavLink  to='/'>Home</NavLink> 
            </div>
            
            <div>
                <NavLink  to='/teams'>Teams</NavLink> 
            </div>
            
            <div>
                <NavLink  to='/players'>Players</NavLink> 
            </div>
            <div>
                <NavLink to='/simulation'>Simulation</NavLink>
            </div>

        </div>
        )
    }
}

export default NavBar