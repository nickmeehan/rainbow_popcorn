function FlavoursView(selectors) {
	this.flavourSelector = selectors["flavourSelector"]
	this.dropZoneSelector = selectors["dropZoneSelector"]
}

FlavoursView.prototype = {
	getFlavourSelector: function() {
		return $(this.flavourSelector)
	},
	getFlavourDropZoneSelector: function() {
		return $(this.dropZoneSelector)
	},
	showDragEvent: function(event, dragObject) {
		$(this).css({
		  top: dragObject.offsetY,
		  left: dragObject.offsetX
		});
	}
}