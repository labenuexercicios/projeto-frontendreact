import React from "react";
import { ButtonSingIn, CadastrarPassword, CardLogin, FormControl, FormLabel, HeadForm, Input, LabelInput, ImageLogin } from "./LoginCard.styled";
import { useForm } from '../../hook/useForm'
import astrologin from '../../assets/astrologin.png'
import {goToPayPage} from '../../Router/coordinator'
import { useNavigate } from "react-router-dom";

export function LoginCard() {

    const [form, onChangeForm] = useForm({ email: "", password: "" })

    const handleClick = (event) => {
        event.preventDefault()
        console.log(`E-mail: ${form.email} Senha: ${form.password}`)
    }
    // ✌️

    const navigate = useNavigate()
    return (
        <CardLogin>
            <ImageLogin src={astrologin} alt="Astronauta de Cadastrando"/>
            <HeadForm>
                <h2>Entre na sua conta </h2>
            </HeadForm>
            <FormControl onSubmit={handleClick}>
                <LabelInput>
                    <FormLabel for="email">E-mail:</FormLabel>
                    <Input
                        id="email"
                        type="email"
                        value={form.email}
                        name="email"
                        onChange={onChangeForm}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                    />
                </LabelInput>
                <LabelInput>
                    <FormLabel for="password">Senha:</FormLabel>
                    <Input
                        id="password"
                        type="password"
                        value={form.password}
                        name="password"
                        onChange={onChangeForm}
                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        required
                    />
                </LabelInput>
                <CadastrarPassword>
                <p>Cadastrar</p>
                <a>Esqueceu sua senha?</a>
                </CadastrarPassword>
                <ButtonSingIn onClick={()=>goToPayPage(navigate)}>Entrar</ButtonSingIn>
            </FormControl>
        </CardLogin>

    )
}