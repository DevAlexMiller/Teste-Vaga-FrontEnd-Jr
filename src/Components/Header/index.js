import React from "react";
import "./style.css";
import truck from "../../Assests/Truck.png"
import creditCard from "../../Assests/CreditCard.png"
import shieldCheck from "../../Assests/ShieldCheck.png"
import logo from "../../Assests/Logo.png"
import search from "../../Assests/MagnifyingGlass.png"
import heart from "../../Assests/Heart.png"
import nav1 from "../../Assests/nav1.png"
import userCircle from "../../Assests/UserCircle.png"
import shoppingCart from "../../Assests/ShoppingCart.png"
import crown from "../../Assests/CrownSimple.png"


function Header() {
    return (
      <header className="header-page">
        <div className="infos">
            <ul className="top-options">
                <li> <img src={shieldCheck} alt="" className="img-top"></img> <p>Compra <b>100% segura</b></p></li>
                <li> <img src={truck} alt="" className="img-top"></img><p><b>Frete gratis</b> acima de R$ 200</p></li>
                <li> <img src={creditCard} alt="" className="img-top"></img><p><b>Parcele</b> suas compras</p></li>
            </ul>
        </div>
        
        <hr className="line"></hr>
        
        <div className="nav-bar">

            <div className="logo">
                <img src={logo} alt=""></img>
            </div>
                
            <div className="search">
                <input id="input-search" type="text" placeholder="     O que você está buscando?" /> 
                <button className="search-button"><img src={search} alt=""></img></button>
            </div>

            <div className="options">
                <button id="nav1"><img src={nav1} alt="" ></img></button>
                <button id="heart"><img src={heart} alt="" ></img></button>
                <button id="user"><img src={userCircle} alt="" ></img></button>
                <button id="cart"><img src={shoppingCart} alt="" ></img></button>
            </div>
        
        </div>  

        <hr className="line"></hr>

        <div className="categories">
            <div className="sub-categories">
                <button className="button-categories"><h2>TODAS CATEGORIAS</h2></button>
                <button className="button-categories"><h2>SUPERMERCADO</h2></button>
                <button className="button-categories"><h2>LIVROS</h2></button>
                <button className="button-categories"><h2>MODA</h2></button>
                <button className="button-categories"><h2>LANÇAMENTOS</h2></button>
                <button className="button-categories"><h2><b>OFERTAS DO DIA</b></h2></button>
                <button className="button-categories"><img src={crown} alt="" id="crown"></img></button>
                <button className="button-categories"><h2>ASSINATURA</h2></button>
            </div>
        </div>
      </header>
    );
  }
  
export default Header;