import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import sliderPosts from './sliderPosts'
import "./sliderBlock.css"


class SliderBlock extends Component {
    render() {

        return (
            <Carousel autoPlay={true} interval={5000} infiniteLoop={true}>

                { 
                    sliderPosts.map(({
                        id,
                        image,
                        category,
                        title,
                        link,
                    }) => ( 
                        <div key={id} > 
                            <img src={image}/> 
                            <div className="legend">
                                <div className="slider-category">{category}</div>
                                <div className="slider-title">{title}</div>
                                <a href={link} className="slider-link">READ MORE</a>
                            </div>
                        </div> 
                    ) )
                } 
            </Carousel>
        );
    }
}


export default SliderBlock