import { Layout } from "../components/Layout/Layout";
import styled from "styled-components";
// // import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: gray;
  
  /* border: 1px solid red; */
  h1{
    font-size: 120px;
  }
  p{
    font-size: 24px;
  }
`

export const ErrorPage = () => {

  return (
    <Layout>
      <Container>
        <h1>404</h1>
        <p>PAGE NOT FOUND</p>
      </Container>
    </Layout>
  )
}