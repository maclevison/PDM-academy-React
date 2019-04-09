import React, {Component} from 'react';
import './Login.css';
import 'normalize.css';
import twitter from "../../assets/images/twitter.svg";

import {setToken, getToken} from '../../services/auth'

class Login extends Component {
    state = {
        username: '',
        password: '',
        message: ''
    }

    handleInputChange = (e, field )=> {
        this.setState({[field]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        console.log(!!username)
        console.log(!!password)
        !!username && !!password
            ? username === 'marcelo' && password === '1234' ? setToken('1234') : this.setState({message: 'utilizador ou password incorretos'})
            : this.setState({message: 'utilizador ou password não preenchidos'})

        if(getToken()) this.props.history.push('/timeline')
    }

    render() {
        const {message} = this.state
        return (
            <div className={"login-wrapper"}>
                <img src={twitter} alt="GoTwitter" />

                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type={'text'}
                        value={this.state.username}
                        onChange={e => this.handleInputChange(e, 'username')}
                        placeholder={"Nome de Usuário"}
                    />
                    {!!message &&
                        <div className={'login-message'}>
                            <span className={'message'}>{message}</span>
                        </div>
                    }
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={e => this.handleInputChange(e, 'password')}
                        placeholder={"password"}
                    />
                    <button type={"submit"}>Entrar</button>
                </form>
            </div>
        );
    }
}

export default Login;
