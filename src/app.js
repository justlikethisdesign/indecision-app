class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Because you can't make decisions</h2>
            </div>
        );
        return <p>This is from header</p>;
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options here</p>
                <Option />
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                Option component here
            </div>
        );
    }
}

class AddOptions extends React.Component {
    render() {
        return (
            <div>
                <p>Add Option Here</p>
            </div>
        );
    }
}

ReactDOM.render( <IndecisionApp />, document.getElementById('app') );
