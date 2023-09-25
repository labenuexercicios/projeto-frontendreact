import { styled } from "styled-components";

export const ProductCardContainer = styled.div`
  /* border: solid 1px black; */
  /* padding: 10px; */
  /* height: 100vh; */
  /* width: 200px; */
  width: 100%;
  max-width: 300px;
  background-color: var(--isabelline);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;
  position: relative;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px; */

  :hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  /* :hover .button {
            display: flex;
        } */

  img {
    width: 100%;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    margin: 12px 15px;
    color: var(--rosa-claro);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50px;
    background-color: var(--isabelline);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const CardInfos = styled.div`
  padding: 20px;
  border-top: 1px solid (var(--isabelline));

  h3 {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.5;
    font-weight: 500;
  }

  p {
    font-size: 24px;
    font-weight: 400;
    display: block;
    margin-bottom: 10px;
  }
`;
// .card-infos {
//     padding: 20px;
//     border-top: 1px solid (var(--isabelline));
// }

// .card-price {
//     font-size: 30px;
//     font-weight: 400;
//     display: block;
//     margin-bottom: 10px;
// }

// .card-titlle {
//    font-size: 15px;
// color: rgba(0, 0, 0, 0.5);
// line-height: 1.5;
// font-weight: 500;
// }
