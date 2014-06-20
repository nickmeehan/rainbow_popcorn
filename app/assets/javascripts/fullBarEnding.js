var FullBarEnding = (function() {
  var _beginningValue = 0;
  var _poppedSelector = '.popped'
  var _popcornPop = function() {
    $(_poppedSelector).toggleClass('hidden').toggleClass('hidden', 600)
  };
  return {
    rainbowPop: function(controller) {
      controller.progressBar.barStatus = _beginningValue
      var barPositionAndStatus = controller.progressBar.getPositionAndColour(_beginningValue)
      _popcornPop()
      controller.deliciousnessView.rerenderBar(barPositionAndStatus)
    }
  }
})();