import React from 'react';

const Header = props => (
    <div className = "jumbotron jumbotron-fluid">
        <div className = "container">
            <h1 className = "display-4">Game of Clicks</h1>
            <p className = "lead score">Score: {props.score}  ||  High Score: {props.highScore}</p>
        </div>
    </div>
);

export default Header;