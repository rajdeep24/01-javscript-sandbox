const teams = ['Washington Wizards', 'atlanta hawks', 'New York Knicks', 'Orlando Magic', 'Indiana Pacers']



for (let i = 0; i < teams.length; i = i + 1 ) {

	const isUpperCase = teams[i].charAt(0) === teams[i].charAt(0).toUpperCase()

	if (isUpperCase) {
		console.log(teams[i])
	}

	if (isUpperCase == false) {
		console.log("error " + teams[i]);
	}
}