import Carousel from "./carousel/Carousel";

export default function Promotions(props) {
    
    return (
        <div>
            <Carousel products={props.products}/>
        </div>
    )
}