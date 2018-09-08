class IndecisionApp extends React.Component {
    render() {

        const title = 'Indecision';
        const subtitle = "Because you can't make decisions";

        const options = ['Thing 1', 'Thing 2', 'Thing 4'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
        return <p>This is from header</p>;
    }
}

class Action extends React.Component {
    handlePick() {
        alert('click');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('click');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                this.props.options.map( (option) => <Option key={option} optionText={option}/> )
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOptions extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        if ( e.target.option.value ) {
            alert( e.target.option.value );
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render( <IndecisionApp />, document.getElementById('app') );
