import React from 'react';
import "./Container.css"

const Container = props => (
    <div className ="wrapper">{props.children}</div>
);

export default Container;