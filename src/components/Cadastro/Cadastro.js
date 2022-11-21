import { ContainerFormCadastro } from "./Cadastro.styled"
import estados from "../../JSON-Data/estados.json"

function Cadastro() {
    return (
        <ContainerFormCadastro>
            <div className="header-cadastro">
                <h1>Cadastro</h1>
                <p>*campos obrigatorios</p>

            </div>
            <form>
                <div className="dados-conta">

                    <h2>dados da conta</h2>
                    <label>*senha</label>
                    <div>
                        <input type="email" placeholder="email" />
                        <span>alterar</span>
                    </div>
                    <label>*senha</label>
                    <div>
                        <input type="password" placeholder="***********" />
                        <span>alterar</span>
                    </div>
                </div>
                <hr />
                <div className="dados-pessoais">
                    <h2>dados pessoais</h2>
                    <label>*nome completo</label>
                    <input type="text" placeholder="Alexandre Machado" />
                    <label>*genero</label>
                    <div className="genero-radio">
                        <input type="radio" id="masculino" value="masculino" name="genero" /><label>masculino</label>
                        <input type="radio" id="feminino" value="feminino" name="genero" /><label>feminino</label>
                        <input type="radio" id="naoInfo" value="naoInfo" name="genero" /><label>Não informar</label>
                    </div>
                    <label>*data de nascimento</label>
                    <div className="data">
                        <input type="number" min="1" max = "31" placeholder="dia" /><span>/</span>
                        <input type="number" min="1" max = "12" placeholder="mes" /><span>/</span>
                        <input type="number" min="1950" max = "2006" placeholder="ano" />
                    </div>
                    <label>*CPF</label>
                    <input className="inputNumber" type="number" placeholder="111.222.333-44" />
                    <label>*telefone</label>
                    <div>
                        <input className="inputNumber" type="number" placeholder="(31)996828531" /><span>alterar</span>
                    </div>

                </div>
                <hr />

                <div className="endereco">
                    <h2>Endereço</h2>
                    <div className="endereco-body">
                        <div>

                            <label>*CEP</label>
                            <input className="inputNumber" type="number" placeholder="30000-000" />
                        </div>
                        <div>

                            <label>*rua</label>
                            <input type="text" placeholder="algum lugar na cidade" />
                        </div>
                        <div className="numero-input">
                            <div>
                                <label>*numero</label>
                                <input className="number-endereco" type="number" placeholder="0" />
                            </div>
                            <div>
                                <label>complemento</label>
                                <input type="text" placeholder="apto 100" />
                            </div>
                        </div>
                        <div>

                            <label>*bairro</label>
                            <input type="text" placeholder="Centro" />
                        </div>
                        <div className="cidade-estado">

                            <label>*Cidade</label>
                            <input type="text" placeholder="Belo Horizonte" />
                            <div className="select-estado">
                                <label>*Estado</label>
                                <select>
                                    <option>Selecione</option>
                                    {estados.map((estado) => <option key={estado} value={estado}>{estado}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

            </form>

        </ContainerFormCadastro>
    )

}
export default Cadastro