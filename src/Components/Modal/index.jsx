import React from "react";
import "./style.css";


const Modal = props => {
    const { className, modalRef } = props;

    return(
        <div  id="modal-produto" ref={modalRef} className={`${className} modal`}>
            <div className="img-produto">
                <img src={props.img} alt=""></img>
            </div>
            <div className="nome-produto">
                <p>{props.produto}</p>
            </div>
            <div className="desc-produto">
                <p>{props.desc}</p>
            </div>
            <div className="price-produto">
                <p>R${props.price},00</p>
            </div>
            <div className="detalhes-produto">
                <p><button className="detalhes-button">Ver mais detalhes do produto {'>'}</button></p>
            </div>
        </div>
    )
}

export default Modal;
