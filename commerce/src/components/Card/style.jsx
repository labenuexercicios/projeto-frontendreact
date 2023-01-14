import styled from "styled-components";

export const CardBox = styled.div`
  width: 220px;
  height: 265px;
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;



  h3 {
    margin-bottom: 10px;
  }
`

export const CardImg = styled.img`
  width: 200px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 10px;
`

export const CardButton = styled.button`
  background-color: #0ddf0d;
  height: 30px;
  border-radius: 10px;
  border: none;

  :hover {
    background-color: #09bb09;
    font-weight: bold;
    color: white;
  }
`