import { CashOutItens, CashOutPage, ContainerPagina,ContentPage } from "./styled"
import {Header} from "./Components/Header/Header"
import { Nav } from "./Components/Nav/Nav"
import shoes from "./content/tenis.json"
import { useState, useEffect } from "react"
import ShoeCard from "./Components/ShoeCard/ShoeCard"
import CarrinhoLateral from "./Components/CarrinhoLateral/CarrinhoLateral"
import { Footer } from "./Components/Footer/Footer"

export function Pagina(){
    const [pesquisa,setPesquisa] = useState("");
    const [valorMinimo, setValorMinimo] = useState("")
    const [valorMaximo, setValorMaximo] = useState("")
    const [ordem,setOrdem]= useState("")
    const [carrinho,setCarrinho] = useState([])
    const [tela,setTela] = useState(1)


    const comprarTenis =(tenis)=>{
        const novoCarrinho =[...carrinho]
        const tenisAdd = tenis
        const tenisExiste = novoCarrinho.find((tenis)=>{
            return tenis.id === tenisAdd.id
        })
        if (tenisExiste){
            tenisExiste.qtd++
            tenisExiste.precototal = tenisExiste.qtd*tenisExiste.preco
        }else{
            novoCarrinho.push({...tenisAdd,qtd:1,precototal:tenisAdd.preco})
        }
        setCarrinho(novoCarrinho)
    }

    useEffect(()=>{
        if(carrinho.length>0){
            const listaStringCarrinho = JSON.stringify(carrinho)
            localStorage.setItem("carrinho",listaStringCarrinho)
        }
    },[carrinho])

    useEffect(()=>{
        const novoCarrinho =JSON.parse(localStorage.getItem("carrinho"))
        if(novoCarrinho !== null){
            setCarrinho(novoCarrinho)
        }
    },[])

    const carrinhoFiltrado = carrinho.sort((a, b) => {
        switch (ordem) {
            case "maior":
                if (a.precototal < b.precototal) {
                    return 1
                } else {
                    return -1
                }
            case "menor":
                if (a.precototal < b.precototal) {
                    return -1
                } else {
                    return 1
                }
        }
    })

    let totalCarrinho =0
    const somaCarrinho = () =>{
        for (let i = 0; i < carrinho.length; i++) {
            totalCarrinho += carrinho[i].precototal
        }
        return
    }
    
    somaCarrinho()

    const renderizaTela =() =>{
        switch(tela){
            case 1:
                return <ContentPage>
                    {shoesFiltrados.map((shoe) => {
                        return (
                            <ShoeCard
                                key={shoe.id}
                                shoe={shoe}
                                comprarTenis={comprarTenis}
                                setCarrinho={setCarrinho}
                            />
                        )
                    })
                    }
                </ContentPage>;
            case 2:
                return <CashOutPage>
                    {carrinhoFiltrado.map((tenis,index)=>{
                        return (<CashOutItens>
                            <img src={tenis.imagem} />
                            <h1>{tenis.name}</h1>
                            <p>Quantidade: {tenis.qtd}x</p>
                            <h4>Preço total: R${tenis.precototal.toFixed(2)}</h4>
                        </CashOutItens>)
                    })}
                    <h2>Total: R$ {totalCarrinho}</h2>
                    <button onClick={()=>setTela(3)}>Confirmar Compras</button>
                </CashOutPage>
            case 3:
                {window.scrollTo(0,0)}
                return <h1>Obrigado por visualizar meu projeto :) </h1>
        }
    }

    console.log(carrinho);
    const shoesFiltrados = shoes
    .filter((shoe) => shoe.preco >= valorMinimo)
    .filter((shoe) => {
        return shoe.name.toLowerCase().includes(pesquisa.toLowerCase());
    })
    .filter((shoe) => { return valorMaximo ? shoe.preco <= valorMaximo : shoe })
    .sort((a, b) => {
            switch (ordem) {
                case "maior":
                    if (a.preco < b.preco) {
                        return 1
                    } else {
                        return -1
                    }
                case "menor":
                    if (a.preco < b.preco) {
                        return -1
                    } else {
                        return 1
                    }
            }
        })


    return(
        <>
        <ContainerPagina>
            <Header
            pesquisa={pesquisa}p
            setPesquisa={setPesquisa}
            minimo={valorMinimo}
            maximo={valorMaximo}
            setValorMinimo={setValorMinimo}
            setValorMaximo={setValorMaximo}
            carrinho={carrinho}
            totalCarrinho={totalCarrinho}
            setCarrinho={setCarrinho}
            setTela={setTela}
            />
            <Nav
                ordem={ordem}
                setOrdem={setOrdem} />
            
            
            {renderizaTela()}
            <Footer />
        </ContainerPagina>

        </>
    )
}