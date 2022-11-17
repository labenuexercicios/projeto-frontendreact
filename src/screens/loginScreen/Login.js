import Header from "../../components/Header-SearchBar/Header"
import { ContainerForm } from "./Login.styled"
import accountImg from "../../assets/account.svg"
import lockImg from "../../assets/lock.svg";
import visibilityOn from "../../assets/visibilityOn.svg";
import visibilityOff from "../../assets/visibilityOff.svg";
import facebookIcon from "../../assets/facebook-F-icon.svg"
import googleIcon from "../../assets/google-G-icon.svg"
import { useState } from "react";


function Login() {
    const [visibility, SetVisibility] = useState(1)


    return (
        <>


            <Header />
            <ContainerForm>

                <form>
                    <h1>Login</h1>
                    <p>Logica qndo não passa</p>
                    <div className="form-data">
                        <label>Username</label>
                        <div>
                            <img src={accountImg} alt="Account Icon" />
                            <input type="text" placeholder="Digite seu Username ou E-mail" />

                        </div>
                        <label>Password</label>
                        <div className="input-data">
                            <img src={lockImg} alt="password Icon" />
                            <input type="password" placeholder="Digite sua senha" />
                            {
                                visibility === 1 ?
                                    <img className="eye" onClick={() => SetVisibility(2)} src={visibilityOff} alt="Visibility Off icon" />

                                    : <img className="eye" onClick={() => SetVisibility(1)} src={visibilityOn} alt="Visibility On icon" />
                            }
                        </div>


                        <button>Entrar</button>

                    </div>

                
                        <hr/>

                    


          

                   
                
                    

                    <div className="buttonOutSide">
                        <button><span>Entrar com Google</span> <img src={googleIcon} alt="Google Icon" /></button>
                        <button><span>Entrar com Facebook</span> <img src={facebookIcon} alt="Facebook Icon" /></button>
                    </div>
                </form>


            </ContainerForm>
        </>

    )


}

export default Login
