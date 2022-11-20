// language=hbs
export default `
    <div class="modal">
        <div class="modal-block">
            <div class="modal-block__content">
                {{#content}}
                    {{{this}}}        
                {{/content}}
            </div>
        </div>
    </div>
    `;
