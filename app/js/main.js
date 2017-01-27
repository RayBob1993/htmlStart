'use strict';

$(document).on('ready', function(){
	
	App.
		.slickInit()
		.fancyboxInit()
		.inputTelMaskInit('input[type="tel"]')
		.counter('.fieldCount');
	
});
