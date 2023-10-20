import Style from './Content.module.css'
import Cartao from '../../img/cartaoprincipal.png'
import Celular from '../../img/celular.png'
import Maquina from '../../img/maquininha.png'
import MEI from '../../img/cartaomei.png'
import vantagens from '../../img/new2.png'

import { React, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


function Content() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <body className={Style.body}>

            <div className={Style.geral}>
                <div className={Style.cartao} data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                    <img src={Cartao} alt="cartao" title="cartao" />
                </div>

                <div className={Style.frase}>
                    <h2> Na Palma da sua Mão</h2>
                    <button className={Style.app}> Cadastre-se </button>
                </div>


            </div>

            <div className={Style.variedade}>

                <div className={Style.quad1}>
                    Para Você
                    <img className={Style.paravoce} src={Cartao} alt="cartao" title="cartao" />
                    <div className={Style.saiba1}> Saiba Mais </div>
                </div>

                <div className={Style.quad2}>
                    Para Empresas
                    <img className={Style.Maquina} src={Maquina} alt="maquininha" title="maquininha" />
                    <div className={Style.saiba2}> Saiba Mais </div>
                </div>

                <div className={Style.quad3}>
                    Para MEI
                    <img className={Style.MEI} src={MEI} alt="MEI" title="MEI" />
                    <div className={Style.saiba3}> Saiba Mais </div>
                </div>

            </div>

            <div className={Style.geral2}>
                <div className={Style.celular}data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
                    <img src={Celular} alt="Celular" title="Celular" />
                </div>

                <div className={Style.frase2}>
                    <h2> Simples e  do
                        seu jeito! </h2>
                    <button className={Style.app}> Baixe o App </button>
                </div>
            </div>

            <div className={Style.vantagens}data-aos="fade-down">
                <img src={vantagens} alt="vantagens" title="vantagens" />
            </div>

        </body>
    )
}

export default Content