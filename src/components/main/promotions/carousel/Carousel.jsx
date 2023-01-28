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
import React, { useState, useEffect } from "react";
import { TytleStyled } from "./Style";
import { BodyCarouselStyed } from "./Style";
import { SpecialPromotionsStyled } from "./Style";
import { InnerPriceStyled } from "./Style";
import { PriceStyled } from "./Style";
import { PriceDescount } from "./Style";

export default function Carrousel(props) {
  const [intervalId, setIntervalId] = useState(null);

  props.setPageFlow("promotions");

  const startInterval = (interval) => {
    useEffect(() => {
      if (!intervalId) {
        const id = setInterval(() => {
          handleRightClick();
        }, interval);
        setIntervalId(id);
      }
      return () => clearInterval(intervalId);
    }, [intervalId]);
  };

  startInterval(10000000);

  console.log("start");

  const stopInterval = () => {
    clearInterval(intervalId);
  };

  const carousel = useRef(null);

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = () => {
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
              <GeneralDataStyled
                key={item.id}
                onMouseOver={startInterval(10000000)}
                onMouseOut={stopInterval(0)}
              >
                <DataStyled>
                  <Img src={item.images[0]} alt={item.description} />
                  <DataDescription>
                    <NameStyled>{item.name}</NameStyled>
                    <br />
                    <span>{item.description}</span>
                    <br />
                    <span>Branb: {item.brand}</span>
                    <br />
                    <span>Stock: {item.quantity} iten(s)</span>
                    <br />
                    <DiscountStyled>{item.discount}% OFF</DiscountStyled>
                    <br />
                    <PriceStyled>
                      <div>Price:</div>
                      <InnerPriceStyled>U$ {item.price}</InnerPriceStyled>
                      <PriceDescount>
                        U${" "}
                        {item.price - item.price * Number("0." + item.discount)}
                      </PriceDescount>
                    </PriceStyled>
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
