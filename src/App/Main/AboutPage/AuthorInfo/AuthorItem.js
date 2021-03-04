import React, {Component} from 'react'

import './authorItem.css'
import PropTypes from 'prop-types'

class AuthorItem extends Component {
    render() {
        
        const {
            name,
            image,
            text,
            about,
        } = this.props;

        return (
            <>
            <div className="about-author">
                <div className="author">About {name}</div>
                <div className="picture-text">
                    <img src={image} alt="" className="picture"/>
                    <div className="text">{text}</div>
                </div>
                <div className="author-info">{about}</div>
            </div>
            </>
        )
    } 
}


AuthorItem.propTypes = {
    name:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired,
}
AuthorItem.defaultProps = {
    image:"/images/no-image.png"
}



export default AuthorItem