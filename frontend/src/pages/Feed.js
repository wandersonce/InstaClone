import React, { Component } from 'react';

import './Feed.css'

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Wanderson Castro</span>
                            <span className="place">VANCOUVER</span>
                        </div>

                        <img src={more} alt="More" />
                    </header>

                    <img src="http://localhost:3333/files/Feed-100.jpg" alt="" />

                    <footer >
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />

                            <strong>900 Likes</strong>

                            <p>
                                Amazing first post from react!
                                <span>#react #omnistack</span>
                            </p>
                        </div>
                    </footer>
                </article>
                <article>
                    <header>
                        <div className="user-info">
                            <span>Wanderson Castro</span>
                            <span className="place">VANCOUVER</span>
                        </div>

                        <img src={more} alt="More" />
                    </header>

                    <img src="http://localhost:3333/files/Feed-100.jpg" alt="" />

                    <footer >
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />

                            <strong>900 Likes</strong>

                            <p>
                                Amazing first post from react!
                                <span>#react #omnistack</span>
                            </p>
                        </div>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;