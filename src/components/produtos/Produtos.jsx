import { Produto, ImgProduto, Button, Text } from "./Style"

export const Produtos = (props) => {
    return(
            <Produto>  
                <ImgProduto></ImgProduto>

                <section>
                    <Text>
                        <span>{props.nome}</span>
                        <p>{props.preco}</p>
                    </Text>

                    <Button>
                        <button>Adicionar ao carrinho</button>
                    </Button>
                </section>
            </Produto>
    )
} 