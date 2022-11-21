import { ContaninerProduct } from "./Product.styled"
import locationIcon from "../../assets/location.png"
import starEvaluation from "../../assets/starEvaluation.png"
import { useState } from "react"
import { formatter } from "../../uteis/formatterCurrency"
import certificado from "../../assets/certificado.png"

function Product(props) {
    const {product}=props

    const dicontPrice =formatter.format(product.price * (1-(product.offPrice/100)))


    const [currImage, setCurrImage] = useState(0)

  console.log(product.avalible);

    return (
        <ContaninerProduct avalible={product.avalible}>
            <p>{product.categories.map((categoty,i)=>(product.categories.length>i+1?<span key={i}>{categoty}-</span>:<span>{categoty}</span>))}</p>
            <div className="product-view">
                <div className="image-product">
                    <div className="gallary-product">{product.image.map((image,i)=><img onMouseEnter={()=>setCurrImage(i)} key={i} src={image} alt="imagem pequena" /> )}
                 
                    </div>
                    <img src={product.image[currImage]} alt="" />


                </div>
                <div className="info-product">
                    <h1>{product.name}</h1>
                    <p>Marca: {product.brand}</p>
                    <div className="stars">
                        <img src={starEvaluation} alt="" />
                        <p>{product.numberEvaluation} clientes avaliaram este produto</p>
                    </div>
                    <div className="price">
                        <p>{formatter.format(product.price)}</p>
                        <span>{product.offPrice}%</span>
                        <p>{dicontPrice}</p>
                    </div>
                    <div className="about-product">
                        <div>{product.categories[0]==="Roupas" &&
                            <select>
                                <option>tamanho</option>                            
                             {product.dimensions.map((size, i)=><option key={i} value={size}>{size}</option>)}

                            
                            </select>
}
                        </div>
                        <h2>Sobre</h2>
                        <ul>
                            <li>Marca: {product.brand}</li>
                            <li>Material: {product.material}</li>
                            <li>Apartir de {product.idade[0]}{product.idade.length>1 ? <span> a {product.idade[1]} anos</span> : <span> anos</span>} </li>
                            {product.pages>0 && <li>Paginas:{product.pages}</li>}
                          {product.warranty>0 &&  <li>{product.warranty}</li>}
                            {product.certification && <li><img src={certificado} alt="certificado" /></li>}
                        </ul>



                    </div>

                </div>
                <div className="addToCart-product">
                    <p> {formatter.format(product.price)}</p>
                    <p>{dicontPrice}</p>
                    <p>Entrega em 24hrs</p>
                    <div><img src={locationIcon} alt="location icon" /> <span>Rua dr juvenal dos santos 270, apto 104, luxemburgo bh-mg</span><span>30380-530</span></div>
                    {product.avalible?<p>Em estoque</p>:<p>ESGOTADO</p>}
                    <button>Adicionar ao carrinho</button>
                    <button>Comprar agora</button>
                    <div className="fav">
                    <input type="checkbox" name="favorito" /><label>Adicionar aos favoritos</label>
                    </div>
                </div>
            </div>
            <div>
            <h3>Descrição</h3>
            <p> {product.description}</p>
            </div>




        </ContaninerProduct>
    )

}
export default Product