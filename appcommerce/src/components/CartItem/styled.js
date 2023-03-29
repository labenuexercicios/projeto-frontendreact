import styled from "styled-components";
import { IoTrashOutline, IoAddOutline, IoRemoveOutline } from "react-icons/io5";

export const Card = styled.div`
  display: flex;
  width: 100%;
  align-items: left;
  border: #67568c 1px solid;
  border-radius: 1.5rem;
  padding: 0.75rem;
  color: #810541;

  h4 {
    color: #7E354D;
    font-size: 1.35rem;

    @media screen and (max-width: 450px) {
      padding: 0.5rem;
      font-size: 0.9rem;
    }

    @media screen and (max-width: 375px) {
      font-size: 0.8rem;
      padding: 0.25rem;
    }
  }
`;

export const ProductImage = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: contain;
  border-radius: 1rem;

  @media screen and (max-width: 450px) {
    width: 5rem;
    height: 5rem;
  }

  @media screen and (max-width: 319px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-left: 0.75rem;

  @media screen and (max-width: 450px) {
    gap: 0.5rem;
    padding-left: 0.5rem;
  }
`;

export const NameItem = styled.div`
  display: flex;
  justify-content: space-between;
  h5 {
    width: 75%;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.75rem;
  }
`;

export const TrashIcon = styled(IoTrashOutline)`
  font-size: 1.5rem;

  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const ValueItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Quantity = styled.div`
  width: 6rem;
  padding: 0.3rem 0.5rem;
  background-color: rgba(76, 73, 74, 0.1);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 450px) {
    width: 4.5rem;
    height: 1.8rem;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 375px) {
    width: 3.5rem;
    height: 1.5rem;
  }

  @media screen and (max-width: 319px) {
    width: 3rem;
  }
`;

export const AddIcon = styled(IoAddOutline)`
  :hover {
    color: #7E354D;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.75rem;
  }
`;

export const RemoveIcon = styled(IoRemoveOutline)`
  :hover {
    color: #7E354D;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.75rem;
  }
`;