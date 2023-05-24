import styled from 'styled-components'
import backgroundModel2 from "./assets/back.jpg";


export const SectionHome = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background-image:url(${backgroundModel2});
  height:80vh;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:right bottom;

  .typing {
    margin-top: 6rem;
    text-align: center;
    font-size: 7rem;
    margin-left: 6rem;
    padding: 0.1875rem;
    color: #ff6cc9;
    text-shadow: 0 0 1.765rem hotpink;
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;



.Products span { display:inline-block; animation:float .6s ease-in-out infinite; }

@keyframes float {
  0%,100%{ transform:none; }
  33%{ transform:translateY(-1px) rotate(-2deg); }
  66%{ transform:translateY(1px) rotate(2deg); }
}
body:hover span { animation:bounce .1s; }
@keyframes bounce {
  0%,100%{ transform:translate(0); }
  25%{ transform:rotateX(20deg) translateY(1px) rotate(-3deg); }
  50%{ transform:translateY(-20px) rotate(3deg) scale(1.1);  }
}

span:nth-child(4n) { color:hsl(335, 75%, 75%); text-shadow:1px 1px hsl(30, 25%, 25%), 1px 1px hsl(10, 15%, 15%), 1px 1px hsl(10, 15%, 15%), 1px 1px hsl(30, 25%, 35%); }
span:nth-child(4n-1) { color:hsl(335, 75%, 75%); text-shadow:1px 1px hsl(30, 25%, 25%), 1px 1px hsl(10, 15%, 15%), 1px 1px hsl(10, 15%, 15%), 1px 1px hsl(30, 25%, 35%); }
span:nth-child(4n-2) { color:hsl(335, 75%, 75%); text-shadow:1px 1px hsl(30, 25%, 25%), 1px 1px hsl(10, 15%, 15%), 1px 1px hsl(10, 15%, 15%), 1px 1px hsl(30, 25%, 35%); }
span:nth-child(4n-3) { color:hsl(335, 75%, 75%); text-shadow:1px 1px hsl(30, 25%, 25%), 1px 1px hsl(10, 15%, 15%), 1px 1px hsl(10, 15%, 15%), 1px 1px hsl(30, 25%, 35%); }
`;

export const ContainerProducts = styled.div`
  width: 100%;
  display:grid;
  grid-template-columns:repeat(4, 15.9375rem);
  justify-content:center;
  justify-items: center;
  padding: 1.875rem;
  grid-gap: 1.875rem;
`;
