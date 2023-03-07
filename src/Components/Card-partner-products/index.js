import React from "react";
import "./style.css";

export default function PartnerProduct(props) {
    return (
        
            <div className="partners-product">
                <div className="partners-product-image">
                    <img src={props.img} id="img-partner-product" alt=""></img>
                </div>
                <div className="partners-product1">
                    {props.title}
                </div>
                <div className="partners-product2">
                    {props.desc}
                </div>
                <div className="partners-product-button">
                    <button id="partners-product-button1" >{props.button}</button>
                </div>
            </div> 
        
    )
}