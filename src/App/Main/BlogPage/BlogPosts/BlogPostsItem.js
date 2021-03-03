import React, {Component} from 'react'

import './blogPostsItem.css'
import PropTypes from 'prop-types'

class BlogPostsItem extends Component {
    render() {
        
        const {
            image,
            date,
            category,
            author,
            title,
        } = this.props;

        return (
            <>
            {/* { this.props.category === "TRAVEL" && */}
            
                <div className="blog-post-item">
                    <div className="blog-post-photo">
                        <img src={image} alt=""/>
                    </div>
                    <div className="blog-post-description">
                        <div className="blog-post-header">
                            <div className="blog-post-info">
                                <div className="blog-post-date">{date}</div>
                                <div className="blog-post-category">{category}</div>
                                <div className="blog-post-author">by{author}</div>
                            </div>
                            <div className="blog-post-title">{title}</div>
                        </div>
                        <a href="" className="blog-link-read-more">Read More</a>
                    </div>
                </div>
              
            {/* } */}

            </>
        )
    } 
}



BlogPostsItem.propTypes = {
    title:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
}
BlogPostsItem.defaultProps = {
    image:"/images/no-image.png"
}



export default BlogPostsItem