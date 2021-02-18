import React, {Component} from 'react'


import './postListItem.css'
import PropTypes from 'prop-types'


class PostListItem extends Component {
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
            <div className="post-item">
                <div className="post-photo">
                    <img src={image} alt=""/>
                </div>
                <div className="post-description">
                    <div className="post-header">
                        <div className="post-info">
                            <div className="post-date">{date}</div>
                            <div className="post-category">{category}</div>
                            <div className="post-author">by{author}</div>
                        </div>
                        <div className="post-title">{title}</div>
                    </div>
                    <div className="post-text">{text}</div>
                    <a href="" className="link-read-more">Read More</a>
                </div>
            </div>
        )
    }
}


PostListItem.propTypes = {
    title:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
}
PostListItem.defaultProps = {
    image:"/images/no-image.png"
}



export default PostListItem