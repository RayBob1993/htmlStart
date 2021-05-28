# htmlStart
## Запуск
* ```npm install```
* ```npm run serve```

## Сборка билда
* ```npm run build```
Появится папка <b>dist</b> 

## Компоненты

* <a href="#accordion">Аккордион</a>
* <a href="#titles">Заголовки</a>
* <a href="#lists">Списки</a>
* <a href="#icons">Иконки</a>
* <a href="#tables">Таблицы</a>
* <a href="#buttons">Кнопки</a>
* <a href="#imgGalery">Галерея изображений</a>
* <a href="#sliders">Слайдер</a>
* <a href="#rangeSlider">Ползунок диапазона цен</a>
* <a href="#grid">Flexbox сетка</a>
* <a href="#tabs">Вкладки</a>
* <a href="#dropdowns">Дропдауны</a>
* <a href="#responsiveNav">Адаптивное меню</a>
* <a href="#modals">Модальные окна</a>
* <a href="#imgs">Изображения</a>
* <a href="#counters">Счётчик для input полей</a>
* <a href="#breadcrumbs">Хлебные крошки</a>
* <a href="#pager">Переключатель страниц</a>
* <a href="#sections">Секции</a>
* <a href="#forms">Формы</a>
* <a href="#mediaQueries">Медиа запросы</a>
* <a href="#formTelMask">Маскировка полей телефонов</a>
* <a href="#mediaBox">Вставка медиа контента</a>

Все остальные компоненты добавляются по мере необходимости:

