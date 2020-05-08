import React from "react"

class ShowPlayerPage extends React.Component {

    state = {
        player: {},
        clicked: false,
        playerStats: {},
        injured: false
        }
    
        componentDidMount(){
            let { id } = this.props.match.params
            fetch(`http://localhost:3000/players/${id}`).then(resp => resp.json()).then(data => this.setState({player: data}))
        }

        showStats = () => {
            fetch(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${this.state.player.Stat_id}`)
            .then(resp => resp.json()).then(data => this.setState({
                clicked: !this.state.clicked,
                playerStats: data
            }))
        }
        
        closeStats = () => {
            this.setState({
                clicked: !this.state.clicked
            })
        }

   

    render(){
        // console.log(this.state.injured)
        return(
            <div className = "showPlayerPage">
            <img src={this.state.player.img} className = "showplayerImg" />
            <div className = "showplayerDetails">
            <h1>{this.state.player.name}</h1>
            <h2>Height: {this.state.player.height}</h2>
            <h2>Position: {this.state.player.position}</h2>
            <h2>Weight: {this.state.player.weight} lbs</h2>
            <h2>Number: {this.state.player.number}</h2>
            {this.state.clicked && this.state.playerStats.data.length > 0
            
            ?

            <div>
            <h1>Season: {this.state.playerStats.data[0].season}</h1>
            <p> Games Played: {this.state.playerStats.data[0].games_played} </p>
            <p>Minutes Per Game: {this.state.playerStats.data[0].min}</p>
            <h3>Scoring</h3>
            <p>Points Per Game: {this.state.playerStats.data[0].pts}</p>
            <p>Field Goals Made Per Game: {this.state.playerStats.data[0].fgm} </p>
            <p>Field Goals Attempted Per Game: {this.state.playerStats.data[0].fga}</p>
            <p>Three Pointers Made Per Game: {this.state.playerStats.data[0].fg3m}</p>
            <p>Three Pointers Attempted Per Game: {this.state.playerStats.data[0].fg3a}</p>
            <p>Free Throws Made Per Game: {this.state.playerStats.data[0].ftm}</p>
            <p>Free Throws Attempted Per Game: {this.state.playerStats.data[0].fta}</p>
            <p>Field Goal Percentage: {this.state.playerStats.data[0].fg_pct * 100}%</p>
            <p>Three Point Percentage: {this.state.playerStats.data[0].fg3_pct * 100}%</p>
            <p>Free Throw Percentage: {this.state.playerStats.data[0].ft_pct * 100}%</p>
            <h3>Rebounding</h3>
            <p>Offensive Rebounds Per Game: {this.state.playerStats.data[0].oreb}</p>
            <p>Defensive Rebounds Per Game: {this.state.playerStats.data[0].dreb}</p>
            <p>Total Rebounds Per Game: {this.state.playerStats.data[0].reb}</p>
            <h3>Passing</h3>
            <p>Assists Per Game: {this.state.playerStats.data[0].ast}</p>
            <p>Turnovers Per Game: {this.state.playerStats.data[0].turnover}</p>
            <h3>Defense</h3>
            <p>Steals Per Game: {this.state.playerStats.data[0].stl}</p>
            <p>Blocks Per Game: {this.state.playerStats.data[0].blk}</p>
            <p>Fouls Per Game: {this.state.playerStats.data[0].pf}</p>
            <button className = "statsButton" onClick={this.closeStats}>Close Stats</button>
            </div>
            : <button className = "statsButton" onClick={this.showStats}>{this.state.player.name}'s Stats</button>}
            </div>
            {this.state.clicked && this.state.playerStats.data.length === 0 ? <h1>{this.state.player.name} was injured for the 2019 season</h1> : null}
        </div>
        )
    }
}

export default ShowPlayerPage