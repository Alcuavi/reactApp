import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state={name:'Alberto'};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({name: event.target.value});
    }
    handleSubmit(event){
        alert("Un nuevo nombre "+ this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text"
                               value={this.state.name}
                               onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Aceptar"></input>
                </form>

            </div>
        );
    }
}

export default App;