// language=hbs
export default `
    <main>
        <div class="error-block">
            <div class="error-block__header-block error-block__flex-wrap">
                <h1>{{code}}</h1>
            </div>
                <h2>{{title}}</h2>
            <div class="error-block__footer-block error-block__flex-wrap">
                <a href="{{link}}" class="link-blue">{{linkTitle}}</a>
            </div>
        </div>
    </main>
`;
