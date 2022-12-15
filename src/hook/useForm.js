import React, { useState } from 'react'

export const useForm = (estadoInicial) => {

    const [form, setForm] = useState(estadoInicial)

    const clearForm = () => {
        setForm(estadoInicial)
    }

    const onChangeForm = (event) => {
        const { name, value } = event.target
        const novoForm = {
            ...form,
            [name]: value
        }
        setForm(novoForm)
    }
    return [form, onChangeForm, clearForm]
}

