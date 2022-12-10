import { Head,Logo, InputTeste, TesteIcon } from "./styled";
import cart from "../img/cart.png"

export  function Header(props){
    const handlePesquisa= (e) =>{
        props.setPesquisa(e.target.value)
    }

    const handleMinValor = (event) => {
        props.setValorMinimo(event.target.value)
    }

    const handleMaxValor = (event) => {
        props.setValorMaximo(event.target.value)
    }

    const removeItem = (tenis) => {
        const buscaItem = props.carrinho.filter((item) => item !== tenis)

        props.setCarrinho(buscaItem)
    }

    function mudarTela(valor){
        return props.setTela(valor)
    }

    return(
        <Head>
            <Logo onClick={()=>mudarTela(1)}/>
            <InputTeste>
                <input type="text" name="text" className="input" required=" " autoComplete="off" placeholder="R$0.00" value={props.minimo} onChange={handleMinValor} />
                <label className="label">Filtrar por valor minimo</label>
            </InputTeste>
            <InputTeste>
                <input type="text" name="text" className="input" required=" " autoComplete="off" placeholder="R$0.00" value={props.maximo} onChange={handleMaxValor} />
                <label className="label">Filtrar por valor maximo</label>
            </InputTeste>
            <InputTeste>
                <input type="text" name="text" className="input" required=" " autoComplete="off" placeholder="nome" value={props.pesquisa} onChange={handlePesquisa} />
                <label className="label">Pesquise por nome</label>
            </InputTeste>
            <TesteIcon>
                <img src={cart} onClick={()=>mudarTela(2)} />
                
                <div className="mostrar">
                    <h2>Carrinho:</h2>

                    {props.carrinho.map((tenis, index) => {
                        return (
                            <div className="tenis" key={index} >
                                <img src={tenis.imagem} /><p><span>X{tenis.qtd} </span><span>{tenis.name} </span><span> <b>{tenis.precototal.toFixed(2)}</b></span></p>
                                <button onClick={() => removeItem(tenis)} >remover</button>
                            </div>
                        )
                    })}

                    <p><b>Valor total: R$ {props.totalCarrinho.toFixed(2)}</b></p>
                </div>
            </TesteIcon>
        </Head>
    )
}