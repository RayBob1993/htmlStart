var Template = (function($){
	'use strict';

	return {
		// ============================ Фиксация верхнего меню
		topMenuSectionFixed: function(){
			var self = this;

			var 
				topMenu = $('#topMenu'),
				topMenuOffsetTop = $('#header').innerHeight();

			if(win.scrollTop() >= topMenuOffsetTop){
				topMenu.addClass('fixed');
			} else {
				topMenu.removeClass('fixed');
			}

			return self;
		},
		
		// ============================ Прокрутка к началу страницы
		pageUp: function(){
			var self = this;

			$('html, body').animate({
				scrollTop: 0
			}, 300);

			return self;
		},
		
		// ============================ Показывать кнопку вверх только если был скролл
		pageUpButFade: function(){
			var self = this;

			var but = $('#pageUp');

			if(win.scrollTop() >= 200){
				but.fadeIn();
			} else {
				but.fadeOut();
			}

			return self;
		},

		// ============================ Меню гармошка
		accordion: function(selector){
			var self = this;
			
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
			
			return self;
		},

		// ============================ Простенький метод для определения типа устройства
		mobileDevice: function(){
			var self = this;
			
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
