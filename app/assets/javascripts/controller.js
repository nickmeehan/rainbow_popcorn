function Controller(flavoursView, deliciousnessView, deliciousnessProgressBar, flavourDeliciousnessValues) {
	this.flavoursView = flavoursView;
	this.deliciousnessView = deliciousnessView;
	this.progressBar = deliciousnessProgressBar;
	this.flavoursScores = flavourDeliciousnessValues;
}

Controller.prototype = {
	init: function() {
		this.handleDragEvent();
		this.handleDropEvent();
	},
	handleDragEvent: function() {
		var $flavour = this.flavoursView.getFlavourSelector();
		$flavour.draggable({
			helper: 'clone'
		})
	},
	handleDropEvent: function() {
		var $dropZone = this.flavoursView.getFlavourDropZoneSelector();
		$dropZone.droppable({
      accept: this.flavoursView.flavourSelector,
      drop: this.dropEvent.bind(this)
    });
	},
	dropEvent: function(event, ui) {
		var flavourValue = FlavourMaster.returnFlavourValue(this.flavoursScores, ui.draggable.context.id)
		var barPositionAndStatus = this.progressBar.getPositionAndColour(flavourValue)
		if (this.progressBar.barStatus > 100) {
			FullBarEnding.rainbowPop(this)
		} else {
			this.deliciousnessView.rerenderBar(barPositionAndStatus)
		}
	}
}