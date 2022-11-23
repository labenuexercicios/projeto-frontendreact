import { useState } from "react"
import { ContainerForm } from "./adressForm.styled"
import estados from "../../JSON-Data/estados.json"

export default function AdressForm (props) {
    const {user} =props
const [password, setPassword] =useState(user.password)
const [email, setEmail] =useState(user.email)
const [telefone, setTelefone] =useState(user.telefone)
const [cep, setCEP] =useState(user.adress.cep)
const [estado, setEstado] =useState(user.adress.state)
const [street, setStreet] =useState(user.adress.street)
const [number, setNumber] =useState(user.adress.number)
const [complement, setComplement] =useState(user.adress.complement)
const [city, setCity] =useState(user.adress.city)
const [bairro, setBairro] =useState(user.adress.district)


const name = `${user.firstName} ${user.middleName} ${user.lastName}`

     
    return (
        <ContainerForm>
            <div className="header-cadastro">
                <h1>Cadastro</h1>
                <p>*campos obrigatorios</p>

            </div>
            <form>
                <div className="dados-conta">

                    <h2>dados da conta</h2>
                    <label>*senha</label>
                    <div>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" />
                        <span>alterar</span>
                    </div>
                    <label>*senha</label>
                    <div>
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="***********" />
                        <span>alterar</span>
                    </div>
                </div>
                <hr />
                <div className="dados-pessoais">
                    <h2>dados pessoais</h2>
                    <label>*nome completo</label>
                    <input value={name} type="text" placeholder="Alexandre Machado" />
                    <label>*genero</label>
                    <div className="genero-radio">
                        <input type="radio" id="masculino" value="masculino" name="genero" checked={user.genero==="masculino"}/><label>masculino</label>
                        <input type="radio" id="feminino" value="feminino" name="genero" checked={user.genero==="feminino"} /><label>feminino</label>
                        <input type="radio" id="naoInfo" value="naoInfo" name="genero"  checked={user.genero==="naoInfo"}/><label>Não informar</label>
                    </div>
                    <label>*data de nascimento</label>
                    <div className="data">
                        <input value={user.dayBirth} type="number" min="1" max = "31" placeholder="dia" /><span>/</span>
                        <input value={user.mounthBirth} type="number" min="1" max = "12" placeholder="mes" /><span>/</span>
                        <input value={user.yearBirth} type="number" min="1950" max = "2006" placeholder="ano" />
                    </div>
                    <label>*CPF</label>
                    <input value={user.cpf} className="inputNumber" type="number" placeholder="111.222.333-44" />
                    <label>*telefone</label>
                    <div>
                        <input value={telefone} onChange={(e)=>setTelefone(e.target.value)} className="inputNumber" type="number" placeholder="(31)996828531" /><span>alterar</span>
                    </div>

                </div>
                <hr />

                <div className="endereco">
                    <h2>Endereço</h2>
                    <div className="endereco-body">
                        <div>

                            <label>*CEP</label>
                            <input value={cep} onChange={(e)=>setCEP(e.target.value)} className="inputNumber" type="number" placeholder="30000-000" />
                        </div>
                        <div>

                            <label>*rua</label>
                            <input value={street} onChange={(e)=>setStreet(e.target.value)} type="text" placeholder="algum lugar na cidade" />
                        </div>
                        <div className="numero-input">
                            <div>
                                <label>*numero</label>
                                <input value={number} onChange={(e)=>setNumber(e.target.value)} className="number-endereco" type="number" placeholder="0" />
                            </div>
                            <div>
                                <label>complemento</label>
                                <input value={complement} onChange={(e)=>setComplement(e.target.value)} type="text" placeholder="apto 100" />
                            </div>
                        </div>
                        <div>

                            <label>*bairro</label>
                            <input value={bairro} onChange={(e)=>setBairro(e.target.value)}  type="text" placeholder="Centro" />
                        </div>
                        <div className="cidade-estado">

                            <label>*Cidade</label>
                            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="Belo Horizonte" />
                            <div className="select-estado">
                                <label>*Estado</label>
                                <select value={estado} onChange={(e)=>setEstado(e.target.value)}>
                                    <option>Selecione</option>
                                    {estados.map((estado) => <option key={estado} value={estado}>{estado}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <button type="button" className="btn-salvar">Salvar Alterações</button>

            </form>

        </ContainerForm>
    )


}