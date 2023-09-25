import styles from "./Footer.module.css";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"


function Footer() {
  return (
    <>
      <div className={styles.container}>
     

        <div className={styles.sobre}>
          <h3>Sobre:</h3>
          <p>Quem somos?</p>
          <p>O que fazemos?</p>
          <p>Como Fazemos?</p>
          <p>Dúvidas</p>
        </div>
        <div className={styles.suport}>
        <h3>Descubra:</h3>
          <p>Suporte</p>
          <p>Problemas?</p>
        </div>
        <div className={styles.redes}>
        <h3>Nossas redes sociais: </h3>
        <div>
          <a href="www.facebook.com"/>
          <AiFillFacebook  className={styles.icones}/> 
        </div>
        <div>
          <a href="www.instagram.com" /> 
          <AiFillInstagram  className={styles.icones}/>
        </div>
        <div>
          <a href="www.twitter.com"/> 
          <AiFillTwitterSquare  className={styles.icones}/>
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;