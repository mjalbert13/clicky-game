import React from 'react';

const ImageCard = props => (
    
    <div className= "card" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
            <img className="display-2" alt={props.id} src={props.image}></img>
        </div>
    </div>
)

export default ImageCard;