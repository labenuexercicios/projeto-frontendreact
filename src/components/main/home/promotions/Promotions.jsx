import Carousel from "./carousel/Carousel";

export default function Promotions(props) {
  return (
    <div>
      <Carousel
        pageFlow={props.pageFlow}
        setPageFlow={props.setPageFlow}
        products={props.products}
      />
    </div>
  );
}
