'use strict';

var app = {
    title: 'Build It - Visibility Toggle',
    visible: false
};

var onButtonClick = function onButtonClick() {
    app.visible = app.visible ? false : true;
    renderApp();
};

var renderApp = function renderApp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: onButtonClick },
            app.visible ? 'Hide' : 'Show'
        ),
        React.createElement(
            'p',
            null,
            app.visible ? 'I am visible' : ''
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
