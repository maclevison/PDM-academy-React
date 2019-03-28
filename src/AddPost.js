import React, {Component} from 'react';

// Images
import prev from "./assets/images/prev.svg";
import profile from "./assets/images/profile-img.jpg";
import image from "./assets/images/image.svg";
import gif from "./assets/images/gif.svg";
import stats from "./assets/images/stats.svg";

// Styles
import 'normalize.css';
import 'styles.css';
import 'AddPost.css';

class AddPost extends Component {
    render() {
        return (
            <div>
                <div className="top-bar">
                    <a href="#"><img src={prev} alt="Prev"/></a>
                    <button className="btn-tweet">Tweet</button>
                </div>

                <div className="post-body">
                    <div className="avatar">
                        <img src={profile} alt="" className="profile-img"/>
                    </div>

                    <textarea name="" id="" className="input-text" placeholder="O que está acontecendo?"></textarea>
                </div>

                <div className="post-actions">
                    <a href="#"><img src={image} alt=""/></a>
                    <a href="#"><img src={gif} alt=""/></a>
                    <a href="#"><img src={stats} alt=""/></a>

                    <div className="add-tweet">

                    </div>
                </div>
            </div>
        );
    }
}

export default AddPost;