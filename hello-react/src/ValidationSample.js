import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component{
    state = {
        passward: '',
        clicked: false,
        validate: false
    }

    handleChange = (e) => {
        this.setState({
            passward: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validate: this.state.passward === '0000'
        });
        this.input.focus();
    }

    render(){
        return (
            <div>
                <input
                    ref={(ref)=>this.input=ref}
                    type="password"
                    value={this.state.passward}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validate ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;