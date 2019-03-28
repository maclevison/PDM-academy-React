import React, {Component} from 'react';
import './App.css';
import 'normalize.css';
import twitter from "./assets/images/twitter.svg";

class App extends Component {
    render() {
        return (
            <div className={"login-wrapper"}>
                <img src={twitter} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
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

export default App;
