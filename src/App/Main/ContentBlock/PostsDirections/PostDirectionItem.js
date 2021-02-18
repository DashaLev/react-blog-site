import React, {Component} from 'react'


import './postDirectionItem.css'
import PropTypes from 'prop-types'


class PostDirectionItem extends Component {
    render() {
        
        const {
            name,
            image,
        } = this.props;

        return (
            <div className="post-direction-item">
                <img src={image} alt="" />
                <div className="post-direction-box">
                    <div className="post-direction-bg">
                        <div className="post-direction-title">
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


PostDirectionItem.propTypes = {
    name:PropTypes.string.isRequired,
}
PostDirectionItem.defaultProps = {
    image:"/images/no-image.png"
}



export default PostDirectionItem