* [Кастомный скроллбар](https://github.com/malihu/malihu-custom-scrollbar-plugin)
* [Полноэкранный скролл](https://github.com/alvarotrigo/fullPage.js)
* [Ползунок диапазона чисел/цен](https://refreshless.com/nouislider/)
* [Анимация при скролле](https://github.com/graingert/wow)
* [Динамическая сетка](https://github.com/metafizzy/isotope)
* [Отслеживание видимости элемента в окне браузера](https://github.com/dirkgroenen/jQuery-viewport-checker)

<h3 id="accordion">Аккордион</h3>
```html
<div class="accordion" id="accordion">
  <article class="accordion__item">
    <h6 
      class="accordion__item-title" 
      data-toggle="collapse" 
      data-target="#accordion-1" 
      aria-expanded="true" 
      aria-controls="accordion-1"
    >
      <span class="accordion__item-ico">
        <svg class="ico">
          <use xlink:href="#ico-arrow-bottom"></use>
        </svg>
      </span>

      Заголовок
    </h6>

    <div id="accordion-1" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="accordion__item-text">
        Текст
      </div>
    </div>
  </article>

  <article class="accordion__item">
    <h6 
      class="accordion__item-title" 
      data-toggle="collapse" 
      data-target="#accordion-2" 
      aria-expanded="true" 
      aria-controls="accordion-2"
    >
      <span class="accordion__item-ico">
        <svg class="ico">
          <use xlink:href="#ico-arrow-bottom"></use>
        </svg>
      </span>

      Заголовок
    </h6>

    <div id="accordion-2" class="collapse collapsing" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="text accordion__item-text">
        Текст
      </div>
    </div>
  </article>
</div>
```

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
<ul class="list list-flex">
  <li>Пункт 1</li>
  <li>Пункт 2</li>
  <li>Пункт 3</li>
</ul>
```

<h4>Список по центру</h4>

```html
<ul class="list list-flex justify-content-center">
  <li>Пункт 1</li>
  <li>Пункт 2</li>
  <li>Пункт 3</li>
</ul>
```

<h4>Список равномерно по ширине блока</h4>

```html
<ul class="list list-flex justify-content-between">
  <li>Пункт 1</li>
  <li>Пункт 2</li>
  <li>Пункт 3</li>
</ul>
```

<a href="#">наверх</a>

<h3 id="icons">Иконки</h3>
Для вставки иконки, добавьте ей класс <b>.ico</b>. Так как работа с иконками подразумевает использование <b>svg</b> иконок, класс <b>.ico</b> по умолчанию имеет размер 18px-18px и заливку чёрным. Что бы унифицировать все иконки. Для каждого проекта изменяем значения на нужные.

Созданный спрайт должен иметь класс со значением <b>icons</b>. Далее инлайним его в документ и вставляем нужные иконки так:

```html
<svg class="ico">
  <use xlink:href="#ico-phone"></use>
</svg>
```
Если используются растровые иконки, просто удалите в стилях размеры и заливку.

Для того, что-бы сделать отступы у иконок по бокам, добавлены 2 класса:
Если иконка расположена слева

```html
<svg class="ico ico--left">
  <use xlink:href="#ico-phone"></use>
</svg>
```

Если иконка расположена справа

```html
<svg class="ico ico--right">
  <use xlink:href="#ico-phone"></use>
</svg>
```

<h4>Иконка гамбургер</h4>

```html
<span class="ico-menu"> 
  <span></span> 
  <span></span> 
  <span></span> 
</span> 
```

Что бы иконка трансформировалась в гамбургер, нужно что бы у родительского элемента был класс <b>.open</b>. Это можно увидеть на примере <a href="#responsiveNav">адаптивного меню</a> или поместить иконку в кнопку для <a href="#dropdowns">dropdown</a> компонента

<a href="#">наверх</a>

<h3 id="tables">Таблицы</h3>

```html
<table class="table">
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
    <tfoot></tfoot>
</table>
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
<a href="images/galery/1.jpg" class="fancybox" data-fancybox>
    <img class="images/galery/1.jpg">
</a>
```

Для создания галереи из множества изображений используйте атрибут <b>data-fancybox</b> с уникальным значением.

```html
<a href="images/galery/1.jpg" class="fancybox" data-fancybox="galery">
  <img class="images/galery/1.jpg">
</a>

<a href="images/galery/2.jpg" class="fancybox" data-fancybox="galery">
  <img class="images/galery/2.jpg">
</a>

<a href="images/galery/3.jpg" class="fancybox" data-fancybox="galery">
  <img class="images/galery/3.jpg">
</a>
```

<a href="#">наверх</a>

<h3 id="sliders">Слайдер</h3>
Для работы слайдеров используется плагин <a href="http://idangero.us/swiper/api/"><b>Swiper</b></a>

```html
<div id="main-slider" class="swiper-container main-slider">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            Slide 1
        </div>
    
        <div class="swiper-slide">
            Slide 2
        </div>
    
        <div class="swiper-slide">
            Slide 3
        </div>
    </div>
    
    <div class="swiper-pagination"></div>
    
    <button class="swiper-button swiper-button-prev"></button>
    <button class="swiper-button swiper-button-next"></button>
</div>
```

<a href="#">наверх</a>

<h3 id="rangeSlider">Ползунок диапазона цен</h3>
Для начала, необходимо его подключить https://refreshless.com/nouislider/

```html
<div class="range-field">
    <div class="row">
        <div class="col col-6">
            <input type="text" class="field range-field__min">
        </div>

        <div class="col col-6">
            <input type="text" class="field range-field__max">
        </div>
    </div>

    <div
        class="range-field__slider"
        data-options='{
            "start": [1000, 278000],
            "range": {
                "min": 1000,
                "max": 1000000
            }
        }'
    ></div>
</div>
```

<a href="#">наверх</a>

<h3 id="grid">Flexbox сетка</h3>

```html
```

<a href="#">наверх</a>

<h3 id="tabs">Вкладки</h3>
<a href="http://getbootstrap.com/docs/4.1/components/navs/#via-javascript"><b>Документация</b></a> по работе с событиями плагина

```html
<div class="tabs">
    <ul class="list list-flex nav nav-tabs" role="tablist">
        <li class="nav-item">
            <a 
                href="#tab1" 
                class="active" 
                aria-controls="home" 
                role="tab" 
                data-toggle="tab" 
                aria-selected="true"
            >
                Таб 1
            </a>
        </li>

        <li class="nav-item">
            <a 
                href="#tab2" 
                aria-controls="profile" 
                role="tab" 
                data-toggle="tab" 
                aria-selected="false"
            >
                Таб 2
            </a>
        </li>
    </ul>

    <div class="tab-content">
        <div 
            role="tabpanel" 
            class="tab-pane fade show active" 
            id="tab1" 
            aria-labelledby="home-tab"
        >
            ...
        </div>
        
        <div 
            role="tabpanel" 
            class="tab-pane fade" 
            id="tab2" 
            aria-labelledby="home-tab"
        >
            ...
        </div>
    </div>
</div>
```

<a href="#">наверх</a>

<h3 id="dropdowns">Дропдауны</h3>
<a href="http://getbootstrap.com/docs/4.1/components/dropdowns/"><b>Документация</b></a> по работе с событиями плагина

```html
<div class="dropdown">
    <button 
        class="button" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false" 
        data-display="static"
    >
        Выпадающее меню
    </button>
    
    <div class="dropdown-menu">
        Контент
    </div>
</div>
```

<a href="#">наверх</a>

<h3 id="responsiveNav">Адаптивное меню</h3>

```html
<div class="dropdown top-menu"> 
    <button 
        type="button" 
        class="button"
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false"
        data-display="static"
    > 
        <span class="ico-menu"> 
            <span></span> 
            <span></span> 
            <span></span> 
        </span>
    </button> 
    
    <div class="dropdown-menu">
        <nav class="nav top-menu__nav"> 
            <ul class="list list-flex level-1">
                <li class="active"><a href="#">Главная</a></li>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </nav> 
    </div>
</div>
```

<a href="#">наверх</a>

<h3 id="modals">Модальные окна</h3>
<a href="http://getbootstrap.com/docs/4.1/components/modal/"><b>Документация</b></a> по работе с событиями плагина

```html
<button
  type="button"
  class="button"
  data-toggle="modal"
  data-target="#feedback-modal"
>
  <span class="button__label">
    Обратная связь
  </span>
</button>

<div
  class="modal fade"
  id="feedback-modal"
  tabindex="-1"
  role="dialog"
  aria-labelledby="Обратная связь"
  aria-hidden="true"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Обратная связь</h5>

        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">

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
  <button type="button" class="button counter__button counter__button--decrement">-</button>

  <input 
    type="text" 
    class="field" 
    value="1" 
    data-min="1" 
    data-max="20"
  >

  <button type="button" class="button counter__button counter__button--increment">+</button>
</div>
```

<a href="#">наверх</a>

<h3 id="breadcrumbs">Хлебные крошки</h3>

```html
<nav class="nav breadcrumbs">
  <ul class="list list-flex breadcrumbs__list">
    <li><a href="/">Главная</a></li>
    <li class="active"><a href="#">Раздел</a></li>
  </ul>
</nav>
```

<a href="#">наверх</a>

<h3 id="pager">Переключатель страниц</h3>

```html
<nav class="nav pagination">
  <ul class="list list-flex justify-content-sm-center pagination__list">
    <li><a href="#" class="pagination__list-item pagination__list-item--active">1</a></li>
    <li><a href="#" class="pagination__list-item">2</a></li>
    <li><a href="#" class="pagination__list-item">3</a></li>
    <li><a href="#" class="pagination__list-item">4</a></li>
    <li><a href="#" class="pagination__list-item">5</a></li>
    <li><a href="#" class="pagination__list-item">. . .</a></li>
    <li><a href="#" class="pagination__list-item">20</a></li>
  </ul> 
  
  <a href="#" class="pagination__button pagination__button--prev">
    Назад
  </a>
  
  <a href="#" class="pagination__button pagination__button--next">
    Дальше
  </a>
</nav>
```

<a href="#">наверх</a>

<h3 id="sections">Секции</h3>

```html
<section class="section">
  <header class="section__header">
    <div class="container">
      <h2 class="section__title">Секция</h2>
    </div>
  </header>

  <div class="section__body">
    <div class="container"></div>
  </div>

  <footer class="section__footer">
    <div class="container"></div>
  </footer>
</section>
```

<a href="#">наверх</a>

<h3 id="forms">Формы</h3>
Блок поиска

```html
<form action="#" class="search" method="post">
  <input type="search" class="field search__field" placeholder="Поиск по сайту..." required>

  <button type="submit" class="button search__button">
    <span class="button__label">
      Искать
    </span>
  </button>
</form>
```

Поле ввода
```html
<div class="form-group">
	<label class="field">
		<span class="field__name">Имя</span>
		<input type="text" class="field__input">
	</label>
</div>
```

<a href="#">наверх</a>

<h3 id="mediaQueries">Медиа запросы</h3>

<h3 id="formTelMask">Маскировка полей телефонов</h3>
Плагин уже встроен. Инициализация происходит на поля ```input[type="tel]```

<a href="#">наверх</a>

<h3 id="mediaBox">Вставка медиа контента</h3>
Вставка ролика с youtube

```html
<div class="mediaBox">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3FVplCff1co" frameborder="0" allowfullscreen=""></iframe>
</div>
```

<a href="#">наверх</a>
