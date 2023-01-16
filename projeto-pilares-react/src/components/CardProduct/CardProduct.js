import {
  StyledCard,
  StyledBtnAddCart,
  StyledImgProduct,
  StyledInfoProduct,
  StyledName,
  StyledValue,
  StyledBtnIcon,
} from "./style";
import { useEffect} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export const Card = ({ data, addToCart, addToFavorites, favoriteIcon }) => {
  useEffect(() => {}, [favoriteIcon]);

  return (
    <StyledCard key={data.id}>
      <StyledImgProduct>
        <img src={data.imageUrl} />
        <StyledBtnIcon onClick={() => addToFavorites(data)}>
            {/* a Função adiciona as array favoritos e se a propriedade data.favorited for true troca o icone do coracao para vermelho */}
          {data.favorited ? (
            <AiFillHeart size={24} color={"red"} />
          ) : (
            <AiOutlineHeart size={24} />
          )}
        </StyledBtnIcon>
      </StyledImgProduct>

      <StyledInfoProduct>
        <StyledName>{data.name}</StyledName>
        <StyledValue>Valor: R$ {data.value}</StyledValue>
      </StyledInfoProduct>

      <StyledBtnAddCart onClick={() => addToCart(data)}>
        Adicionar
      </StyledBtnAddCart>
    </StyledCard>
  );
};
