import React from 'react'
import avatar from '../../assets/images/avatar.jpeg'
import like from '../../assets/images/like.svg'

const Tweet = ({name, msg, likes, addLike}) => {
    return (
        <div className={'tweet-card'} >
            <img className={'avatar'} src={avatar} alt=""/>
            <div className={'tweet'}>
                <strong>{name}</strong>
                <p>{msg}</p>
                <button type={"button"} >
                    <img src={like} alt="Like" onClick={addLike} />{likes}
                </button>
            </div>
        </div>
    )
}

export default Tweet