import styled from "styled-components";

export const Cards = styled.section`
  position: relative;

  .cardContainer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    z-index: -1;
  }

  .cardRadius {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 26.25rem;
    background-color: #ff84ba;
    border-radius: 1.25rem;
    padding: 1.25rem;
    position: sticky;
   
  }

  .cardImg {
    background-image: radial-gradient(circle at 54.29% 66.01%,
    #a82d90 0, #962193 16.67%, #7f1696 33.33%, #630e99 50%,
    #3b0e9c 66.67%, #00149e 83.33%, #001aa1 100%);
    width: 13.75rem;
    height:14.375rem;
    border-radius: 0.5rem;
  }

  .boxInfo {
    display: flex;
    flex-direction: column;
    flex: 1;
  
  }

  .cardInfo {
    padding-top: 10%;
    width: 100%;
    flex: 1;
    
  }

  .cardButton > img {
    width: 0.9375rem;
    height: 0.9375rem;
  }

  .cardFooter {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-top: 0.3125rem;
    border-top: 0.0625rem solid #ddd;
  }

  .textTitle {
    margin: 2% 0;
    font-weight: 700;
    font-size: 0.9em;
    line-height: 1.2;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .textBody {
    margin: 5% 0;
    font-size: 0.7em;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .cardButton {
    border: 0;
    display: flex;
    margin-top: 0.25rem;
    padding: 0.3em;
    cursor: pointer;
    border-radius: 0.625rem;
    transition: 0.3s ease-in-out;
    align-items: center;

  }

  .cardButton:hover {
    border: 0 solid;
    background-color:#a82d90;
    color: #f5f5f5;
  }

  .cardButton:hover .svgIcon {
    filter: invert(100%);
  }

  .cardRadius:hover .cardInfo p {
    overflow: initial;
    text-overflow: initial;
    display: inline-block;
  }

  .svgIcon {
    margin-top: 0.15rem;
  }

  .textAddToCart {
    font-size: 0.625rem;
    margin-top: 0.1rem;
    margin-left: 0.1875rem;
  }
`;


