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

const onRemoveAll = () => {
    app.options = [];
    renderTemplateApp();
};

const appRoot = document.getElementById('app');

const numbers = [34,465,78];

const renderTemplateApp = () => {

    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }
        </ol>

        <button onClick={onRemoveAll}>Remove All</button>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>

      </div>
    );

    ReactDOM.render( template, appRoot );

}

renderTemplateApp();
