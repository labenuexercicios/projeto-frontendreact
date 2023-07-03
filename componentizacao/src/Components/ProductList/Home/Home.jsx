import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { HomeContainer } from "./HomeStyle";

export const Home = ({ renderProduct }) => {
  return (
    
    <HomeContainer>
    {renderProduct}
    </HomeContainer>
  )
};
