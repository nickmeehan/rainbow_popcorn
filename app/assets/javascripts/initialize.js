$(document).ready(function() {
	var deliciousnessProgressBar = new DeliciousnessProgressBar()
	new Controller(new FlavoursView(flavoursViewSelectors), new DeliciousnessView(), deliciousnessProgressBar).init()
})

var flavoursViewSelectors = {
	flavourSelector: 'li',
	dropZoneSelector: '.drop_zone'
}