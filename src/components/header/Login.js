import Styles from './Login.module.css'

function Login() {
    return (
        <div>
            <div className={Styles.login}>
            <div className={Styles.quadrado}>

                <h1>Login</h1>


                <form>
                    <fieldset>
                        <input type="text" placeholder="CPF"/>
                        <input type="password" placeholder="Email" />
                        <div className={Styles.buton}>
                            Envie
                        </div>
                    </fieldset>
                </form>
                
            </div>
        </div>
        </div>
    )
}

export default Login