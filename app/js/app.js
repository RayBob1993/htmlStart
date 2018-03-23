import $ from 'jquery'
import swiper from 'swiper'
import fancybox from '@fancyapps/fancybox'
import mask from 'jquery.maskedinput'

class App {
	constructor(){
        this.init();
	}

    init(){

		this
			.swiperInit()
			.fancyboxInit()
			.inputTelMaskInit()
			.counter('.fieldCount');

	}

	swiperInit(){

		if(typeof($.fn.swiper) !== 'undefined'){
			$('#mainSlider').swiper({
				pagination: '.swiper-pagination',
				paginationClickable: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				loop: true
			});
		}

		return this;

	}

	fancyboxInit(){

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

	}

	inputTelMaskInit(){

		if (typeof($.fn.mask) !== "undefined") {
			$('input[type="tel"]').mask('7 (999) 999 99 99');
		}

		return this;

	}

	scrollTo(element){

		let
			scrollTo = $(element),
			offset = scrollTo.offset().top;

		$('html, body').animate({
			scrollTop: offset
		}, 300);

		return this;
	}

	sendForm(selector){
		let form = $(selector);

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
	}

	// ============================ Прокрутка к началу страницы
	pageUp(selector, speed = 200){

		let button = $(selector);

		button.on('click', (event) => {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: 0
			}, speed);

		});

		return this;
	}

	// ============================ Показывать кнопку вверх только если был скролл
	pageUpFadeToggle(selector, length = 200){

		let button = $(selector);

		$(window).on('load scroll', function(){

            let scrollTop = $(this).scrollTop();

			if(scrollTop >= length){
				button.fadeIn();
			} else {
				button.fadeOut();
			}

		});

		return this;
	}

	accordion(selector){

		let
			el = $(selector).find('a'),
			subMenus = el.next();

		function init(event){
			let
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
		el.each((index, el) => {
			let
				subMenu = $(el).next(),
				parent = $(el).parent();

			if(subMenu.length){
				parent.addClass('subMenu')
			}
		});

		return this;
	}

	isMobileDevice(){

		let device = {
			Android() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any() {
				return (device.Android() || device.BlackBerry() || device.iOS() || device.Opera() || device.Windows());
			}
		}

		return device.any();
	}

	counter(selector, prfx = ''){

		let field = $(selector);

		function fieldCount(el){

			let
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
					let value = parseInt(el.val());
					value--;

					if(!min || value >= min) {
						el.val(value + prfx);
					}
				}

				// Увеличим значение
				function increment() {
					let value = parseInt(el.val());

					value++;

					if(!max || value <= max) {
						el.val(value++ + prfx);
					}
				}

			}

			el.each(() => init($(this)));
		}

		if(field.length){
			field.each(() => fieldCount($(this)));
		}

		return this;
	}
}

const app = new App();
