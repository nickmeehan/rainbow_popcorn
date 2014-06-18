function FlavoursController(view) {

}

FlavoursController.prototype = {
	init: function() {
		$('li').drag(function( type, options ){
      $( this ).css({
         top: options.offsetY,
         left: options.offsetX
      });
    })
	}
}