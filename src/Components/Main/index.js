import React from "react";
import "./style.css";
import Product from "../Product/index"
import advertising from "../../Assests/Rectangle 250.png"
import sports from "../../Assests/corrida 1.png"
import health from "../../Assests/cuidados-de-saude 1.png"
import tools from "../../Assests/ferramentas 1.png"
import fashion from "../../Assests/moda 1.png"
import supermarket from "../../Assests/supermercados 1.png"
import drinks from "../../Assests/whiskey.png"
import tecnology from "../../Assests/tecnology.png"
import celular from "../../Assests/celular.png"
import parceiros from "../../Assests/parceiros.png"
import Partners from "../Partners/index";
import produtos from "../../Assests/produtos.png"
import PartnerProduct from "../Card-partner-products/index"
import Brands from "../Brands/index"
import logo from "../../Assests/Logo.png"


function Main(){

    return(
        <main className="main">
            <section className="advertising">
                <div className="adversiting-son">
                    <img src={advertising} alt="" id="advertising-image"></img>
                </div>
                <div className="advertising-text1">
                    <p>Venha conhecer nossas promoções</p>
                </div>
                <div className="advertising-text2">
                    <p>50% Off nos produtos</p>
                </div>
                <div className="product">
                    <button id="product-button">Ver produto</button>
                </div>
            </section>

            <section className="categories-products-icons">
                <div className="categories-options1">
                <button className="categories-options-button">
                        <div className="categories-options-image1">
                            <img src={tecnology} alt="" ></img>
                        </div> 
                    </button>
                    <div className="categories-options-text">
                        <p><b>Tecnologia</b></p>
                    </div>   
                </div>

                <div className="categories-options">
                    <button className="categories-options-button">
                        <div className="categories-options-image">
                            <img src={supermarket} alt="" ></img>
                        </div> 
                    </button>
                    
                    <div className="categories-options-text">
                        <p>Supermercado</p>
                    </div>   
                </div>
                
                <div className="categories-options">
                    <button className="categories-options-button">
                        <div className="categories-options-image">
                            <img src={drinks} alt="" ></img>
                        </div> 
                    </button>
                    <div className="categories-options-text">
                        <p>Bebidas</p>
                    </div>   
                </div>
                
                <div className="categories-options">
                    <button className="categories-options-button">
                        <div className="categories-options-image">
                            <img src={tools} alt="" ></img>
                        </div> 
                    </button>
                    <div className="categories-options-text">
                        <p>Ferramentas</p>
                    </div>   
                </div>

                <div className="categories-options">
                    <button className="categories-options-button">
                        <div className="categories-options-image">
                            <img src={health} alt="" ></img>
                        </div> 
                    </button>
                    <div className="categories-options-text">
                        <p>Saúde</p>
                    </div>   
                </div>

                <div className="categories-options">
                    <button className="categories-options-button">
                        <div className="categories-options-image">
                            <img src={sports} alt="" ></img>
                        </div> 
                    </button>
                    <div className="categories-options-text">
                        <p>Esportes e Fitness</p>
                    </div>   
                </div>

                <div className="categories-options">
                    <button className="categories-options-button">
                        <div className="categories-options-image">
                            <img src={fashion} alt="" ></img>
                        </div> 
                    </button>
                    <div className="categories-options-text">
                        <p>Moda</p>
                    </div>   
                </div>
            </section>

            <h3 className="product-title">Produtos relacionados</h3>
            <h4 className="product-sub-title">Ver todos</h4>

            <section className="product-type">
                <div className="product-type-name">
                    <p><b>CELULAR</b></p>
                </div>
                <div className="product-type-name">
                    <p>ACESSÓRIOS</p>
                </div>
                <div className="product-type-name">
                    <p>TABLETS</p>
                </div>
                <div className="product-type-name">
                    <p>NOTEBOOKS</p>
                </div>
                <div className="product-type-name">
                    <p>TVS</p>
                </div>
                <div className="product-type-name">
                    <p>VER TODOS</p>
                </div>   
            </section>

            <section className="produtos"> 
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button ="Comprar"
                />
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button="Comprar"
                />
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button="Comprar"
                />
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button="Comprar"
                />
            </section>

            <section className="confira-parceiros">
                <Partners
                    img={parceiros}
                    title="Parceiros"
                    desc="Lorem ipsum dolor sit amet, consectetur"
                    button="CONFIRA"
                />
                <Partners
                    img={parceiros}
                    title="Parceiros"
                    desc="Lorem ipsum dolor sit amet, consectetur"
                    button="CONFIRA"
                />
                
            </section>

            <h3 className="product-title">Produtos relacionados</h3>
            <h4 className="product-sub-title">Ver todos</h4>
            <br/>

            <section className="produtos"> 
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button="Comprar"
                />
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button="Comprar"
                />
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button="Comprar"
                />
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button="Comprar"
                />
            </section>

            <section className="confira-parceiros-product">
                <PartnerProduct
                    img={produtos}
                    title="Produtos"
                    desc="Lorem ipsum dolor sit amet, consectetur"
                    button="CONFIRA"
                />
                <PartnerProduct
                    img={produtos}
                    title="Produtos"
                    desc="Lorem ipsum dolor sit amet, consectetur"
                    button="CONFIRA"
                />
                
            </section>

            <h3 className="marcas">Navegue por marcas</h3>

            <section className="icon-marcas">
                <Brands
                    img={logo}
                />
                <Brands
                    img={logo}
                />
                <Brands
                    img={logo}
                />
                <Brands
                    img={logo}
                />
                <Brands
                    img={logo}
                />
            </section>
            <br/>
            <br/>
            <br/>

            <h3 className="product-title">Produtos relacionados</h3>
            <h4 className="product-sub-title">Ver todos</h4>
            <br/>

            <section className="produtos"> 
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button="Comprar"
                />
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button="Comprar"
                />
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button="Comprar"
                />
                <Product 
                    img={celular} 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    antigo="R$ 30,90"
                    preco="R$ 28,90"
                    parc="ou 2x de R$ 49,95 sem juros"
                    frete="Frete grátis"
                    button="Comprar"
                />
            </section>
        </main>
    )
}

export default Main;