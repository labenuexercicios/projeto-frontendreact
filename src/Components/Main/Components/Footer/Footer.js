import React from "react";
import { StyleFooter } from "./styled";

export function Footer() {
  return (
    <footer>
      <StyleFooter>
        <p>Criado por: Arthur Prado</p>
        <p>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/arthur-matheus-prado-b74aa8181/"
            target="_blank"
          >
            Arthur Prado
          </a>
        </p>
        <p>
          GitHub:
          <a href="https://github.com/TioArthurPrado" target="_blank">
            Arthur Prado
          </a>
        </p>
      </StyleFooter>
    </footer>
  );
}
