//fixtureObj();


//function fixtureObj() {
	fetch("https://api-football-beta.p.rapidapi.com/teams?league=39&season=2019", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "api-football-beta.p.rapidapi.com",
			"x-rapidapi-key": "ab67f9271cmshb9a1cfd92fb83bep1190b3jsnf2ba7ce4381d"
		}})
.then(response => response.json())
// .then(teamData => renderTeamName(teamData.response))
.then(teamData => renderTeamName(teamData.response))
// we want to display the response that holds all the teams. 

//}

function renderTeamName(teamData) {
	console.log(teamData)
const team1List = document.querySelector(".team-1")
const team2List = document.querySelector(".team-2")
const team1Dropdown = document.createElement("list")
const team2Dropdown = document.createElement("list")
console.log(team1List)
console.log(team2List)
console.log(team1Dropdown)
console.log(team2Dropdown)

//creating buttons 
const Team1Btn = document.createElement("button")
Team1Btn.innerHTML= "Choose Team 1"
document.body.appendChild(Team1Btn)

const Team2Btn = document.createElement("button")
Team2Btn.innerHTML = "Choose Team 2"
document.body.appendChild(Team2Btn)





// what do we want to achieve?	
	// we want to display every team in the teamData



// team1Dropdown.addEventListener('click', renderTeamName);

// what are we doing here?
// parsing our team data, creating a new element of option 

// 38-44 are correct, don't like the way its written 
// for (const team of teamArray) { //  what even was teamArray????
// 	const opt = document.createElement("option");
// 	const newTeam = team.team // how does this even work??
// 	const newTeamName = newTeam.name
//     console.log(newTeamName);
// 	newTeamName.addEventListener('click', function(){


// 	opt.text = newTeamName;
// 	opt.value = newTeamName;
// 	team1Dropdown.appendChild(opt)
// 	team1List.appendChild(team1Dropdown);
// 	})	
//   }


  
}

// option tag holds my list, 

// function teamListClicker(team1Dropdown){
// 	team1Dropdown.addEventListener("click", team)
// }
// we need to make the list a clickable event to show the a clicked team in both img tags 



// team 1 name


// team one image 


// event listener for team one button which will display the image of the team 



//display team 1 stats 



//team two image 


// event listener for team two button which will display the image of the team 


// display team 2 stats 



// random match generator for the dice image/button 


// event listener for the dice



//match stats? 




//prediction for who will win in separate container 








// display  in container for results (who won (1-0))




