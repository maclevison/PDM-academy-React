import React, {Component} from 'react';

import Tweet from '../../components/Tweet'

import avatar from '../../assets/images/avatar.jpeg'
import twitter from '../../assets/images/twitter.svg'
import './Timeline.css';
import 'normalize.css';

import {removeToken} from '../../services/auth'

class Timeline extends Component {

    state = {
        writing: '',
        tweets: [],
    }

    handleLogout = () => {
        removeToken()
        this.props.history.push('/timeline')
    }

    handleAddTweet = () => {
        this.setState( {
            tweets: [...this.state.tweets, {name: 'Marcelo', msg: this.state.writing, likes: 0}],
            writing: ''
        })
    }

    handleInput = (e, field) => {
        this.setState({[field]: e.target.value})
    }

    handleAddLike = i => {
        const newTWeetList = this.state.tweets.map((tweet, index) => {
            return i === index ? {...tweet, likes: tweet.likes + 1} : tweet
        })

        this.setState({tweets: newTWeetList})
    }

    render() {
        return (
            <div className={'container'}>
                <div className={'logout'}>
                    <button onClick={this.handleLogout}>Sair</button>
                </div>
                <div className={'logo'}>
                    <img src={twitter} alt=''/>
                </div>
                <div className={'content'}>
                    <img className={'avatar'} src={avatar} alt=""/>
                    <textarea
                        className={'text-area'}
                        cols="40"
                        rows="5"
                        name="writing"
                        id="writing"
                        placeholder="What is happening?"
                        value={this.state.writing}
                        onChange={e => this.handleInput(e, 'writing')}
                    />
                </div>
                <div className={'base'}>
                    <button className={'button'} onClick={this.handleAddTweet}>Tweetar</button>
                </div>

                {this.state.tweets.map((tweet, index) =>
                    <Tweet
                        key={index}
                        name={tweet.name}
                        msg={tweet.msg}
                        likes={tweet.likes}
                        addLike={() => this.handleAddLike(index)}
                    />)
                }

            </div>
        )
    }
}

export default Timeline;
