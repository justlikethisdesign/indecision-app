const app = {
  title: 'Build It - Visibility Toggle',
  visible: false
};

const onButtonClick = () => {
    app.visible = app.visible ? false : true;
    renderApp();
};

const renderApp = () => {

    const template = (
      <div>

        <h1>{app.title}</h1>

        <button onClick={onButtonClick}>{app.visible ? 'Hide' : 'Show'}</button>

        <p>{app.visible ? 'I am visible' : ''}</p>

      </div>
    );

    ReactDOM.render( template, document.getElementById('app') );

}

renderApp();
