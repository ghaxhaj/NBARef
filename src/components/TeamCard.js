import React from "react"
import '../styles.css'
// import ShowTeamPage from "./ShowTeamPage"
import { Link } from 'react-router-dom'

class TeamCard extends React.Component {


    render(){
        return(

<div className="teamCard">
<Link to={`/teams/${this.props.id}`} >
<img src={this.props.img} className="teamImg" />
</Link>
    {/* <div class="card-body">
        <p class="card-text">{this.props.name}</p>
    </div> */}
    
</div>

        )
    }
}

export default TeamCard