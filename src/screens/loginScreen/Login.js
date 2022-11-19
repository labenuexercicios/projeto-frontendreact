import Header from "../../components/Header-SearchBar/Header"
import { ContainerMainForm, ContainerForm } from "./Login.styled"
import facebookIcon from "../../assets/facebook-F-icon.svg"
import googleIcon from "../../assets/google-G-icon.svg"
import { useState } from "react";
import FormSignUp from "../../components/login-cadastro/SignUpCard";
import FormLogin from "../../components/login-cadastro/LoginCard";


function Login() {


    const [formFlow, setFormFlow] = useState(1)

    return (
  


         
            <ContainerMainForm>
                <ContainerForm>
                    {formFlow===1? <FormLogin setFormFlow={setFormFlow} /> : <FormSignUp />}
                    
                    <div className="buttonOutSide">
                        <span>OU</span>

                        <button><span>Entrar com Google</span> <img src={googleIcon} alt="Google Icon" /></button>
                        <button><span>Entrar com Facebook</span> <img src={facebookIcon} alt="Facebook Icon" /></button>
                    </div>


                </ContainerForm>
            </ContainerMainForm>
      

    )


}

export default Login
