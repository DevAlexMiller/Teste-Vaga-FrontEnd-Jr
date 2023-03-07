import React from "react";
import "./style.css";
import facebook from "../../Assests/facebook.png"
import instagram from "../../Assests/instagram.png"
import youtube from "../../Assests/youtube.png"
import pag from "../../Assests/formas_pagamento.png"
import vtex from "../../Assests/vtex.png"
import econverse from "../../Assests/econverse.png"

function Footer() {
    return (
      <footer>
        <section className="content">
            <div className="about">
                <h4 className="footer-title">Sobre nós</h4>
                <br/>
                <br/>
                <p>CONHEÇA</p>
                <br/>
                <p>COMO COMPRAR</p>
                <br/>
                <p>INDICAÇÃO E DESCONTO</p>
                <div className="social">
                    <img src={facebook} alt=""></img>
                    <img src={instagram} alt=""></img>
                    <img src={youtube} alt=""></img>
                </div>
            </div>
            <div className="useful-info">
            <h4 className="footer-title">INFORMAÇÕES ÚTEIS</h4>
                <br/>
                <p>FALE CONOSCO</p>
                <br/>
                <p>DÚVIDAS</p>
                <br/>
                <p>PRAZOS DE ENTREGA</p>
                <br/>
                <p>FORMAS DE PAGAMENTO</p>
                <br/>
                <p>POLÍTICA DE PRIVACIDADE</p>
                <br/>
                <p>TROCAS E DEVOLUÇÕES</p>
            </div>
            <div className="payments">
                <h4 className="footer-title">FORMAS DE PAGAMENTOS</h4>
                <br/>
                <br/>
                <img src={pag} alt=""></img>
            </div>    
            <div className="register">
                <div className="register-title">
                    <p>CADASTRE-SE E RECEBA NOSSAS <p id="bold">NOVIDADES E PROMOÇÕES</p></p>
                </div>
                <div className="register-desc">
                    <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                </div>
                <input id="register-input" type="email" placeholder="  Email"></input> <button id="register-button">OK</button>
            </div>
        </section>
        <br/>
        <hr></hr>
        <div className="copyright">
            <div className="copyright-content">
                <p>COPYRIGHT © 2019. TODOS OS DIREITOS RESERVADOS. TODAS AS MARCAS E SUAS IMAGENS SÃO DE PROPRIEDADES DE SEUS RESPECTIVOS DONOS.  
                É VEDADA A REPRODUÇÃO, TOTAL OU PARCIAL, DE QUALQUER CONTEÚDO SEM EXPRESSA AUTORIZAÇÃO.</p>
            </div>
            <div className="logos">
                <img src={econverse} alt=""></img>
                <img src={vtex} alt=""></img>
            </div>
        </div>
        
      </footer>
    );
  }
  
export default Footer;