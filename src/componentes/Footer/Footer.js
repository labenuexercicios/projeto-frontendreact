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
          <a href="https://www.facebook.com/profile.php?id=100089850935111" target="_blank">
          <AiFillFacebook  className={styles.icones}/> 
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/gsmartins216/" target="_blank"> 
          <AiFillInstagram  className={styles.icones}/>
          </a>
        </div>
        <div>
          <a href="https://twitter.com/i/flow/login?input_flow_data=%7B" target="_blank"> 
          <AiFillTwitterSquare  className={styles.icones}/>
          </a>
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;