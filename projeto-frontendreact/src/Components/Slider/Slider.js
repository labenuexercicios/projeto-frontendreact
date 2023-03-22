import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel 
    className="carousel" >
      <Carousel.Item 
      className="carousel-item" 
      interval={4000}>
        <img
          className="d-block w-100"
          src="https://uploaddeimagens.com.br/images/004/394/653/original/universe_bg1.png?1679009661"
          alt="First slide"
        />
        <Carousel.Caption
        className="carousel-caption">
          <h3>Explore o universo em nossa loja!</h3>
          <p>Descubra novos horizontes e expanda seus limites com nossas incríveis opções de espaçonaves. Deixe sua imaginação voar alto e encontre a nave perfeita para suas aventuras intergalácticas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
      className="carousel-item"
      interval={4000}>
        <img
          className="d-block w-100"
          src="https://uploaddeimagens.com.br/images/004/394/655/original/universe_bg2.png?1679009765"
          alt="Second slide"
        />
        <Carousel.Caption
        className="carousel-caption">
          <h3>Decole em grande estilo com nossas espaçonaves</h3>
          <p>Sinta-se como um verdadeiro astronauta ao adquirir uma de nossas espaçonaves de alta qualidade. Com design inovador e tecnologia de ponta, você terá uma experiência única de lançamento e viagem espacial.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item 
      className="carousel-item"
      interval={4000}>
        <img
          className="d-block w-100"
          src="https://uploaddeimagens.com.br/images/004/394/657/original/universe_bg3.png?1679009808"
          alt="Third slide"
        />
        <Carousel.Caption 
        className="carousel-caption">
          <h3>Aventure-se em missões intergalácticas com nossas naves espaciais de alta tecnologia</h3>
          <p>
            Embarque em jornadas épicas através do universo com nossas naves espaciais de última geração. Com capacidades avançadas de navegação e exploração, você poderá enfrentar os desafios mais difíceis da galáxia.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;