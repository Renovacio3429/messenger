// language=hbs
export default `
    <div class="app-error-block">
        <div class="app-error-block__header-block app-error-block__flex-wrap">
            <h1>{{errorCode}}</h1>
        </div>
        <h2>{{errorName}}</h2>
        <div class="app-error-block__footer-block app-error-block__flex-wrap">
            <a href="chat.html" class="link-blue">{{errorHrefTitle}}</a>
        </div>
    </div>`