console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    // element is referenced by the name
    const option = e.target.elements.option.value;

    if( option ){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplateApp();
    }


};

const removeAll = () => {
    app.options = [];
    renderTemplateApp();
};

const appRoot = document.getElementById('app');

const renderTemplateApp = () => {

    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <ol>
          <li>Item ons</li>
          <li>Item two</li>
        </ol>
        <button onClick={removeAll}>Remove All</button>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>

      </div>
    );

    ReactDOM.render( template, appRoot );

}

renderTemplateApp();
