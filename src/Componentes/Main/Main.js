import { useEffect} from "react";
import { Button, Styledositens } from "./Mainstyle";
import imagemtrina from "../../Imagens/trina.jpg"
import imagemcanadian from "../../Imagens/canadian.jpg"
import imagemjinko from "../../Imagens/Jinko.jpg"

function Main (props){
    let vardeimagem = ""

    useEffect(()=>{
        const listaDeitensstorage2 = JSON.parse(localStorage.getItem("Lista dos itens"))
        if(listaDeitensstorage2){
            props.setSalvaitens(listaDeitensstorage2)
        }
   },[props.vetorQueguardaositens])

   if(props.kit.nome === "Trina"){
    vardeimagem = imagemtrina
}

if(props.kit.nome === "Canadian"){
    vardeimagem = imagemcanadian
}

if(props.kit.nome === "Jinko"){
    vardeimagem = imagemjinko
}

    function Compraitempreco(id){

        // props.setPegavlcompra(props.pegavlcompra + props.kit.preco)

        //  props.setChamacarrinho(1)


    const kit = props.salvaItens && props.salvaItens.find((item) => item.id === id)

    if(kit){

        const novoitem = props.salvaItens.map((item) =>{
            if(kit.id === item.id && item.amount >= 1){
                props.setPegavlcompra(props.pegavlcompra + item.preco)
                return {...item, amount: item.amount + 1};
            }
            else{
                return item;
            }
        })
        const listaDoskits = JSON.stringify(novoitem);
        localStorage.setItem("Lista dos itens", listaDoskits);
        props.setSalvaitens(novoitem)
    }
    else{
        const itemencontrado = props.kits.find((item) => item.id === id);
        const novoItem = { ...itemencontrado, amount: 1 };
        const novaLista = [...props.salvaItens, (props.salvaItens[1] = novoItem)];
        const listaDoskits = JSON.stringify(novaLista);
        localStorage.setItem("Lista dos itens", listaDoskits);
        props.setSalvaitens(novaLista)

    }
    }
    return(
        <div>
            <Styledositens>
            <div>
            <img src={vardeimagem} width = "225px" height={225} alt="ImgJinko"></img>
            <p><b>Marca: {props.kit.nome}</b></p>
            <p><b>Geração: {props.kit.geracao}w</b></p>
            <p><b>Sistema contra surto: {props.kit.saf}</b></p>
            <p><b>Preço: R${props.kit.preco},00</b></p>
            <Button onClick={()=>Compraitempreco(props.kit.id)}>Adicionar ao carrinho
            </Button>     
            </div>
            </Styledositens>
    </div>
  

    )
}

export default Main;