import React from "react";
import "./Heading.css";

const Heading = props => (
    <div className="heading">
    <h1 className="title"> {props.title}</h1>
    <div className="scores"> Current Score: {props.currScore} </div>
    <div id="message"> {props.message ? props.message : 'Click each picture just once'} </div>
    <br />
    </div>
);




export default Heading;