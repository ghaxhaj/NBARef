import React from "react"
import '../styles.css'
// import ShowTeamPage from "./ShowTeamPage"
import { Link } from 'react-router-dom'

class PlayerCard extends React.Component{
    render(){
        
    return(

<div className="playerCard" >
    <Link to={`/players/${this.props.id}`} >
        <img src={this.props.img} className="playerImgCard" />
    </Link>
    <div>
        <p>{this.props.name}</p>
    </div>
    
</div>
        )
    }
}

export default PlayerCard