# htmlStart
Заготовка для вёрстки сайта. Для работы нужно удалить css файл <b>client.content.css</b> и перенести его стили в файл <b>appUI.css</b>.
Множество элементов по умолчанию не имеют стилей оформления, только скелет для прочной работы. Стили оформления заносятся самим разработчиком, так, как требует его дизайн.

Для работы некоторых UI элементов используется js плагины фреймворка <a href="https://github.com/twbs/bootstrap"><b>bootstrap</b></a> версии 3.3.6. <b>Примечание: используемые плагины изменены, в плане переименования классов в натацию camelCase</b>

<h2>Структура</h2>

```
├── index.html
└── app
    ├── css
        └── app.css
        └── appUI.css
        └── responsive.css
    └── img
        └── ico
        └── fancybox
    └── js
        └── lib
        └── plugins
            └── bootstrap.min.js
            └── jquery.maskedinput.min.js
            └── jquery.slick.min.js
	    └── jquery.fancybox.min.js
        └── app.js
        └── main.js
```

<h2>Компоненты</h2>

<ul>
<li><a href="#titles">Заголовки</a></li>
<li><a href="#lists">Списки</a></li>
<li><a href="#icons">Иконки</a></li>
<li><a href="#tables">Таблици</a></li>
<li><a href="#buttons">Кнопки</a></li>
<li><a href="#imgGalery">Галерея изображений</a></li>
<li><a href="#sliders">Слайдер</a></li>
<li><a href="#grid">Flexbox сетка</a></li>
<li><a href="#tabs">Вкладки</a></li>
<li><a href="#dropdowns">Дропдауны</a></li>
<li><a href="#responsiveNav">Адаптивное меню</a></li>
<li><a href="#modals">Модальные окна</a></li>
<li><a href="#imgs">Изображения</a></li>
<li><a href="#counters">Счётчик для input полей</a></li>
<li><a href="#breadcrumbs">Хлебные крошки</a></li>
<li><a href="#pager">Переключатель страниц</a></li>
<li><a href="#sections">Секции</a></li>
<li><a href="#forms">Формы</a></li>
<li><a href="#mediaQueries">Медиа запросы</a></li>
<li><a href="#formTelMask">Маскировка полей телефонов</a></li>
<li><a href="#mediaBox">Вставка медиа контента</a></li>
</ul>

Все остальные компоненты добавляются по мере необходимости:
<ul>
<li><a href="https://github.com/malihu/malihu-custom-scrollbar-plugin">Кастомный скроллбар</a></li>
<li><a href="https://github.com/alvarotrigo/fullPage.js">Полноэкранный скролл</a></li>
<li><a href="https://refreshless.com/nouislider/">Ползунок диапазона чисел/цен</a></li>
<li><a href="https://github.com/jzaefferer/jquery-validation">Валидация форм</a></li>
<li><a href="https://github.com/select2/select2">Кастомный select</a></li>
<li><a href="https://github.com/metafizzy/isotope">Динамическая сетка</a></li>
<li><a href="https://github.com/Eonasdan/bootstrap-datetimepicker">Датапикер</a></li>
</ul>

<h3 id="titles">Заголовки</h3>
С заголовками всё просто. У всех убран верхний отступы и высота линии задана в 100%

<a href="#">наверх</a>

<h3 id="lists">Списки</h3>
<h4>Пустой список</h4>

```html
<ul class="list">
  <li>Пункт 1</li>
  <li>Пункт 2</li>
  <li>Пункт 3</li>
</ul>
```

<h4>Список по горизонтали</h4>

```html
<ul class="list listFlex">
  <li>Пункт 1</li>
  <li>Пункт 2</li>
  <li>Пункт 3</li>
</ul>
```

<h4>Список по центру</h4>

```html
<ul class="list listFlex listCenter">
  <li>Пункт 1</li>
  <li>Пункт 2</li>
  <li>Пункт 3</li>
</ul>
```

<h4>Список равномерно по ширине блока</h4>

```html
<ul class="list listFlex listBetween">
  <li>Пункт 1</li>
  <li>Пункт 2</li>
  <li>Пункт 3</li>
</ul>
```

<h4>Список с пунктами по всей ширине блока</h4>

