function DeliciousnessView(hexValues) {
  this.hexValues = hexValues;
}

DeliciousnessView.prototype = {
	rerenderBar: function() {
		$('.bar').hide()
		$('.bar').show('slide', { direction: 'left' }, 500)
	}
}