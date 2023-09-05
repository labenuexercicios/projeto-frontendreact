import * as s from './styled'
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


export default function Footer() {

    const schema = yup.object().shape({
        name: yup.string().min(2, "Mínimo dois caracteres!").required(),
        email: yup.string().email("Digite um e-mail válido!").required("E-mail é obrigatório!'"),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)

    })

    const newUser = (user) => {
        // Object.keys(user).forEach(item => {
        //     console.log(`${item} -  ${user[item]}`)

        // });
        alert("Obrigado por se inscrever!!!")
        reset({
            name: "",
            email: ""
        })
    }

    return (
        <s.Footer>
            <s.Medidas>
                <span>Galaxy Store - Projeto Labenu 2023</span>
            </s.Medidas>
        </s.Footer>

    )
}

