import { useRef } from "react";
import { ContainerStyled } from "./Style";
import { CarouselStyled } from "./Style";
import { ButtonAction } from "./Style";
import { GeneralDataStyled } from "./Style";
import { DataStyled } from "./Style";
import { NameStyled } from "./Style";
import { Img } from "./Style";
import { DataDescription } from "./Style";
import NextBtn from "../../../../../img/General/Next.png";
import PrevBtn from "../../../../../img/General/Prev.png";
import { DiscountStyled } from "./Style";
import { DiscountDiv } from "./Style";
import React, { useState, useEffect } from "react";
import { TytleStyled } from "./Style";
import { BodyCarouselStyed } from "./Style";
import { SpecialPromotionsStyled } from "./Style";

export default function Carrousel(props) {
  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    if (!intervalId) {
      const id = setInterval(() => {
        handleRightClick();
      }, 10000);
      setIntervalId(id);
    }
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <ContainerStyled>
      <TytleStyled>
        Take advantage of our
        <SpecialPromotionsStyled>SPECIAL PROMOTIONS</SpecialPromotionsStyled>
        today
      </TytleStyled>
      <BodyCarouselStyed>
        <ButtonAction
          src={PrevBtn}
          alt="Scroll Left"
          onClick={handleLeftClick}
        ></ButtonAction>

        <CarouselStyled ref={carousel}>
          {props.products.map((item) => {
            return (
              <GeneralDataStyled key={item.id}>
                <NameStyled>{item.name}</NameStyled>
                <DataStyled>
                  <Img src={item.images[0]} alt={item.description} />
                  <DataDescription>
                    <DiscountDiv>
                      <DiscountStyled>{item.discount}% OFF</DiscountStyled>
                    </DiscountDiv>
                    <br />
                    <span>{item.description}</span>
                    <br />
                    <br />
                    <span>Price: U$ {item.price}</span>
                    <br />
                    <br />
                    <span>Branb: {item.brand}</span>
                    <br />
                    <br />
                    <span>Stock: {item.quantity} iten(s)</span>
                  </DataDescription>
                </DataStyled>
              </GeneralDataStyled>
            );
          })}
        </CarouselStyled>

        <ButtonAction
          src={NextBtn}
          alt="Scroll Right"
          onClick={handleRightClick}
        ></ButtonAction>
      </BodyCarouselStyed>
    </ContainerStyled>
  );
}
