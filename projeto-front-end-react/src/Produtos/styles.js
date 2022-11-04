import styled from 'styled-components'

export const SectionContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    justify-content: center;
    color: rgb(102, 202, 248);
    padding-top: 105px; 
    padding-right: 22%;    
`
export const MainContainer = styled.main`
    background: rgb(4, 19, 26);
    min-height: 100vh;
    padding-bottom: 85px;  
`
export const Filtro = styled.div`
    display: flex;
    flex-direction: column;
// align-items: center;
    border: 2px solid rgb(13, 98, 138);
    border-radius: 15px;
    color: rgb(102, 202, 248);
    padding: 10px 35px;
    position: fixed;
    right: 2%;
    width: 20%;
    height: 200px;
    margin-top: 340px;
    z-index: 3;
`
export const CarrinhoDeProdutos = styled.div`
    display: flex;
    flex-direction: column;
// align-items: center;
    border: 2px solid rgb(13, 98, 138);
    border-radius: 15px;
    color: rgb(102, 202, 248);
    padding: 10px 35px;
    position: fixed;
    right: 2%;
    width: 20%;
    height: 200px;
    margin-top: 105px;
    z-index: 3;
`

export const Marca = styled.img`
    // background-image: linear-gradient(rgb(4, 105, 135), rgb(164, 200, 200), rgb(4, 105, 135));
    background: rgb(4, 105, 135);
    padding: 10px;
    border: 2px solid rgb(102, 202, 248);
    border-radius: 10px;
`
export const Produto = styled.img`
    height: 300px;
    padding: 3% 10%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;  
    // background: rgb(13, 98, 138);
    transform: rotate(30deg);  
`
export const Card = styled.section`
    display: flex;
    border: 2px solid rgb(13, 98, 138);
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    width: 480px;
    height: 200px;
    padding-left: 5px;
    gap: 15px;
    .marca{
        padding-bottom: 40px;
    }  
`
export const Nave = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
        .nave{
        background: rgb(13, 98, 138);
        border: 2px solid rgb(102, 202, 248);
        border-radius: 10px;
        width: 180px;
        height: 30px;
        text-align: center;
        }
        .propriedades{
            background: rgb(13, 98, 138);
            border: 2px solid rgb(102, 202, 248);
            border-radius: 10px;
            width: 180px;
            height: 93px;
            padding-left: 10px;
            text-align: left;
            }
            .preco{
                background: rgb(13, 98, 138);
                border: 2px solid rgb(102, 202, 248);
                border-radius: 10px;
                width: 180px;
                height: 30px;
                text-align: center;
                }
`

