import { Header } from "../Header/Header";
import {Footer} from "../Footer/Footer"

export const Layout = (props) => {
  return (
    <>
      <Header/>
      {props.children}
      <Footer/>
    </>
  )
}