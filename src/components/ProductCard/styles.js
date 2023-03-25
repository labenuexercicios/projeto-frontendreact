import styled from "styled-components";

export const CardContainer = styled.div`
  background: var(--beige);
  position: relative;
  line-height: normal;
  padding: 6px;
  height: 300px;
  width: 270px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.2s;
  

  img {
    height: 230px;
  }

  p {
    color: #000 !important;
    margin-bottom: 2%;
    font-size:13px;
    line-height:20px;
  }

  button {
    background:none;
    border:none;
    font-size: 20px;
    color: var(--light-blue);
    cursor: pointer;
  }

  button:hover {
    transition:0.3s;
    transform: scale(1.1);
    color: #468ac1;
  }

  button:active{
    transition:0.3s;
    transform: scale(1);
    color: #fff;
  }

  .imageContainer {
    display: flex;
    justify-content: center;
  }

  .pricing {
    color: var(--light-blue) !important;
    font-weight: bold;
    font-size: 20px;
  }

  .buy-bar {
    display: flex;
    justify-content: space-between;
  }

  .tag {
    width: 50px;
    height: 30px;
    float: right;
    background: var(--light-blue);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-weight: bold;
    border-radius: 10px;
    right: -15px;
    top: -10px;
  }
`;
