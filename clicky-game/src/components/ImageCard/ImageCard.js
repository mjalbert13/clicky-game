import React from 'react';
import './ImageCard.css'

const ImageCard = props => (
    
    <div className= "card" onClick={() => props.handleClickCount(props.id)}>
        <div className="img-container">
            <img className="display-2" alt={props.id} src={props.image}></img>
        </div>
    </div>
)

export default ImageCard;