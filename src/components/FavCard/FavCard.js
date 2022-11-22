import Card from "../Card-Products/Card"
import { ConateinerFavBody } from "./FavCard.styled"


function FavCard (props){
    const {favorites,
         products,
         handleClickProduct,
         currCart
        }= props
   
    const newCardsFav = products.filter((prod)=>favorites.includes(prod.id))
    return(
        <ConateinerFavBody>
            {newCardsFav.map((product)=>{     return (
                                <Card key={product.id}
                                    product={product}
                                    handleClickProduct={handleClickProduct}
                                    currCart={currCart}

                                />

                            )})

            }
          
        </ConateinerFavBody>
    )

}
export default FavCard