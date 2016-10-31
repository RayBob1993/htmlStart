'use strict';

$(document).on('ready', function(){

	// Открытие картинок
	if (typeof($.fn.fancybox) !== "undefined") {
		// Для галерей с изображениями
		$('.fancybox').fancybox({
			padding: 0,
			openEffect: 'elastic',
			closeEffect: 'elastic',
			helpers: {
				overlay: {
					locked: false
				},
				title: {
					type : 'over'
				}
			}
		});
		
		// Для видео роликов
		$('.fancyboxMedia').fancybox({
			padding: 0,
			maxWidth: 1000,
			maxHeight: 600,
			fitToView: false,
			autoSize: false,
			closeClick: false,
			openEffect: 'elastic',
			closeEffect: 'elastic'
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
});
