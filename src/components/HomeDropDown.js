import React from "react"

function HomeDropDown(props){
    return(
        <div>
             <select id = "homeTeam" name="homeImg" onChange={props.setTeam}>
                    <option value="30">Atlanta Hawks</option>
                    <option value="31">Boston Celtics</option>
                    <option value="32">Brooklyn Nets</option>
                    <option value="33">Charlotte Hornets</option>
                    <option value="34">Chicago Bulls</option>
                    <option value="35">Cleveland Cavaliers</option>
                    <option value="36">Dallas Mavericks</option>
                    <option value="37">Denver Nuggets</option>
                    <option value="38">Detroit Pistons</option>
                    <option value="39">Golden State Warriors</option>
                    <option value="40">Houston Rockets</option>
                    <option value="41">Indiana Pacers</option>
                    <option value="42">Los Angeles Clippers</option>
                    <option value="43">Los Angeles Lakers</option>
                    <option value="44">Memphis Grizzlies</option>
                    <option value="45">Miami Heat</option>
                    <option value="46">Milwaukee Bucks</option>
                    <option value="58">Minnesota Timberwolves</option>
                    <option value="47">New Orleans Pelicans</option>
                    <option value="48">New York Knicks</option>
                    <option value="49">Oklahoma City Thunder</option>
                    <option value="50">Orlando Magic</option>
                    <option value="51">Philadelphia 76ers</option>
                    <option value="59">Phoenix Suns</option>
                    <option value="52">Portland Trail Blazers</option>
                    <option value="53">Sacramento Kings</option>
                    <option value="54">San Antonio Spurs</option>
                    <option value="55">Toronto Raptors</option>
                    <option value="56">Utah Jazz</option>
                    <option value="57">Washington Wizards</option>
                </select>
        </div>
    )
}

export default HomeDropDown