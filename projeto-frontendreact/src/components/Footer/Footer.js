import React from "react";
import {Rodape, InfoPessoal, ArticlesInfoPessoal, LinkSemDecoracao ,CentralizarTexto} from "./style"

export default function Footer() {
    return(
      <Rodape>
        <InfoPessoal>
          <ArticlesInfoPessoal>
            <h2>Sobre:</h2>
            Uma loja com carrinho para fazer pedidos.
          </ArticlesInfoPessoal>
          <ArticlesInfoPessoal>
            <h2>Explore:</h2>
            <LinkSemDecoracao href="" target="_self">inicio</LinkSemDecoracao>
          </ArticlesInfoPessoal>
          <ArticlesInfoPessoal>
            <h2>Contato:</h2>
            <LinkSemDecoracao href="https://github.com/ItaloRochaOliveira">Gitgub</LinkSemDecoracao> <br />
            <LinkSemDecoracao href="mailto:italo.rocha.de.oliveira@gmail.com">Gmail</LinkSemDecoracao> <br />
            <LinkSemDecoracao href="https://www.linkedin.com/in/italo-rocha-16a8671b6/">Linkedin</LinkSemDecoracao>
          </ArticlesInfoPessoal>
        </InfoPessoal>

        <CentralizarTexto>
          <article>&copy;ItaloRochaOliveira</article>
        </CentralizarTexto>
      </Rodape>
    )
}