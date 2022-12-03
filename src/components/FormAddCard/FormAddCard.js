import React from 'react'
import { useForm } from '../../hook/useForm'
import {  ContainerForm,
    LabelInput,
    FormLabel,
    Input,
    SelectExpired,
    Select,
    ButtonAddCard,
    InputCvv,
    ContainerAddCard,
    ContainerTypeCard
} from '../FormAddCard/FormAddCard.styled'
import visaCard from '../../assets/visacard.png'
import masterCard from '../../assets/mastercard.jpeg'
import eloCard from '../../assets/elocard.png'

export const FormAddCard = () => {

    const [form, onChangeForm] = useForm({ cardNumber: "", nameCard: "", securityCvv: ""})

  return (
    <ContainerAddCard>
    <ContainerForm>
    <LabelInput>
        <FormLabel for="cardNumber">Número do cartão:</FormLabel>
        <Input
            id="cardNumber"
            type="card"
            value={form.cardNumber}
            name="cardNumber"
            onChange={onChangeForm}
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
        />
    </LabelInput>
    <LabelInput>
        <FormLabel for="nameCard">Nome no cartão:</FormLabel>
        <Input
            id="nameCard"
            type="text"
            value={form.nameCard}
            name="nameCard"
            onChange={onChangeForm}
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
        />
    </LabelInput>
    <SelectExpired>
        <p>Data de Venc.:</p>
        <Select>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
            <select>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
                <option>2031</option>
                <option>2032</option>
                <option>2033</option>
            </select>
        </Select>
    </SelectExpired>
    <LabelInput>
        <FormLabel for="securityCvv">Cód. Segurança - CVV/CVC:</FormLabel>
        <InputCvv
            id="securityCvv"
            type="text"
            value={form.securityCvv}
            name="securityCvv"
            onChange={onChangeForm}
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
        />
    </LabelInput>
    <ButtonAddCard>Adicionar</ButtonAddCard>
</ContainerForm>
<ContainerTypeCard>
    <p>Astro Tshirts aceita alguns tipo bandeira de cartão de crédito e débito: </p>
    <div>
        <img src={visaCard} alt="Visa card"/>
        <img src={masterCard} alt="Master card"/>
        <img src={eloCard} alt="Elo card"/>
    </div>
</ContainerTypeCard>
</ContainerAddCard>
  )
}
