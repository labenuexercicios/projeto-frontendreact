
import accountImg from "../../assets/account.svg"
import lockImg from "../../assets/lock.svg";
import visibilityOn from "../../assets/visibilityOn.svg";
import visibilityOff from "../../assets/visibilityOff.svg";
import { useState } from "react";
import { FormContainer } from "./LoginCard.styled";



function FormLogin (props) {
    const {setFormFlow} = props
    const [visibility, SetVisibility] = useState(1)


    const handleOnClickLogin = ()=>{
        setFormFlow(2)
    }




    return(
        <FormContainer>
        <h1>Login</h1>
        <p>Logica qndo não passa</p>
        <div className="form-data">
            <label>Username</label>
            <div>
                <img src={accountImg} alt="Account Icon" />
                <input type="text" placeholder="Username ou Email" />

            </div>
        </div>
        <div className="form-data">
            <label>Password</label>
            <div className="input-data">
                <img src={lockImg} alt="password Icon" />

                {
                    visibility === 1 ?
                        <div>

                            <input type="password" placeholder="Digite sua senha" />
                            <img className="eye" onClick={() => SetVisibility(2)} src={visibilityOff} alt="Visibility Off icon" />
                        </div>


                        : <div>

                            <input type="text" placeholder="Digite sua senha" />
                            <img className="eye" onClick={() => SetVisibility(1)} src={visibilityOn} alt="Visibility On icon" />
                        </div>

                }
            </div>
        </div>


        <button >Entrar</button>
        <button onClick={handleOnClickLogin}>Cadastrar</button>
        
    

    </FormContainer>
    )
}
export default FormLogin
