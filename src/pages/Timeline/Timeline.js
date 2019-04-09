import React, {Component} from 'react';

import avatar from '../../assets/images/avatar.jpeg'
import twitter from '../../assets/images/twitter.svg'
import like from '../../assets/images/like.svg'
import './Timeline.css';
import 'normalize.css';

import {removeToken} from '../../services/auth'

class Timeline extends Component {
    handleLogout = () => {
        removeToken()
        this.props.history.push('/timeline')
    }
    render() {
        return (
            <div className={'container'}>
                <button onClick={this.handleLogout}>SAIR</button>
                <div className={'logo'}>
                    <img src={twitter} alt=''/>
                </div>
                <div className={'content'}>
                    <img className={'avatar'} src={avatar} alt=""/>
                    <textarea
                        className={'text-area'}
                           cols="40"
                           rows="5"
                           name="whatHappening"
                           id="whatHappening"
                           placeholder="What is happening?" />
                </div>
                <div className={'base'}>
                    <button className={'button'}>Tweetar</button>
                </div>
                <div className={'tweet-card'}>
                    <img className={'avatar'} src={avatar} alt=""/>
                    <div className={'tweet'}>
                        <strong>Marcelo Fortunato</strong>
                        <p>Bom dia Pessoal!!</p>
                        <button type={"button"} onClick={this.handleLike}>
                            <img src={like} alt="Like" />0
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timeline;
