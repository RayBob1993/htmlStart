$(document).on('ready', function(){
	'use strict';

	// Открытие картинок
	if (typeof($.fn.fancybox) !== "undefined") {
		$(".fancybox").fancybox({
			padding: 0,
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
	
	// Маскирование полей с телефоном
	if (typeof($.fn.mask) !== "undefined") {
		$('input[type="tel"]').mask('+7 (999) 999-9999');
	}

	// Видимость элементов
	if (typeof($.fn.viewportChecker) !== "undefined") {
		$('.section').viewportChecker();
	}
});
