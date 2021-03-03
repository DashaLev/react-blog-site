import React, {Component} from 'react'

import PropTypes from 'prop-types'
import '../../CategoryPages/categoryPages.css'

class LifestylePostsItem extends Component {
    render() {
        
        const {
            image,
            date,
            category,
            author,
            title,
            text,
        } = this.props;

        return (
            <>
            { this.props.category === "LIFESTYLE" &&
            
                <div className="categ-post-item">
                    <div className="categ-post-photo">
                        <img src={image} alt=""/>
                    </div>
                    <div className="categ-post-description">
                        <div className="categ-post-header">
                            <div className="categ-post-info">
                                <div className="categ-post-date">{date}</div>
                                <div className="categ-post-category">{category}</div>
                                <div className="categ-post-author">by{author}</div>
                            </div>
                            <div className="categ-post-title">{title}</div>
                        </div>
                        <div className="categ-post-text">{text}</div>
                        <a href="" className="categ-link-read-more">Read More</a>
                    </div>
                </div>
              
            }

            </>
        )
    } 
}



LifestylePostsItem.propTypes = {
    title:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
}
LifestylePostsItem.defaultProps = {
    image:"/images/no-image.png"
}



export default LifestylePostsItem