import React, { useState } from 'react'
import { Arrow, Container, ImgContainer, Image, InfoContainer, Slide, Wrapper, Title, Desc, Button } from './style'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItens } from '../../data/data';



const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        } 
    }
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlinedIcon/>
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
      {sliderItens.map((item) => (
      <Slide  key={item.id}> 
        <ImgContainer>
            <Image src={item.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
           </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlinedIcon/>
      </Arrow>
    </Container>
  )
}

export default Slider
