import React from "react"
import '../styles.css'
import { Link } from 'react-router-dom'

class ShowTeamPage extends React.Component {

    state = {
    team: '',
    clicked: false
    }

    componentDidMount(){
        let { id } = this.props.match.params
        fetch(`http://localhost:3000/teams/${id}`).then(resp => resp.json()).then(data => this.setState({team: data}))  
    }

    renderRoster = () => {
        // console.log("hi")
        if(this.state.team){
    
        return this.state.team.players.map(player => {
        return(
        
            <p>{player.position} {player.name}</p>
   
        )
        })
    }
    }

    showStats = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    

    render(){
        {console.log(this.state.team.players)}
        return(
            <div className = "showTeamPage">
                
                <img src={this.state.team.img} className = "showTeamImg" />
                <div className = "showTeamDetails">
                <h1>{this.state.team.name}</h1>
                <h2>{this.state.team.abbreviation}</h2>
                <h2>{this.state.team.city}</h2>
                <h2>{this.state.team.conference}</h2>
                <h2>{this.state.team.division}</h2>
                {this.state.clicked ? 
                <div>
                <h3>Season: {this.state.team.team_stat.season}</h3>
                <p>Points Per Game: {this.state.team.team_stat.ppg}</p>
                <p>Points Allowed Per Game: {this.state.team.team_stat.papg}</p>
                <p>Rebounds Per Game: {this.state.team.team_stat.rpg}</p>
                <p>Assists Per Game: {this.state.team.team_stat.apg}</p>
                <p>Steals Per Game: {this.state.team.team_stat.spg}</p>
                <p>Blocks Per Game: {this.state.team.team_stat.bpg}</p>
                <p>Turn-Overs Per Game: {this.state.team.team_stat.topg}</p>
                <p>Average Field Goal Percentage: {this.state.team.team_stat.fgper * 100}%</p>
                <p>Average 3-Point Percentage: {this.state.team.team_stat.threefgper * 100}%</p>
                <p>Average Free Throw Percentage: {this.state.team.team_stat.ftper * 100}%</p>
                <p>Efficiency Field Goal Percentage: {this.state.team.team_stat.efgper * 100}%</p>
                <button className = "statsButton" onClick={this.showStats}>Close Stats</button> 
                </div>
                :
                <button className = "statsButton" onClick={this.showStats}>Team Stats</button>
                }
                </div>
               

            
                <h1>Roster</h1>
                {this.renderRoster()}
                
            </div>
        )
    }
}

export default ShowTeamPage