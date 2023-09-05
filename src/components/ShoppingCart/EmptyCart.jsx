import styled from "styled-components"
import { Button } from './styled'
import { useNavigate } from "react-router-dom"

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Message = styled.div`
    width: 90%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid rgba(0,0,0,.4);
    border-radius: 10px;
    text-align: center;
    div{
        width: 150px;
    }
    h1{
        font-size: 40px;
    }

`
export default function EmptyCart() {

    const navigate = useNavigate()

    return (
        <Container>

            <Message>
                <h1>Seu carrinho está vazio!</h1>

                <div>
                    <Button onClick={()=>navigate('/')}>Voltar para página inicial</Button>
                </div>
            </Message>

        </Container>
    )


}
