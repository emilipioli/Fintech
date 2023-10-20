import Style from './Header.module.css'
import Palma from '../../img/logopalma.jpg'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <header className={Style.containerHeader}>

            <div className={Style.logo}>

                <img src={Palma} alt="Palma" title="Palma" />
                <h2> Banco Palma </h2>

                <div className={Style.botoes}>
                    <Link to ='/' className={Style.botao_home}><h4> Home </h4></Link>
                    <Link to ='/Login' className={Style.botao_home}><h4> Login </h4></Link>
                    <h4> Baixe App </h4>
                </div>

            </div>



        </header>
    )
}

export default Header