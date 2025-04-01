import "./Main.css"
import React from "react"

const LikeButton = ({likes, onChildClick}) => {
    return (
        <button onClick={onChildClick} className="heart"><i className="fa fa-heart"></i> {likes}</button>
    );
};

export default LikeButton;