```html
<ul class="list listFlex listBetween">
  <li>Пункт 1</li>
  <li>Пункт 2</li>
  <li>Пункт 3</li>
</ul>
```

<a href="#">наверх</a>

<h3 id="icons">Иконки</h3>
Для вставки иконки, добавьте ей класс <b>.ico</b>. Так как работа с иконками подразумевает использование <b>svg</b> иконок, класс <b>.ico</b> по умолчанию имеет размер 18px-18px и заливку чёрным. Что бы унифицировать все иконки. Для каждого проекта изменяем значения на нужные.

Созданный спрайт должен иметь атрибут <b>id</b> со значением <b>iconsSvg</b>. Далее инлайним его в документ и вставляем нужные иконки так:

```html
<svg class="ico">
	<use xlink:href="#icoTel"></use>
</svg>
```
Если используются растровые иконки, просто удалите в стилях размеры и заливку.

Для того, что-бы сделать отступы у иконок по бокам, добавлены 2 класса:
Если иконка расположена слева

```html
<svg class="ico icoLeft">
	<use xlink:href="#icoTel"></use>
</svg>
```

Если иконка расположена справа

```html
<svg class="ico icoRight">
	<use xlink:href="#icoTel"></use>
</svg>
```

<h4>Иконка гамбургер</h4>

```html
<span class="icoMenu"> 
	<span></span> 
	<span></span> 
	<span></span> 
</span> 
```

Что бы иконка трансформировалась в гамбургер, нужно что бы у родительского элемента был класс <b>.open</b>. Это можно увидеть на примере <a href="#responsiveNav">адаптивного меню</a> или поместить иконку в кнопку для <a href="#dropdowns">dropdown</a> компонента

<a href="#">наверх</a>

<h3 id="tables">Таблицы</h3>

```html
```

<a href="#">наверх</a>

<h3 id="buttons">Кнопки</h3>

```html
```

<a href="#">наверх</a>

<h3 id="imgGalery">Галерея изображений</h3>
Для галереи изображений используется jquery плагин <a href="http://fancyapps.com/fancybox/3/"><b>fancybox</b></a>.
Пример кода:

```html
<a href="app/img/galery/1.jpg" data-fancybox>
	<img class="app/img/galery/1.jpg">
</a>
```

Для создания галереи из множества изображений используйте атрибут <b>data-fancybox</b> с уникальным значением.

```html
<a href="app/img/galery/1.jpg" class="fancybox" data-fancybox="galery">
	<img class="app/img/galery/1.jpg">
</a>

<a href="app/img/galery/2.jpg" class="fancybox" data-fancybox="galery">
	<img class="app/img/galery/2.jpg">
</a>

<a href="app/img/galery/3.jpg" class="fancybox" data-fancybox="galery">
	<img class="app/img/galery/3.jpg">
</a>
```

<a href="#">наверх</a>

<h3 id="sliders">Слайдер</h3>
Для работы слайдеров используется плагин <a href="https://github.com/kenwheeler/slick"><b>slick</b></a>

```html
<section id="mainSlider" class="slick mainSlider">
	<div class="slickSlide">
		<img class="app/img/slider/1.jpg">
	</div>
	<div class="slickSlide">
		<img class="app/img/slider/2.jpg">
	</div>
	<div class="slickSlide">
		<img class="app/img/slider/3.jpg">
	</div>
</section>
```

<a href="#">наверх</a>

<h3 id="grid">Flexbox сетка</h3>

```html
```

<a href="#">наверх</a>

<h3 id="tabs">Вкладки</h3>
<a href="http://getbootstrap.com/javascript/#tabs"><b>Документация</b></a> по работе с событиями плагина

```html
<div class="tabs">
	<nav class="tabsNav">
		<ul class="list listFlex" role="tablist">
			<li role="presentation" class="active">
				<a href="#tab1" aria-controls="home" role="tab" data-toggle="tab">Таб 1</a>
			</li>

			<li role="presentation">
				<a href="#tab2" aria-controls="profile" role="tab" data-toggle="tab">Таб 2</a>
			</li>
		</ul>
	</nav>

	<div class="tabContent">
		<div role="tabpanel" class="tabPanel fade in active" id="tab1">
			...
		</div>

		<div role="tabpanel" class="tabPanel fade" id="tab2">
			...
		</div>
	</div>
</div>
```

