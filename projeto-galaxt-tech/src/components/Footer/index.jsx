import React from "react";
import { ContainerFooter } from "./styled";
import imgEmail from "../../assets/mail.svg";
import iconInsta from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

export function Footer() {
  return (
    <ContainerFooter>
      <div className="section">
        <section className="about">
          <h2>Sobre a Galaxia Tech 👩🏽‍🚀</h2>
          <p className="paragraph">
            Lojinha de brinquedos com tema espacial, para todas as idades.
            Desenvolvida por <span color="hotpink">Caroline Voleck</span> no curso da Labenu utilizando <span color="blue">React</span>.{" "}
          </p>
        </section>

        <section className="contact">
          <h2>Entre em contato 🚀</h2>
          <div className="container-contact">
            <div>
              <img
                className="iconsSocial"
                src={linkedin}
                alt="ícone do linkedin"
              />
              <span className="linkedin">linkedin.com/in/carolinevoleck</span>
            </div>
            <div>
              <img
                className="iconsSocial"
                src={imgEmail}
                alt="ícone do e-mail"
              />
              <span>caroline_voleck@hotmail.com</span>
            </div>
            <div>
              <img
                className="iconsSocial"
                src={iconInsta}
                alt="ícone do instagram"
              />
              <span>c_voleck</span>
            </div>
          </div>
        </section>
      </div>
    </ContainerFooter>
  );
}
