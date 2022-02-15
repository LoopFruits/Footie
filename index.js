fixtureObj();


function fixtureObj() {
	fetch("https://api-football-beta.p.rapidapi.com/teams?league=39&season=2019", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "api-football-beta.p.rapidapi.com",
			"x-rapidapi-key": "ab67f9271cmshb9a1cfd92fb83bep1190b3jsnf2ba7ce4381d"
		}})
.then(response => response.json())
.then(fixtureData => renderTeamName(fixtureData.response))
}

function renderTeamName(teamArray) {
console.log(teamArray)
}

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




