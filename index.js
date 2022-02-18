//fixtureObj();

document.addEventListener('DOMContentLoaded',function(){
	

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
// const team1Dropdown = document.createElement("list")
// const team2Dropdown = document.createElement("list")
// console.log(team1List)
// console.log(team2List)
// console.log(team1Dropdown)
// console.log(team2Dropdown)
	teamData.forEach(team => {
		console.log(team) // loop is showing team obj, which we want 
		const team1Dropdown = document.createElement('list')
		console.log(team1Dropdown)
		team1Dropdown.textContent = team.name	
		const teamOne = document.getElementsByClassName('team-1')
		console.log(teamOne)
		
	})
	
//creating buttons, all events are all firing after one button click. Fixed the issue, all the event listener are attached to one button
const Team1Btn = document.createElement("button")
Team1Btn.textContent = "Choose Team 1"
Team1Btn.addEventListener('click', function(){
	alert('I don\'t know about that one chief')
})

document.body.appendChild(Team1Btn)

const Team2Btn = document.createElement("button")
Team2Btn.textContent = "Choose Team 2"
Team2Btn.addEventListener('click', function(){
	alert('Did We Just Become Bffs?!?')
})
document.body.appendChild(Team2Btn)

const randomMatchupBtn = document.createElement("button")
randomMatchupBtn.textContent = "Feelin\' Lucky?"
randomMatchupBtn.addEventListener('click', function(){
	alert('You\'ve got spunk')
	// maybe i shouldn't do  this alert?
})
document.body.appendChild(randomMatchupBtn)

// now we need event listeners for these buttons 
	// more specifically we need the team names attached to these buttons 





// what do we want to achieve?	
	// we want to display every team in the teamData



// team1Dropdown.addEventListener('click', renderTeamName);

// what are we doing here?
// parsing our team data, creating a new element of option 

// 38-44 are correct, don't like the way its written 
// for (const team of teamArray) { //  what even was teamArray????
// 	const opt = document.createElement("option");
// 	const newTeam = team.team // how does this even work?? take a look at the obj name
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



})
