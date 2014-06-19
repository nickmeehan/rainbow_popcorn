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
		$flavour.draggable({
			helper: "clone"
		})
		// $flavour.drag(this.view.showDragEvent)
	},
	handleDropEvent: function() {
		var $dropZone = this.view.getFlavourDropZoneSelector();
		$dropZone.droppable({
      accept: this.view.flavourSelector,
      drop: this.dropEvent.bind(this)
    });
	},
	dropEvent: function(event, ui) {
		console.log(event)
		console.log(ui.draggable.context.id)
	}
}