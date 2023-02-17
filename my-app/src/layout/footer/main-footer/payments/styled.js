import styled from "styled-components";

export const Section = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 3;
  text-decoration: none;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style-type: none;
`;

export const ListItem = styled.li``;

export const Image = styled.img``;
