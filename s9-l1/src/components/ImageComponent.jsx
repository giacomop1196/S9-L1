import { Component } from "react";

const ImageComponent = (props) => {
    return (
        <img src={props.imgSrc} alt={props.imgAlt} />
    )
}

export default ImageComponent