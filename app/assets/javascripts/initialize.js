$(document).ready(function() {
	var deliciousnessProgressBar = new DeliciousnessProgressBar(colourValues)
	new Controller(new FlavoursView(flavoursViewSelectors), new DeliciousnessView(hexValues), deliciousnessProgressBar, flavourDeliciousnessValues).init()
})

var flavoursViewSelectors = {
	flavourSelector: 'li',
	dropZoneSelector: '.drop_zone'
}

var flavourDeliciousnessValues = {
	ketchup: 7,
	butter: 10,
	truffleOil: 13,
	dillPickle: 7,
	blueCheese: 7,
	salt: 4,
	pepper: 4
}

var colourValues = {
	violet: 90,
	purple: 75,
	blue: 60,
	green: 45,
	yellow: 30,
	orange: 15,
	red: 0
}

var hexValues = {
	violet: '#123456',
	purple: '#123456',
	blue: '#123456',
	green: '#123456',
	yellow: '#123456',
	orange: '#123456',
	red: '#123456'
}