# Yandex-practicum-messenger

<strong>Yandex-practicum-messenger</strong> - это приложение, которое позволяет обмениваться сообщениями с друзьями и семьей.
Приложение представляет из себя форму авторизации/регистрации пользователя в системе, чат с другими пользователями мессенджера и форму с настройками профиля. Приложение находится в стадии разработки и будет постоянно доробатываться.
## Стек технологий

* <a href="https://nodejs.org/en/">NodeJS</a>
* <a href="https://parceljs.org/">Parcel</a>
* <a href="https://handlebarsjs.com/">Handlebars</a>
* <a href="https://www.typescriptlang.org/">Typescript</a>
* <a href="https://eslint.org/">Eslint</a>
* <a href="https://stylelint.io/">Stylelint</a>


## Макет проекта

Ссылка макет: <a href="https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1">клик</a>

## Быстрый старт

1. Для корректной работы приложения необходимо: 
<strong><a href="https://nodejs.org/en/">NodeJS</a></strong> 
***не ниже*** 12 версии
2. В директории с проектом выполнить комманду `npm install`, для установки нужных зависимостей
3. Запустисте комманду `npm run start` в коммандной строке из директрори проекта (скрипт скомпилирует проект в директорию dist и запустит его на <strong>NodeJS</strong>  на домене <strong>localhost</strong>
, порт - <strong>3000</strong>)
4. Перейти в браузере по адресу *http://localhost:3000/*
5. enjoy!

## Другие коммады

`npm run build`  - комманда для сборки проекта, компилирует проект в директорию dist, перед сборкой вылняется комманда <strong>clean</strong> 
<br/>
`npm run dev`  - комманда для разработки и отладки приложения в runtime, build выполнятеся автоматически, с последующим стартом на домене 'http://localhost:3000/', через комманду 
<strong><a href="https://parceljs.org/getting-started/webapp/">parcel</a></strong>

## Доступ к страницам

Список страниц:
* *`/` - странтица входа в систему* 
* *`/signIn` - страница регистрации в системе*
* *`/error` - страница ошибки 500*
* *`/pageNotFound` - страница ошибки 404*
* *`/profile` - страница профиля пользователя системы*
* *`/profile/changeData` - страница изменения данных профиля пользователя системы*
* *`/profile/changePwd` - страница изменения пароля учетной записи пользователя системы*
* *`/chat` - страница чата*
<br>

## Netlify

Проект можно посмотреть <a href="https://magical-chimera-4e93a7.netlify.app">здесь</a></strong>
