// language=hbs
export default `
    <ul class="ul profile-block__main__data-block__links-block__items">
        {{#each links}}
            <li class="
                {{#if border}}
                    bottom-border
                {{/if}}
                profile-block__main__data-block__links-block__item">
                <a  href="{{href}}" class="{{linkColor}} {{actionClass}} profile-block__main__data-block__links-block__item__link">
                    {{linkTitle}}
                </a>
            </li>
        {{/each}}
    </ul>`