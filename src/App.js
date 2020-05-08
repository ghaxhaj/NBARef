import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TeamContainer from './containers/TeamContainer'
import PlayerContainer from './containers/PlayerContainer'
import ShowPlayerPage from './components/ShowPlayerPage'
import ShowTeamPage from './components/ShowTeamPage'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Simulation from './components/Simulation'

class App extends React.Component {

  state = {
    teams: {},
    players: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/teams').then(resp => resp.json()).then(data => this.setState({teams: data}))
    fetch('http://localhost:3000/players').then(resp => resp.json()).then(data => this.setState({players: data}))
  }



  render(){
    // {console.log(this.state.players)}
  return (
    <Router>
    
      <NavBar/>

      <Switch>
        <Route path = "/teams/:id" component={ShowTeamPage} />
        <Route path = "/players/:id" component={ShowPlayerPage} /> 
        <Route path = "/teams"> <TeamContainer teams = {this.state.teams}/> </Route>
        <Route path = "/players"> <PlayerContainer players = {this.state.players}/> </Route>
        <Route path = "/simulation"> <Simulation teams = {this.state.teams}/> </Route>

       
       
        <Route path = "/"> <Home teams={this.state.teams} players = {this.state.players}/> </Route>
      </Switch>

    </Router>
        
  );
}}

export default App;
