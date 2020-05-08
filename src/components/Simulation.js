import React from 'react'
import HomeDropDown from './HomeDropDown'
import AwayDropDown from './AwayDropDown'
import '../styles.css'

class Simulation extends React.Component{
    state = {
        homeTeam: null,
        awayTeam: null,
        homeImg: "https://pngimg.com/uploads/nba/nba_PNG6.png",
        awayImg: "https://pngimg.com/uploads/nba/nba_PNG6.png",
        homeTeamScore: null, 
        awayTeamScore: null,
        winner: null
    }

    selectedTeam = (event) => {
        let id = parseInt(event.target.value) 
        let team = this.props.teams.filter(team => team.id === id)


        this.setState({
            [event.target.id]: team,
            [event.target.name]: team[0].img,
            homeTeamScore: null,
            awayTeamScore: null,
            winner: null
        })
    }

    simulateGame = () => {
        if(this.state.homeTeam == null || this.state.awayTeam == null){
            return alert("Please Select a Home and Away Team")
        }

        if(this.state.homeTeam[0].name == this.state.awayTeam[0].name){
            return alert("A team cannot face itself")
        }
        
        else{

        let homeTeamPD = this.state.homeTeam[0].team_stat.ppg - this.state.homeTeam[0].team_stat.papg
        let awayTeamPD = this.state.awayTeam[0].team_stat.ppg - this.state.awayTeam[0].team_stat.papg
        let pd = (homeTeamPD + awayTeamPD) / 2

        let homeMax = this.state.homeTeam[0].team_stat.ppg + pd
        let homeMin = this.state.homeTeam[0].team_stat.ppg - pd
        let homeTeamScore = Math.floor(Math.random() * (homeMax - homeMin + 1) + homeMin)
        // let homeTeamScore = 10

        let awayMax = this.state.awayTeam[0].team_stat.ppg + pd
        let awayMin = this.state.awayTeam[0].team_stat.ppg - pd
        let awayTeamScore = Math.floor(Math.random() * (awayMax - awayMin + 1) + awayMin )
        // let awayTeamScore = 10

        if(homeTeamScore === awayTeamScore){
            return alert("OverTime! Click again to see who wins.")
        }

        {homeTeamScore > awayTeamScore ? 
            this.setState({
                homeTeamScore: homeTeamScore,
                awayTeamScore: awayTeamScore,
                winner: this.state.homeTeam
            }) : 
            this.setState({
                homeTeamScore: homeTeamScore,
                awayTeamScore: awayTeamScore,
                winner: this.state.awayTeam
            })
        }
        }
    }
    


    render(){
        return(
            <div className = "simulation">
            <h1>Simulate an NBA Game!</h1>
            <div className="simulationHomeDiv">
                <label for="conference">Home Team</label>
                <HomeDropDown setTeam = {this.selectedTeam}/>
                <img className = "simulationImg" src={this.state.homeImg}/>
            </div>
            <div className = "simulationAwayDiv">
                <label for="conference">Away Team</label>
                <AwayDropDown setTeam = {this.selectedTeam}/>
                <img className = "simulationImg" src={this.state.awayImg}/>
            </div>
        
                <button className="simulationButton" onClick = {this.simulateGame}>Simulate Game!</button>
                {
                    this.state.winner != null ? 
                    <div>
                        <h2>The Winner is the {this.state.winner[0].name}!</h2>
                        <h3>Final Score</h3>
                        <p>{this.state.homeTeam[0].name}: {this.state.homeTeamScore}</p>
                        <p>{this.state.awayTeam[0].name}: {this.state.awayTeamScore}</p>

                    </div> : null
                }
            </div>
        )
    }
}

export default Simulation