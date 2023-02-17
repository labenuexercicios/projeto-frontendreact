import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.75rem;
  padding: 32px 0 40px 0;
`;

export const List = styled.ul`
  flex: 3;
  display: flex;
  list-style-type: none;
  gap: 48px;
`;

export const ItemList = styled.li``

export const Links = styled.a`
  color: #f7f7f7;
  font-weight: 400;
  line-height: 2;
  text-decoration: none;
`;

export const Address = styled.p`
  line-height: 1.5;
  text-align: end;
  flex: 3;
`;