<a href="#">наверх</a>

<h3 id="dropdowns">Дропдауны</h3>
<a href="http://getbootstrap.com/javascript/#dropdowns"><b>Документация</b></a> по работе с событиями плагина

```html
<div class="dropdown">
	<button class="but dropdownBut" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		Выпадающее меню
	</button>
	
	<div class="dropdownBlock" aria-labelledby="Выпадающее меню">
		Контент
	</div>
</div>
```

<a href="#">наверх</a>

<h3 id="responsiveNav">Адаптивное меню</h3>

```html
<div class="dropdown topMenuWrap"> 
	<button type="button" class="but dropdownBut" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
		<span class="icoMenu"> 
			<span></span> 
			<span></span> 
			<span></span> 
		</span> 

		<span class="butText">Меню</span> 
	</button> 

	<nav class="topMenu"> 
		<ul class="list listFlex">
			<li class="active"><a href="#">Главная</a></li>
			<li><a href="#">О компании</a></li>
			<li><a href="#">Контакты</a></li>
		</ul>
	</nav> 
</div>
```

<a href="#">наверх</a>

<h3 id="modals">Модальные окна</h3>
<a href="http://getbootstrap.com/javascript/#modals"><b>Документация</b></a> по работе с событиями плагина

```html
<button data-toggle="modal" data-target="#myModal">Модальное окно</button>

<!-- Модальное окно -->
<div class="modal fade" id="myModal" role="dialog" aria-labelledby="Модальное окно">
	<div class="modalDialog" role="document">
		<div class="modalContent">
			<div class="modalHeader">

				<h4 class="modalTitle">Модальное окно</h4>

				<button class="but butClose modalClose" data-dismiss="modal" aria-label="Закрыть окно">
					<span aria-hidden="true">×</span>
				</button>

			</div>

			<div class="modalBody">
				
			</div>
		</div>
	</div>
</div>
```

<a href="#">наверх</a>

<h3 id="imgs">Изображения</h3>

```html
```

<a href="#">наверх</a>

<h3 id="counters">Счётчик для input полей</h3>

```html
<div class="counter">
	<button type="button" class="but counterBut dec">-</button>
	<input type="text" class="field" value="1" data-min="1" data-max="20">
	<button type="button" class="but counterBut inc">+</button>
</div>
```

<a href="#">наверх</a>

<h3 id="breadcrumbs">Хлебные крошки</h3>

```html
<nav class="breadcrumbs">
	<ul class="list listFlex">
		<li><a href="/">Главная</a></li>
		<li><a href="#">Раздел</a></li>
	</ul>
</nav>
```

<a href="#">наверх</a>

<h3 id="pager">Переключатель страниц</h3>

```html
<nav class="pager">
	<ul class="list listFlex">
		<li><a href="#" class="pagerArrows pagerPrev">Назад</a></li>
		<li><a href="#">1</a></li>
		<li><a href="#">2</a></li>
		<li><a href="#">3</a></li>
		<li class="active"><a href="">4</a></li>
		<li class="pagerDots"><a href="#">...</a></li>
		<li><a href="#">10</a></li>
		<li><a href="#">11</a></li>
		<li><a href="#" class="pagerArrows pagerNext">Вперёд</a></li>
	</ul>
</nav>
```

<a href="#">наверх</a>

<h3 id="sections">Секции</h3>

```html
```

<a href="#">наверх</a>

<h3 id="forms">Формы</h3>
Блок поиска

```html
<form action="#" class="search" method="post">
	<input type="search" class="field" placeholder="Поиск по сайту..." required>
	<input type="submit" class="but" value="Искать">
</form>
```

<a href="#">наверх</a>

<h3 id="mediaQueries">Медиа запросы</h3>

<h3 id="formTelMask">Маскировка полей телефонов</h3>
Плагин уже встроен. Инициализация происходит на поля <b>input[type="tel]</b>

<a href="#">наверх</a>

<h3 id="mediaBox">Вставка медиа контента</h3>
Вставка ролика с youtube

```html
<div class="mediaBox">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/3FVplCff1co" frameborder="0" allowfullscreen=""></iframe>
</div>
```

<a href="#">наверх</a>
