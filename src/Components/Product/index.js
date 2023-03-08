import React, {useState, useRef} from "react";
import "./style.css";
import Modal from "../Modal/index";


export default function Products (props) {

  const [dropdown, setDropdown] = useState(""); 
  const modalRef = useRef(null);

  const toggleDropdown = () => {
    console.log("show");
    setDropdown("show");
    setTimeout(() => {
      document.body.addEventListener("click", closeDropdown);
    }, 1);
  }

  const closeDropdown = (event) => {
    event.stopPropagation(); 
    const contain = modalRef.current.contains(event.target);
    if (!contain) {
      console.log("hidden");
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };

  const url= "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"

  const [nomeProduto, setNomeProduto] = useState("");
  const [descProduto, setDescProduto] = useState("");
  const [priceProduto, setPriceProduto] = useState("");
  const [imgProduto, setImgProduto] = useState("");
  
  fetch(url)
    .then((response) => response.json())
    .then(function (json) { 
      setNomeProduto(json.products[0].productName)
      setPriceProduto(json.products[0].price)
      setDescProduto(json.products[0].descriptionShort)
      setImgProduto(json.products[0].photo)
    }
  )
  console.log(nomeProduto)
  return (
    <div className="box-product">
      <div className="product-image">
        <img  src={props.img} alt=""/>
      </div>
      <div className="product-desc">
        {props.desc}
      </div>
      <div className="product-antigo">
        <del>{props.antigo}</del>
      </div>
      <div className="product-preco">
        {props.preco}
      </div> 
      <div className="product-parc">
        {props.parc}
      </div> 
      <div className="product-frete">
        {props.frete}
      </div>   
      <div className="product-button">
        <button id="button" onClick={toggleDropdown}>{props.button}</button>
        <Modal  className={dropdown} modalRef={modalRef}
          produto={nomeProduto}
          price= {priceProduto}
          img={imgProduto}
          desc={descProduto}
          close={closeDropdown}
        ></Modal>
      </div> 
    </div>
  ); 
  
}
