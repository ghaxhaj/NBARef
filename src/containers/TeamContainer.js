import React from "react"
import TeamCard from '../components/TeamCard'

class TeamContainer extends React.Component {
state = {
   teams: null
}



renderTeams = () => {

    if(this.props.teams.length > 0 && this.state.teams === null){
    
    return this.props.teams.sort(function(a,b){
        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()
        if(nameA < nameB){
            return -1
        }if(nameA > nameB){
            return 1
        }
        return 0
    }).map(team => {
        return <TeamCard key = {team.id} {...team} />
        
    })}
    if(this.state.teams !== null){
        return this.state.teams.sort(function(a,b){
            let nameA = a.name.toUpperCase()
            let nameB = b.name.toUpperCase()
            if(nameA < nameB){
                return -1
            }if(nameA > nameB){
                return 1
            }
            return 0
        }).map(team => {
            return <TeamCard key = {team.id}{...team} />
        })
    }
}

filterResults = (event) => {
    let filteredTeams = this.props.teams.filter(team => team.name.toUpperCase().includes(event.target.value.toUpperCase()))
    this.setState({
        teams: filteredTeams
    })
}

sortByConference = (event) => {
    if(event.target.value === "all"){
        this.setState({teams: null})
    }else{
    let filteredTeams = this.props.teams.filter(team => team.conference === event.target.value)

    this.setState({
        teams: filteredTeams
    })
}
}

sortByDivision = (event) => {
    if(event.target.value === "all"){
        this.setState({teams: null})
    }else{
    let filteredTeams = this.props.teams.filter(team => team.division === event.target.value)

    this.setState({
        teams: filteredTeams
    })
}
}

    render(){
        return(
            <div>
                <input type="text" className="searchBar" onChange={this.filterResults} placeholder="Search for names.."/>

                <div className = "dropDown">
                <label for="conference">Sort Teams By Conference:</label>
                <select onChange = {this.sortByConference} id = "conference">
                    <option value="all">All Teams</option>
                    <option value="Eastern Conference">Eastern Conference</option>
                    <option value="Western Conference">Western Conference</option>
                </select>
                </div>

                <div className = "dropDown">
                <label for="division">Sort Teams By Division:</label>
                <select onChange = {this.sortByDivision} id = "division">
                    <option value="all">All Teams</option>
                    <option value="Atlantic Division">Atlantic Division</option>
                    <option value="Central Division">Central Division</option>
                    <option value="Southeast Division">Southeast Division</option>
                    <option value="Northwest Division">Northwest Division</option>
                    <option value="Pacific Division">Pacific Division</option>
                    <option value="Southwest Division">Southwest Division</option>
                </select>
                </div>

                <div className = "teamContainer">
                {this.renderTeams()}
                </div>

            </div>
        )
    }
}

export default TeamContainer