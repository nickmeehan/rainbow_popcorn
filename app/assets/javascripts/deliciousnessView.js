function DeliciousnessView(selectors, hexValues) {
  this.barSelector = selectors['barSelector']
  this.hexValues = hexValues;
}

DeliciousnessView.prototype = {
  getBarSelector: function() {
    return $(this.barSelector)
  },
	rerenderBar: function(arguments) {
    var $barSelector = this.getBarSelector()
    var barColour = arguments[0]
    var barWidth = arguments[1]
		$barSelector.hide()
    $barSelector.css({'background-color': this.hexValues[barColour], 'width': barWidth + '%'})
		$barSelector.show('slide', { direction: 'left' }, 400)
	}
}