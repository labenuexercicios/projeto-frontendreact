import styled from "styled-components";

export const FooterContainer = styled.div`
  background: var(--details);
  height: 300px;
  .text-area {
    position: relative;
    display: flex;
    width: 1400px;
    margin: auto;
    justify-content: space-around;
  }
  .my-info {
    display:flex;
    justify-content: center;
    height:40px;
    align-items: flex-end;
    p {
        margin-right:12px;
    }
    svg:hover {
        transition:0.2s;
        color:var(--light-blue) !important;
        cursor:pointer;
    }
  }

  p {
    color: var(--beige) !important;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
  }
  h2 {
    color: var(--beige) !important;
    margin-top: 20px;
  }
  img {
    position: absolute;
    width: 450px;
    bottom: -9px;
  }
  svg {
    color: var(--beige) !important;
    font-size: 28px;
    margin-right: 12px;
  }
`;
