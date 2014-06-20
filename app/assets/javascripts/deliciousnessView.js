function DeliciousnessView() {

}

DeliciousnessView.prototype = {
	rerenderBar: function() {
		$('.bar').hide()
		$('.bar').show('slide', { direction: 'left' }, 500)
	}
}