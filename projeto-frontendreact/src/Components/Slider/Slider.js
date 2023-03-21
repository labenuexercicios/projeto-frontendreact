import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel style={{maxHeight: "60vh"}}>
      <Carousel.Item style={{maxHeight: "60vh"}} interval={4000}>
        <img
          className="d-block w-100"
          src="https://uploaddeimagens.com.br/images/004/394/653/original/universe_bg1.png?1679009661"
          alt="First slide"
        />
        <Carousel.Caption >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight: "60vh"}} interval={4000}>
        <img
          className="d-block w-100"
          src="https://uploaddeimagens.com.br/images/004/394/655/original/universe_bg2.png?1679009765"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight: "60vh"}} interval={4000}>
        <img
          className="d-block w-100"
          src="https://uploaddeimagens.com.br/images/004/394/657/original/universe_bg3.png?1679009808"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;