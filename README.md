# Yandex-practicum-messenger

<strong>Yandex-practicum-messenger</strong> - это приложение, которое позволяет обмениваться сообщениями с друзьями и семьей.
Приложение представляет из себя форму авторизации/регистрации пользователя в системе, чат с другими пользователями мессенджера и форму с настройками профиля. Приложение находится в стадии разработки и будет постоянно доробатываться.
## Стек технологий

* <a href="https://nodejs.org/en/">NodeJS</a>
* <a href="https://parceljs.org/">Parcel</a>
* <a href="https://handlebarsjs.com/">Handlebars</a>

## Макет проекта

Ссылка макет: <a href="https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1">клик</a>

## Быстрый старт

1. Для корректной работы приложения необходимо: 
<strong><a href="https://nodejs.org/en/">NodeJS</a></strong> 
***не ниже*** 12 версии
2. В директории с проектом выполнить комманду <strong>nnpm install</strong>, для установки нужных зависимостей
3. Запустисте комманду <strong>npm run start</strong> в коммандной строке из директрори проекта (скрипт скомпилирует проект в директорию dist и запустить его на <strong>NodeJS</strong>  на домене <strong>localhost</strong>
, порт - <strong>3000</strong>)
4. Перейти в браузере по адресу *http://localhost:3000/*
5. enjoy!

## Другие коммады

<strong>npm run clean</strong> - комманда для очистки директори dist
<br/>
<strong>npm run build</strong>  - комманда для сборки проекта, компилирует проект в директорию dist, перед сборкой вылняется комманда <strong>clean</strong> 
<br/>
<strong>npm run dev</strong>  - комманда для разработки и отладки приложения в runtime, build выполнятеся автоматически, с последующим стартом на домене 'http://localhost:3000/', через комманду 
<strong><a href="https://parceljs.org/getting-started/webapp/">parcel</a></strong>

## Доступ к страницам

Список страниц:
* *index.html* 
* *signin.html*
* *chat.html*
* *profile.html*
* *page404.html*
* *page500.html* 
<br>
Стартует приложение на странице index.html, для прямого доступа к другой странице можно добавить ее название после порта сервера, например для доступа к странице page404.html, нужно ввести в адресную строку *http://localhost:3000/page404.html*

## Netlify

Проект можно посмотреть <a href="https://magical-chimera-4e93a7.netlify.app">здесь</a></strong>