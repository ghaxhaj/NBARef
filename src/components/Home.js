import React from "react"

class Home extends React.Component {

    render(){
        return(
            <div>
                <div className = "showPlayerPage">
                <h1> Welcome to NBA Reference!</h1>
                <h2>NBA Reference is a reference site that gives you raw data from the 2019-2020 NBA season.</h2>
                <h2>You can sort through all teams and players, along with their stats.</h2>
                <h2>You can also simulate NBA games based on the team's stats this past season.</h2>
                </div>
                <br></br>
            <div className = "homePageDiv">
                <div className = "homePageElements">
                    <h3>Top 4 Scoring Teams</h3>
                    <ul>
                        <li>Milkaukee Bucks: 118.6 PPG</li>
                        <li>Houston Rockets: 118.1 PPG</li>
                        <li>Dallas Mavericks: 116.4 PPG</li>
                        <li>Los Angeles Clippers: 116.4 PPG</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Defensive Teams</h3>
                    <ul>
                        <li>Toronto Raptors: 106.5 PAPG</li>
                        <li>Boston Celtics: 106.8 PAPG</li>
                        <li>Los Angeles Lakers: 106.9 PAPG</li>
                        <li>Orlango Magic: 107.3 PAPG</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Rebounding Teams</h3>
                    <ul>
                        <li>Milkaukee Bucks: 51.7 RPG</li>
                        <li>Brooklyn Nets: 48.5 RPG</li>
                        <li>Los Angeles Clippers: 48.0 RPG</li>
                        <li>Dallas Mavericks: 47.0 RPG</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Assisting Teams</h3>
                    <ul>
                        <li>Phoenix Suns: 27.2 APG</li>
                        <li>Memphis Grizzlies: 27.0 APG</li>
                        <li>New Orleans Pelicans: 27.0 APG</li>
                        <li>Denver Nuggets: 26.5 APG</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Teams in Steals</h3>
                    <ul>
                        <li>Chicago Bulls: 10.0 SPG</li>
                        <li>Toronto Raptors: 8.8 SPG</li>
                        <li>Minnesota Timberwolves: 8.7 SPG</li>
                        <li>Los Angeles Lakers: 8.6 SPG</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Teams in Blocks</h3>
                    <ul>
                        <li>Los Angeles Lakers: 6.8 BPG</li>
                        <li>Portland Trail Blazers: 6.2 BPG</li>
                        <li>Milwaukee Bucks: 6.0 BPG</li>
                        <li>Minnesota Timberwolves: 5.7 BPG</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Teams in Field Goal Percentage</h3>
                    <ul>
                        <li>Los Angeles Lakers: 48.5%</li>
                        <li>Indiana Pacers: 47.7%</li>
                        <li>Milwaukee Bucks: 47.7%</li>
                        <li>Utah Jazz: 47.5%</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Scoring Players</h3>
                    <ul>
                        <li>James Harden: 34.4 PPG</li>
                        <li>Bradley Beal: 30.5 PPG</li>
                        <li>Giannis Antetokounmpo: 29.6 PPG</li>
                        <li>Trae Young: 29.6 PPG</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 PER(Player Efficiency Rating)</h3>
                    <ul>
                        <li>Giannis Antetokounmpo: 31.71</li>
                        <li>James Harden: 28.39</li>
                        <li>Anthony Davis: 28.25</li>
                        <li>Luka Doncic: 27.75</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Rebounding Players</h3>
                    <ul>
                        <li>Andre Drummond: 15.2 RPG</li>
                        <li>Hassan Whiteside: 14.2 RPG</li>
                        <li>Giannis Antetokounmpo: 13.7 RPG</li>
                        <li>Rudy Gobert: 13.7 RPG</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Assisting Players</h3>
                    <ul>
                        <li>Lebron James: 10.6 APG</li>
                        <li>Trae Young: 9.3 APG</li>
                        <li>Ricky Rubio: 8.9 APG</li>
                        <li>Luka Doncic: 8.7 APG</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Blocks Leaders</h3>
                    <ul>
                        <li>Hassan Whiteside: 3.1 BPG</li>
                        <li>Brook Lopez: 2.4 BPG</li>
                        <li>Anthony Davis: 2.4 BPG</li>
                        <li>Myles Turner: 2.2 BPG</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Steals Leaders</h3>
                    <ul>
                        <li>Ben Simmons: 2.1 SPG</li>
                        <li>Kris Dunn: 2.0 SPG</li>
                        <li>Andre Drummond: 1.9 SPG</li>
                        <li>Fred VanVleet: 1.9 SPG</li>
                    </ul>
                </div>
                <div className = "homePageElements">
                    <h3>Top 4 Field Goal Percentage Leaders</h3>
                    <ul>
                        <li>Mitchell Robinson: 74.2%</li>
                        <li>Rudy Gobert: 69.8%</li>
                        <li>Jarrett Allen: 64.6%</li>
                        <li>Clint Capela: 62.9%</li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}

export default Home