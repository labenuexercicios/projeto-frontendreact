import { Layout } from "../../components/Layout/Layout";
import { Container, ImgBackground } from "./styled";


export const HomePage = () => {
  return (
    <>
      <Layout>
        <Container>
          <ImgBackground src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </Container>
      </Layout>
    </>
  )
}