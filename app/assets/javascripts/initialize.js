$(document).ready(function() {
	new FlavoursController(new FlavoursView(flavoursViewSelectors)).init()
})

var flavoursViewSelectors = {
	flavourSelector: 'li',
	dropZoneSelector: '.drop_zone'
}