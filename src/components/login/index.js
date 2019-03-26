import React, {Component} from 'react';
import 'normalize.css';
import logo from '../../assets/images/logo-twitter.svg';
import './style.css';

class Login extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <img src={logo} className="twiiter-logo"
                         alt="Imagem de um passaro azul utilizado como logotipo do Twitter."/>

                    <h1 className="login-title" role="heading">Log in to Twitter</h1>
                </header>

                <form action="" method="post" className="login-form">
                    <div className="">

                        <div className="form-input">
                            <label className="">
                                <input
                                    name="username"
                                    placeholder="Phone number, email address, or username."
                                    type="text"
                                    data-focusable="true"
                                    className=""
                                    value=""/>
                            </label>
                        </div>

                        <div className="form-input">
                            <label className="">
                                <input
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    data-focusable="true"
                                    className=""
                                    value=""/>
                            </label>
                        </div>

                        <button
                            role="button"
                            data-focusable="true"
                            tabIndex="0"
                            className="button">
                            Log in
                        </button>
                    </div>
                </form>

                <div className="help-links">
                    <a href="" className="">Forgotten your password?</a> ·
                    <a role="link" data-focusable="true" className="" href="">Sign up for Twitter</a>
                </div>

            </div>

        );
    }
}

export default Login;
