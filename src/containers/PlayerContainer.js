import React from "react"
import ShowPlayerPage from "../components/ShowPlayerPage"
import PlayerCard from "../components/PlayerCard"
import '../styles.css'

class PlayerContainer extends React.Component {

    state = {
        filterValue: null
    }

    renderPlayers = () => {
        if(this.props.players.length > 0 && this.state.filterValue == null){
            return this.props.players.sort(function(a,b){
                let nameA = a.name.toUpperCase()
                let nameB = b.name.toUpperCase()
                if(nameA < nameB){
                    return -1
                }if(nameA > nameB){
                    return 1
                }
                return 0
            }).map(player => {
            return <PlayerCard key={player.id} {...player} />
            })
        }
        if(this.state.filterValue != null){
            let filteredPlayers = this.props.players.filter(player => player.name.toUpperCase().includes(this.state.filterValue.toUpperCase()))
            return filteredPlayers.map(player => {
            return <PlayerCard key = {player.id}{...player} />
            })
    }
}

    filterResults = (event) => {
        this.setState({
            filterValue: event.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" className="searchBar" onChange={this.filterResults} placeholder="Search for names.."/>
                <div className="playerContainer">
                {this.renderPlayers()}
                </div>
            </div>
        )
    }
}

export default PlayerContainer