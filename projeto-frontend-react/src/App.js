import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import Produtos from "./Produtos.json"
import Cabecalho from './Components/Cabecalho/Cabecalho';
import Aside from './Components/Aside/Aside';
import Produto from './Components/Produtos/Produto';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
    }
    h2 {
        margin: 0;
    }
`

const Main = styled.main`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 20% 1fr;
    height: 100vh;
    width: 100vw;
`

const Principal = styled.section`
    background-color: #0C001C;
    box-sizing: border-box;
    display: grid;
    grid-gap: 2em 1em;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    width: 100%;
    padding: 1em;
`

function App() {

    const [minimo, setMinimo] = useState(0)
    const [maximo, setMaximo] = useState(0)
    const [nomeProduto, setNomeProduto] = useState("")
    const [filtro, setFiltro] = useState(false)
    const [ordenacao, setOrdenacao] = useState(1)

    const handleMinimo = (event) => {
        setMinimo(event.target.value)
    }

    const handleMaximo = (event) => {
        setMaximo(event.target.value)
    }

    const handleNomeProduto = (event) => {
        setNomeProduto(event.target.value)
    }

    const handleOrdenacao = (event) => {
        setOrdenacao(event.target.value)
    }

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Cabecalho></Cabecalho>
            <Main>
                <Aside
                minimo={minimo} handleMinimo={handleMinimo}
                maximo={maximo} handleMaximo={handleMaximo}
                nomeProduto={nomeProduto} handleNomeProduto={handleNomeProduto}
                setFiltro={setFiltro} handleOrdenacao={handleOrdenacao}>
                </Aside>
                <Principal>
                {
                    Produtos.filter((produto) => {
                        if (maximo !== 0 && filtro) {
                            return produto.preco >= +minimo && produto.preco <= +maximo}
                            else { return produto}
                        })
                        .filter((produto) => {
                            if (nomeProduto !== "" & filtro) {
                                return produto.nome.includes(nomeProduto)}
                                else { return produto }
                            })
                            .sort((a, b) => {
                                if (ordenacao === 1) {
                                    return +a.preco - +b.preco;
                                } else {
                                    console.log(ordenacao)
                                    return +b.preco - +a.preco}
                                })
                                .map((produto) => {
                                    return <Produto
                                    key={produto.nome}
                                    nome={produto.nome}
                                    preco={produto.preco}
                                    imagem={produto.imagem}>
                                    </Produto>
                                })
                        }
                </Principal>
            </Main>
        </>

    );
}

export default App;
