$(document).on('ready', function(){
	'use strict';

	// Открытие картинок
	if (typeof($.fn.fancybox) !== "undefined") {
		$(".fancybox").fancybox({
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
	}

	// Слайдеры
	if (typeof($.fn.slick) !== "undefined") {
		$('#mainSlider').slick();
	}

	// Видимость элементов
	if (typeof($.fn.viewportChecker) !== "undefined") {
		$('.section').viewportChecker();
	}
});
