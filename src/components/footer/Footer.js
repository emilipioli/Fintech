import Style from './Footer.module.css'
import Palma from '../../img/logopalma.jpg'
import Insta from '../../img/insta.webp'
import Face from '../../img/face.png'
import Link from '../../img/link.png'
import Git from '../../img/git.png'

function Footer() {
    return (
        <div className={Style.tudo}>

            <img className={Style.logo} src={Palma} alt="Logo" title="Logo" />

            <div className={Style.meio}>

                <div className={Style.texto}>

                    <div className={Style.dom}>
                    Para você 
                    </div>

                    <div className={Style.seg}>
                    Para seu negócio 
                    </div>

                    <div className={Style.ter}>
                    Sobre Nós
                    </div>

                    <div className={Style.qua}>
                    Mais Informações
                    </div>
                  
                    <div className={Style.qui}>
                    Dúvidas
                    </div>
                    
                </div>

            </div>

            <div className={Style.fim}>
                <img className={Style.insta} src={Insta} alt="Insta" title="Insta" />
                <img className={Style.face} src={Face} alt="Face" title="Face" />
                <img className={Style.link} src={Link} alt="Link" title="Link" />
                <img classNam={Style.git} src={Git} alt="Git" title="Git" />

            </div>

        </div>
    )
}

export default Footer