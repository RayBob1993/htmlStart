var Template = (function($){
	'use strict';

	return {

		// Меню гармошка
		accordion: function(selector){
			var el = $(selector),
				slideBlocks = el.next();

			el.on('click', function(event){
				var nextBlock = $(this).next();

				if(nextBlock.length){
					event.preventDefault();
				}

				if(!nextBlock.is(':visible')){
					el.removeClass('act');
					$(this).addClass('act');

					slideBlocks.slideUp().removeClass('act');
					nextBlock.slideDown().addClass('act');
				} else {
					el.removeClass('act');

					slideBlocks.slideUp().removeClass('act');
				}
			});	
		},

		// Простенький метод для определения типа устройства
		mobileDevice: function(){
			var device = {
				Android: function() {
					return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function() {
					return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function() {
					return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function() {
					return navigator.userAgent.match(/Opera Mini/i);
				},
				Windows: function() {
					return navigator.userAgent.match(/IEMobile/i);
				},
				any: function() {
					return (device.Android() || device.BlackBerry() || device.iOS() || device.Opera() || device.Windows());
				}
			}

			return device.any();
		}
	}
})(jQuery);