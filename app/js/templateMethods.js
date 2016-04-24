var Template = (function($){
	'use strict';
	
	var win = $(window);

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

			var 
				el = $(selector).find('a'),
				subMenus = el.next();

			el.on('click', function(event){
				var 
					subMenu = $(this).next(),
					parent = $(this).parent();

				if(subMenu.length){
					event.preventDefault();
				}

				if(!subMenu.is(':visible')){
					el.parent().removeClass('act');
					parent.addClass('act');

					subMenus.slideUp();
					subMenu.slideDown();
				} else {
					el.parent().removeClass('act');

					subMenus.slideUp();
				}
			});

			// Установим класс на родителя, если есть вложенное меню
			el.each(function(index, el) {
				var 
					subMenu = $(this).next(),
					parent = $(this).parent();

				if(subMenu.length){
					parent.addClass('subMenu')
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
