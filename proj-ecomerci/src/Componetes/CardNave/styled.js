import styled from "styled-components";

  export const Card = styled.div`
  display: flex;
 
  justify-content: center;
  flex-wrap: wrap;
  width: 250px;
  height: 150px;
  gap: 10px;
  color: aqua;

  :hover img {
    transition: 1s;
    transform: scale(1.2);
  }

  .img {
    min-width: 350px;
    height: 200px;
    border-radius: 10px;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 350px;
  height: 350px;
  gap: 20px;
  margin-top: 50px;
  background-image: url(https://c.pxhere.com/photos/7d/4a/milky_way_starry_sky_night_sky_star_night_sky_space_cosmos-1438751.jpg!d);
  border-radius: 10px;
`;
