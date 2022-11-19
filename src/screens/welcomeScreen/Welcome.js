import { ContainerWealcome } from "./Welcome.styled"
import inauguracao from "../../assets/inauguraçao.svg"
import {arrayBestOff ,arrayBestEvaluatiob ,arrayMostBougth } from "../../uteis/formatterCurrency"

function Welcome() {
    return (
        <ContainerWealcome>

            <img src={inauguracao} alt="Inauguração" />


            <div>
        
                <div className="contaniners-destaques">
                    <h2>Produtos maiores promocoes</h2>
               {arrayBestOff.map((product) => <img key={product.id} src={product.image[0]} alt={product.altImage} /> )               }
                
                </div>

                <div className="contaniners-destaques">
                    <h2>Produtos mais vendidos</h2>
                    {arrayMostBougth.map((product) => <img  key={product.id} src={product.image[0]} alt={product.altImage} /> )               }

                
                </div>
                <div className="contaniners-destaques">
                    <h2>Produtos melhores avaliados</h2>
                    {arrayBestEvaluatiob.map((product) => <img  key={product.id} src={product.image[0]} alt={product.altImage} /> )               }


                </div>
            </div>

        </ContainerWealcome>
    )
}
export default Welcome