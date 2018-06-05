(function ($) {

	var App = function () {
		this.init();
	};

	App.prototype = {
		init: function () {

			this
				.swiperInit()
				.fancyboxInit()
				.inputTelMaskInit()
				.counter('.fieldCount');

		},

		swiperInit: function () {
			
			var mySwiper = new Swiper('#reviewsSlider', {
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				slidesPerView: 2,
				spaceBetween: 30,
				breakpoints: {
					569: {
						slidesPerView: 1,
						spaceBetween: 0
					}
				}
			});

			return this;

		},

		fancyboxInit: function () {

			if (typeof($.fn.fancybox) !== "undefined"){
				$('[data-fancybox]').fancybox({
					image: {
						protect: true
					},
					youtube: {
						controls: 0,
						showinfo: 0
					},
				});
			}

			return this;

		},

		inputTelMaskInit: function () {

			if (typeof($.fn.mask) !== "undefined") {
				$('input[type="tel"]').mask('7 (999) 999 99 99');
			}

			return this;

		},

		scrollTo: function () {

			var scrollTo = $('[data-scroll-to]');

			scrollTo.on('click', function () {
				var target = $($(this).attr('href'));
				var offset = target.offset().top;

				$('html, body').animate({
					scrollTop: offset
				}, 300);
			});

			return this;
		}

		sendForm: function (selector) {
			var form = $(selector);

			$.ajax({
				url: form.attr('action'),
				type: form.attr('method') || 'POST',
				dataType: 'html',
				data: form.serialize(),
			}).done((result) => {

				if(result && (result === 'ok')){
					console.log(result);

					form.trigger('reset');
				} else {
					console.error('Ошибка, форма не отправлена');
				}

			});
		},

		// ============================ Прокрутка к началу страницы
		pageUp: function (selector, speed) {
			var speed = speed || 200;
			var button = $(selector);

			button.on('click', function (event) {

				event.preventDefault();

				$('html, body').animate({
					scrollTop: 0
				}, speed);

			});

			return this;
		},

		// ============================ Показывать кнопку вверх только если был скролл
		pageUpFadeToggle: function (selector, length) {
			var length = length || 200;
			var button = $(selector);

			$(window).on('load scroll', function () {
				var scrollTop = $(this).scrollTop();

				scrollTop >= length
					? button.fadeIn()
					: button.fadeOut()
				;
			});

			return this;
		},

		accordion: function (selector) {

			var
				el = $(selector).find('a'),
				subMenus = el.next();

			function init(event){
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
			el.each(function () {
				var
					subMenu = $(this).next(),
					parent = $(this).parent();

				if(subMenu.length){
					parent.addClass('subMenu')
				}
			});

			return this;
		},

		isMobileDevice: function () {

			var device = {
				Android: function () {
					return navigator.userAgent.match(/Android/i)
				},
				BlackBerry: function () {
					return navigator.userAgent.match(/BlackBerry/i)
				},
				iOS: function () {
					return navigator.userAgent.match(/iPhone|iPad|iPod/i)
				},
				Opera: function () {
					return navigator.userAgent.match(/Opera Mini/i)
				},
				Windows: function () {
					return navigator.userAgent.match(/IEMobile/i)
				},
				any: function () {
					return device.Android() || device.BlackBerry() || device.iOS() || device.Opera() || device.Windows()
				}
			};

			return device.any();
		},

		counter: function (selector, prfx) {
			var prfx = prfx || '';
			var field = $(selector);

			function fieldCount (el) {
				// Мин. значение
				var min = el.data('min') || false;
				// Макс. значение
				var max = el.data('max') || false;
				// Кнопка уменьшения кол-ва
				var dec = el.prev('.dec');
					// Кнопка увеличения кол-ва
				var inc = el.next('.inc');

				function init (el) {
					if(!el.attr('disabled')){
						dec.on('click', decrement);
						inc.on('click', increment);
					}

					// Уменьшим значение
					function decrement() {
						var value = parseInt(el.val());
						value--;

						if(!min || value >= min) {
							el.val(value + prfx);
						}
					}

					// Увеличим значение
					function increment() {
						var value = parseInt(el.val());

						value++;

						if(!max || value <= max) {
							el.val(value++ + prfx);
						}
					}

				}

				el.each(function () {
					init($(this))
				});
			}

			if(field.length){
				field.each(function () {
					fieldCount($(this))
				});
			}

			return this;
		}
	};

	var app = new App();
})(jQuery);
