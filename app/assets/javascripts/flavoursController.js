function FlavoursController(view) {

}

FlavoursController.prototype = {
	init: function() {
		$('#ketchup').draggable({
			helper: "clone"
		})
	}
}