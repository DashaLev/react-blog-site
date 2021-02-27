import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import twitterPosts from './twitterPosts'

import  './twitterSection.css'

class TwitterSection extends Component {
    render() {

        return (
            <div className="twitter-section">
                <div className="title-block">TWITTER</div>
                <Carousel autoPlay={true} interval={7000} infiniteLoop={true}>
                    { 
                        twitterPosts.map(({
                            id,
                            text,
                            posttime,
                        }) => ( 
                            <div key={id} className="twitter-comment">
                                <div className="twitter-comment-text">{text}</div>
                                <div className="twitter-comment-text-time">{posttime}</div>
                            </div> 
                        ) )
                    } 
                </Carousel>
            </div>
        )
    }
}


export default TwitterSection