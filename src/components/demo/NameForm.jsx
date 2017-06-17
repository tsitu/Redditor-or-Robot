import React from "react";

// NameForm Demo
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        alert('You submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <fieldset>
                <legend>NameForm Demo</legend>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Test: &nbsp;
                        <input 
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                    <input 
                        type="submit"
                        value="Submit" />
                </form>
            </fieldset>
        );
    }
}

module.exports = NameForm;