# htmlStart
Заготовка для вёрстки сайта. Для работы нужно удалить css файл <b>client.content.css</b> и перенести его стили в файл <b>appUI.css</b>.

<h2>Структура</h2>
```
├── index.html
└── app
    ├── css
        └── app.css
        └── appUI.css
        └── client.content.css
        └── fancybox.css
        └── responsive.css
    └── img
        └── ico
        └── fancybox
    └── js
        └── lib
        └── plugins
            └── fancybox
                └── jquery.fancybox-media.js
                └── jquery.fancybox-thumbs.js
                └── jquery.fancybox.pack.js
            └── bootstrap.min.js
            └── jquery.maskedinput.min.js
            └── jquery.slick.min.js
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
<li><a href="#modals">Модальные окна</a></li>
<li><a href="#imgs">Изображения</a></li>
<li><a href="#counters">Счётчик для input полей</a></li>
<li><a href="#breadcrumbs">Хлебные крошки</a></li>
<li><a href="#pager">Переключатель страниц</a></li>
<li><a href="#sections">Секции</a></li>
<li><a href="#forms">Формы</a></li>
<li><a href="#mediaQueries">Медиа запросы</a></li>
<li><a href="#formTelMask">Маскировка полей телефонов</a></li>
</ul>

Все остальные компоненты добавляются по мере необходимости:
<ul>
<li><a href="https://github.com/malihu/malihu-custom-scrollbar-plugin">Кастомный скроллбар</a></li>
<li><a href="https://github.com/alvarotrigo/fullPage.js">Полноэкранный скролл</a></li>
<li><a href="https://refreshless.com/nouislider/">Ползунок диапазона чисел/цен</a></li>
<li><a href="https://github.com/jzaefferer/jquery-validation">Валидация форм</a></li>
<li><a href="https://github.com/select2/select2">Кастомный select</a></li>
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
<ul class="list listInline">
  <li>Пункт 1</li>
  <li>Пункт 2</li>
  <li>Пункт 3</li>
</ul>
```
<a href="#">наверх</a>

<h3 id="icons">Иконки</h3>
```
```
<a href="#">наверх</a>

<h3 id="tables">Таблицы</h3>
```
```
<a href="#">наверх</a>

<h3 id="buttons">Кнопки</h3>
```
```
<a href="#">наверх</a>

<h3 id="imgGalery">Галерея изображений</h3>
Для галереи изображений используется jquery плагин <a href="http://fancyapps.com/fancybox/"><b>fancybox</b></a>.
Пример кода:
```
<a href="app/img/galery/1.jpg" class="fancybox">
<img class="app/img/galery/1.jpg">
</a>
```
Для создания галереи из множества изображений используйте атрибут <b>rel</b> с уникальным значением.
```
<a href="app/img/galery/1.jpg" class="fancybox" rel="galery">
<img class="app/img/galery/1.jpg">
</a>

<a href="app/img/galery/2.jpg" class="fancybox" rel="galery">
<img class="app/img/galery/2.jpg">
</a>

<a href="app/img/galery/3.jpg" class="fancybox" rel="galery">
<img class="app/img/galery/3.jpg">
</a>
```
<a href="#">наверх</a>

<h3 id="sliders">Слайдер</h3>
```
```
<a href="#">наверх</a>

<h3 id="grid">Flexbox сетка</h3>
```
```
<a href="#">наверх</a>

<h3 id="tabs">Вкладки</h3>
```
```
<a href="#">наверх</a>

<h3 id="dropdowns">Дропдауны</h3>
```
```
<a href="#">наверх</a>

<h3 id="modals">Модальные окна</h3>
```
```
<a href="#">наверх</a>

<h3 id="imgs">Изображения</h3>
```
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
  <ul class="list listInline">
    <li><a href="/">Главная</a></li>
    <li><a href="#">Раздел</a></li>
  </ul>
</nav>
```
<a href="#">наверх</a>

<h3 id="pager">Переключатель страниц</h3>
```html
<nav class="pager">
  <ul class="list listInline">
    <li><a href="#" class="pagePrev">Назад</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li class="active"><a href="">4</a></li>
    <li class="pagerDots"><a href="#">...</a></li>
    <li><a href="#">10</a></li>
    <li><a href="#">11</a></li>
    <li><a href="#" class="pageNext">Вперёд</a></li>
  </ul>
</nav>
```
<a href="#">наверх</a>

<h3 id="sections">Секции</h3>
```
```
<a href="#">наверх</a>

<h3 id="forms">Формы</h3>
```
```
<a href="#">наверх</a>

<h3 id="mediaQueries">Медиа запросы</h3>

<h3 id="formTelMask">Маскировка полей телефонов</h3>
Плагин уже встроен. Инициализация происходит на поля <b>input[type="tel]</b>
