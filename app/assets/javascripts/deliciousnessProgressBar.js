function DeliciousnessProgressBar(colourValues) {
	this.barStatus = 0;
	this.colourValues = colourValues;
}

DeliciousnessProgressBar.prototype = {
	getPositionAndColour: function(addedFlavourValue) {
    this.updateBarStatus(addedFlavourValue)
    for (colour in this.colourValues) {
      if (this.barStatus >= this.colourValues[colour]) {
        return [colour, this.barStatus]
      }
    }
  },
  updateBarStatus: function(addedFlavourValue) {
    this.barStatus += addedFlavourValue
  }
}