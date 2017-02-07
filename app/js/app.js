'use strict';

var App = (function($){

	return {
		slickInit: function(){

			if (typeof($.fn.slick) !== "undefined") {
				$('#mainSlider').slick({
					
				});
			}

			return this;

		},
		
		fancyboxInit(){

			if (typeof($.fn.fancybox) !== "undefined") {
				// Для галерей с изображениями или роликами
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
						},
						thumbs: {
							width: 100,
							height: 100
						},
						media: {}
					},
					beforeShow : function() {
						this.title = (this.title ? '' + this.title + '' : '') + ' <span class="fancyboxNum">' + (this.index + 1) + ' из ' + this.group.length + ' </span>';
					}
				});
			}

			return this;

		},
		
		inputTelMaskInit(){

			if (typeof($.fn.mask) !== "undefined") {
				$('input[type="tel"]').mask('+7 (999) 999-9999');
			}

			return this;

		},
		
		// ============================ Скролить до элемента
		scrollTo: function(element){

			var 
				scrollTo = $(element),
				offset = scrollTo.offset().top;

			$('html, body').animate({
				scrollTop: offset
			}, 300);

			return this;
		},

		// ============================ Отправка форм
		sendForm: function(form){
			var form = $(form);

			$.ajax({
				url: form.attr('action'),
				type: form.attr('method') || 'POST',
				dataType: 'html',
				data: form.serialize(),
			}).done(function(result){
				
				if(result && (result === 'ok')){
					console.log(result);
					
					form.trigger('reset');
				} else {
					console.error('Ошибка, форма не отправлена');
				}

			});
		},
		
		// ============================ Фиксация верхнего меню
		topMenuSectionFixed: function(){

			var 
				topMenu = $('#topMenu'),
				topMenuOffsetTop = $('#header').innerHeight();

			if(win.scrollTop() >= topMenuOffsetTop){
				topMenu.addClass('fixed');
			} else {
				topMenu.removeClass('fixed');
			}

			return this;
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

			return this;
		},

		// ============================ Меню гармошка
		accordion: function(selector){

			var 
				el = $(selector).find('a'),
				subMenus = el.next();
			
			function init(){
				var 
					subMenu = $(this).next(),
					parent = $(this).parent();

				if(subMenu.length){
					event.preventDefault();
				}

				if(!subMenu.is(':visible')){
					el
						.parent()
						.removeClass('act');

					parent.addClass('act');

					subMenus.slideUp();
					subMenu.slideDown();
				} else {

					el
						.parent()
						.removeClass('act');

					subMenus.slideUp();
				}
			}

			el
				.unbind('click')
				.on('click', init);

			// Установим класс на родителя, если есть вложенное меню
			el.each(function(index, el) {
				var 
					subMenu = $(this).next(),
					parent = $(this).parent();

				if(subMenu.length){
					parent.addClass('subMenu')
				}
			});

			return this;
		},

		// ============================ Простенький метод для определения типа устройства
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
		},
		
		// ============================ Кол-во товара для покупки
		catalogItemCounter: function(field){
			
			var field = $(field);
			
			function fieldCount(el){

				var 
					// Мин. значение
					min = el.data('min') || false,

					// Макс. значение
					max = el.data('max') || false, 

					// Кнопка уменьшения кол-ва
					dec = el.prev('.dec'), 

					// Кнопка увеличения кол-ва
					inc = el.next('.inc');

				function init(el) {
					if(!el.attr('disabled')){
						dec.on('click', decrement);
						inc.on('click', increment);
					}

					// Уменьшим значение
					function decrement() {
						var value = parseInt(el.val());
						value--;

						if(!min || value >= min) {
							el.val(value);
						}
					};

					// Увеличим значение
					function increment() {
						var value = parseInt(el.val());
							
						value++;

						if(!max || value <= max) {
							el.val(value++);
						}
					};
					
				}

				el.each(function() {
					init($(this));
				});
			};

			if(field.length){

				field.each(function(){
					fieldCount($(this));
				});

			}
			
			return this;
		}
		
	}
})(jQuery);
