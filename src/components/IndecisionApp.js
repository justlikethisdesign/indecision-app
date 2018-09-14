import React from 'react';

import AddOptions from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {

    state = {
        options: []
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption = ( option ) => {
        // Basic validation
        if ( !option ) {
            return 'Enter valid value to add item';
        } else if ( this.state.options.indexOf(option) > -1 ) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));

    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if ( options ) {
                this.setState( () => ({ options }));
            }
        } catch (e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if( prevState.options.length !== this.state.options.length ){
            console.log('saving data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {

        const subtitle = "Because you can't make decisions";

        return (
            <div>
                <Header subtitle={subtitle}/>

                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />

                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />

                <AddOptions
                    handleAddOption={this.handleAddOption}
                />

            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}
