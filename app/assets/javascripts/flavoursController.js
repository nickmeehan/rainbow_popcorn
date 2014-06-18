function FlavoursController(view) {

}

FlavoursController.prototype = {
	init: function() {
		$('li').drag(function( ev, dd ){
      $( this ).css({
         top: dd.offsetY,
         left: dd.offsetX
      });
   })
	}
}