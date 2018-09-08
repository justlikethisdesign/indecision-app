class VisibilityToggle extends React.Component {

    constructor( props ) {
        super( props );
        this.handleToggleVisibility = this.handleToggleVisibility.bind( this );
        this.state = {
            visibility: false,
        }
    }

    handleToggleVisibility() {
        this.setState( (prevState) => {
            return {
                visibility: prevState.visibility ? false : true,
            }
        });
    }

    render() {
        return (
            <div>

                <h1>Visible</h1>

                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide' : 'Show'}
                </button>

                { this.state.visibility  && (
                    <p>I am visible</p>
                )}

            </div>
        )
    }

}

ReactDOM.render( <VisibilityToggle />, document.getElementById('app') );
