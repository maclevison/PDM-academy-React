import React, {Component} from 'react';
import './Login.css';
import 'normalize.css';
import twitter from "../../assets/images/twitter.svg";

class Login extends Component {
    state = {
        username: ''
    }

    handleInputChange = (e, field )=> {
        this.setState({[field]: e.target.value})
    }
    render() {
        return (
            <div className={"login-wrapper"}>
                <img src={twitter} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={e => this.handleInputChange(e, 'username')}
                        placeholder={"Nome de Usuário"}
                    />
                    <input
                        type="password"
                        placeholder={"password"}
                    />
                    <button type={"submit"}>Entrar</button>
                </form>
            </div>
        );
    }
}

export default Login;
