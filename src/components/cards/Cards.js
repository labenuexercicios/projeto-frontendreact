import React from "react";
import { Card, CardContent } from "./styled";

const gamesList = [
  {
    id: 1,
    name: "jogo1",
    value: 30,
    imageUrl:
      "https://s2.glbimg.com/dLHiEFov94ONVIVLP2V85FWh7hE=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/3/t/9vl0fdRyi9SvlPOe33yA/subway-surfers-mais-baixado-downloads-decada-2010-2019.jpg",
  },
  {
    id: 2,
    name: "jogo2",
    valor: 20,
    imageUrl:
      "https://ogimg.infoglobo.com.br/in/23001849-c2f-667/FT1086A/INFOCHPDPICT000041975439.jpg",
  },
  {
    id: 3,
    name: "jogo3",
    valor: 40,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHtCJcqMj7KOeOBYUzBfGJz-1aPDsjmI_6g&usqp=CAU",
  },
  {
    id: 4,
    name: "jogo4",
    valor: 50,
    imageUrl:
      "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2020/10/among_us_divulga%C3%A7%C3%A3o.jpg",
  },
  {
    id: 5,
    name: "jogo5",
    valor: 10,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-c7Wu70JGw8SeZspNN82NEs4T-R5oZj_z_w&usqp=CAU",
  },
];

function Cards() {
  return (
    <>
      <Card>
        <img src={gamesList[3].imageUrl} alt="game" />
        <CardContent>
          <p>{gamesList[0].name}</p>
          <p>{gamesList[0].value}</p>
          <button>Adicionar ao carrinho</button>
        </CardContent>
      </Card>
    </>
  );
}

export default Cards;
