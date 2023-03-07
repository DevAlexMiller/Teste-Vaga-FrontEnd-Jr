import React from "react";
import "./style.css";

export default function Brands(props) {
    return (
            <div className="brands">
                <div className="brands-image">
                    <button className="brands-button">
                        <img src={props.img} id="img-brands" alt=""></img>
                    </button>
                </div>  
            </div> 
    )
}