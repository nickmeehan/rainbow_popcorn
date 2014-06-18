function FlavoursController(view) {
	this.view = view;
}

FlavoursController.prototype = {
	init: function() {
		this.handleDragEvent();
		this.handleDropEvent();
	},
	handleDragEvent: function() {
		var $flavour = this.view.getFlavourSelector();
		$flavour.drag(this.view.showDragEvent)
	},
	handleDropEvent: function() {
		var $dropZone = this.view.getFlavourDropZoneSelector();
    $dropZone.drop(function() {
    	console.log("DROPPED!!")
    })
	}
}