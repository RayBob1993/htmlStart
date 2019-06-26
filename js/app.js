(function ($) {

	var App = function () {
		// Точки для адаптивности
		this.mq = {
			xlg: 1319,
			lg: 1069,
			md: 819,
			sm: 569,
			xsm: 420
		};

		// Формат цен
		this.priceFormat = wNumb({
			mark: '',
			thousand: ' '
		});

		// На какой позиции скролла показать фиксированные элементы
		this.fixedElementsVisible = 200;

		this.init();
	};

	App.prototype = {
		init: function () {
			this
				.swiperInit()
				.fancyboxInit()
				.inputTelMaskInit()
				.counter()
				.accordion('.topMenu');
		},

		swiperInit: function () {
			if (typeof window.Swiper === 'undefined') {
				return this;
			}

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
			if (typeof($.fn.fancybox) !== 'undefined') {
				$('[data-fancybox]').fancybox({
					image: {
						protect: true
					},
					youtube: {
						controls: 0,
						showinfo: 0
					}
				});
			}

			return this;
		},

		inputTelMaskInit: function () {
			if (typeof($.fn.mask) !== 'undefined') {
				$('input[type="tel"]').mask('7 (999) 999 99 99');
			}

			return this;
		},

		scrollTo: function () {
			var scrollTo = $('[data-scroll-to]');

			scrollTo.on('click', function () {
				var target = $($(this).attr('href') || scrollTo.data('scroll-to'));
				var offset = target.offset().top;

				$('html, body').animate({
					scrollTop: offset
				}, 300);
			});

			return this;
		},

		sendForm: function (selector) {
			var form = $(selector);

			$.ajax({
				url: form.attr('action'),
				type: form.attr('method') || 'POST',
				dataType: 'html',
				data: form.serialize()
			}).done(function (result) {

				if (result && (result === 'ok')) {
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

			this.pageUpFadeToggle(button)

			return this;
		},

		// ============================ Показывать кнопку вверх только если был скролл
		pageUpFadeToggle: function (button, length) {
			var length = length || 200;

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
			var self = this;
			var
				el = $(selector).find('a'),
				subMenus = el.next();

			function init (event) {
				var
					subMenu = $(this).next(),
					parent = $(this).parent();

				if (subMenu.length) {
					event.preventDefault();
					event.stopPropagation();
				}

				if (!subMenu.is(':visible')) {
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

			$(window).on('load resize', function () {
				var winWidth = $(this).innerWidth();

				if (winWidth <= self.mq.md) {
					el
						.unbind('click')
						.on('click', init);
				} else {
					el.unbind('click');
					subMenus.attr('style', '');
				}
			});

			// Установим класс на родителя, если есть вложенное меню
			el.each(function () {
				var subMenu = $(this).next();
				var parent = $(this).parent();

				if (subMenu.length) {
					parent.addClass('subMenu')
				}
			});

			return this;
		},

		isMobileDevice: function () {
			return {
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
					return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows()
				}
			}
		},

		counter: function (prfx) {
			var counter = $('.counter');
			var prfx = prfx || '';
			var field = counter.find('.field');

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
					if (!el.attr('disabled')) {
						dec.on('click', decrement);
						inc.on('click', increment);
					}

					// Уменьшим значение
					function decrement () {
						var value = parseInt(el.val());
						value--;

						if (!min || value >= min) {
							el.val(value + prfx);
						}
					}

					// Увеличим значение
					function increment () {
						var value = parseInt(el.val());

						value++;

						if (!max || value <= max) {
							el.val(value++ + prfx);
						}
					}

				}

				el.each(function () {
					init($(this))
				});
			}

			if (field.length) {
				field.each(function () {
					fieldCount($(this))
				});
			}

			return this;
		},

		rangeSlider: function () {
			var rangeSliderGroup = $('.rangeSliderGroup');
			var sliderDefaultOptions = {
				connect: true,
				format: this.priceFormat
			};

			if (typeof window.noUiSlider === 'undefined') {
				return this;
			}

			rangeSliderGroup.each(function (index, el) {
				var group = $(el);
				var rangeSliderMin = group.find('.rangeSliderMin');
				var rangeSliderMax = group.find('.rangeSliderMax');
				var slider = group.find('.rangeSlider');
				var sliderUserOption = slider.data('options');
				var sliderNode = slider[0];

				noUiSlider.create(sliderNode, $.extend(sliderDefaultOptions, sliderUserOption, true));

				sliderNode.noUiSlider.on('update', function (values, handle) {
					var value = values[handle];

					handle
						? rangeSliderMax.val(value)
						: rangeSliderMin.val(value)
				});

				rangeSliderMin.on('change', function () {
					sliderNode.noUiSlider.set([$(this).val(), null]);
				});

				rangeSliderMax.on('change', function () {
					sliderNode.noUiSlider.set([null, $(this).val()]);
				});
			});

			return this;
		}
	};

	var app = new App();
})(jQuery);
