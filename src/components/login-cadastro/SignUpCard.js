
import accountImg from "../../assets/account.svg"
import lockImg from "../../assets/lock.svg";
import visibilityOn from "../../assets/visibilityOn.svg";
import visibilityOff from "../../assets/visibilityOff.svg";

import { useState } from "react";
import { FormContainer } from "./LoginCard.styled";




function FormSignUp() {
    const [visibility, SetVisibility] = useState(1)
    const [visibility2, SetVisibility2] = useState(1)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, SetConfimPassword] = useState("")
    const [isValid, setIsValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isUsernameValid, setIsUsernameValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const handleSingUp = () => {

    }



    const validationForm = () => {
        setIsEmailValid(email.length > 4 && email.includes("@") && email.includes(".com") )
        setIsUsernameValid(username.length > 2)
        setIsPasswordValid(password === confirmPassword && password.length >= 6 && password.length <= 10)
        if (isEmailValid && isUsernameValid && isPasswordValid) {
            handleSingUp()
        }

        if (isEmailValid, isPasswordValid, isUsernameValid) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }

    }




    return (
        <FormContainer isEmailValid={isEmailValid} isPasswordValid={isPasswordValid} isUsernameValid={isUsernameValid} >
            <div>

                <h1>Cadastrar</h1>
                {isValid ||
                    <p>Dados invalidos</p>
                }
            </div>
            <div className="form-data">
                <label className="username">Username</label>
                <div>
                    <img src={accountImg} alt="Account Icon" />
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                  

                </div>
                {isUsernameValid || <span>minimo 4 caracteres</span>}
            </div>
            <div className="form-data">
                <label className="email">Email</label>
                <div>
                    <img src={accountImg} alt="Account Icon" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />

                </div>
                {isEmailValid || <span>exemplo@dominio.com</span>}
            </div>
            <div className="form-data">
                <label className="password">Password</label>

                <div className="input-data">
                    <img src={lockImg} alt="password Icon" />

                    {
                        visibility === 1 ?
                            <div>

                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Digite sua senha" />
                                <img className="eye" onClick={() => SetVisibility(2)} src={visibilityOff} alt="Visibility Off icon" />
                            </div>


                            : <div>

                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Digite sua senha" />
                                <img className="eye" onClick={() => SetVisibility(1)} src={visibilityOn} alt="Visibility On icon" />
                            </div>

                    }
                </div>
                {isPasswordValid || <span>6-10 caracteres</span>}

            </div>
            <div className="form-data">
                <label className="password">Comfirmar Password</label>
                <div className="input-data">
                    <img src={lockImg} alt="password Icon" />

                    {
                        visibility2 === 1 ?
                            <div>

                                <input value={confirmPassword} onChange={(e) => SetConfimPassword(e.target.value)} type="password" placeholder="Digite sua senha" />
                                <img className="eye" onClick={() => SetVisibility2(2)} src={visibilityOff} alt="Visibility Off icon" />
                            </div>


                            : <div>

                                <input value={confirmPassword} onChange={(e) => SetConfimPassword(e.target.value)} type="text" placeholder="Digite sua senha" />
                                <img className="eye" onClick={() => SetVisibility2(1)} src={visibilityOn} alt="Visibility On icon" />
                            </div>

                    }
                </div>
                {isPasswordValid || <span>6-10 caracteres</span>}
            </div>


            <button type="button" onClick={validationForm}>Cadastrar</button>



        </FormContainer>
    )

}

export default FormSignUp
