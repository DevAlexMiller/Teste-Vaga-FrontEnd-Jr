import React from "react";
import "./style.css";

export default function Partners(props) {
    return (
        
            <div className="partners">
                <div className="partners-image">
                    <img src={props.img} id="img-partner" alt=""></img>
                </div>
                <div className="partners1">
                    {props.title}
                </div>
                <div className="partners2">
                    {props.desc}
                </div>
                <div className="partners-button">
                    <button id="partners-button1" >{props.button}</button>
                </div>
            </div> 
        
    )
}