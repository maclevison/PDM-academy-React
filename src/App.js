import React, {Component} from 'react';
import logo from './assets/images/logo-twitter.svg';
import './App.css';
import 'normalize.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="login">

                    <div className="logo-twitter"><img src={logo} alt=""/></div>

                    <h1 className="page-title">Log in no twitter</h1>

                    <div className="input">
                        <label htmlFor=""><input type="text" placeholder="hshsh" title="title"/></label>
                    </div>

                    <div className="input">
                        <label htmlFor=""><input type="password" placeholder="hshsh" title="title"/></label>
                    </div>

                    <button className="button-submit">Log in</button>

                    <div className="actions">
                        <a href="#">Forgotten your Password</a> .
                        <a href="#">Sign up for Twitter</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
