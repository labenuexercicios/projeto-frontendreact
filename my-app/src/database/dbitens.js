import mercurio from "./imagens/mercurio.jpg"
import venus from "./imagens/venus.jpeg"
import terra from "./imagens/terra.jpg"
import marte from "./imagens/marte.jpg"
import jupiter from "./imagens/jupiter.jpg"
import saturno from "./imagens/saturno.jpg"
import urano from "./imagens/urano.jpg"
import netuno from "./imagens/netuno.jpg"
import plutao from "./imagens/plutao.jpg"
import sol from "./imagens/sol.jpg"


const products = [
    {
        name:"Mercúrio",
        id: 1,
        price: 100.0,
        description:"Mercúrio é o menor dos planetas do sistema solar e, também, aquele que está mais perto do Sol. Por ser o mais próximo do nosso astro-rei, Mercúrio é considerado o primeiro na ordem dos planetas.",
        image: `${mercurio}`
    },
    {
        name:"Vênus",
        id: 2,
        price: 200.0,
        description:"É o planeta mais quente do sistema solar. Essa alta temperatura tem origem no dióxido de carbono presente em grande quantidade na sua atmosfera. Seu movimento de rotação é único no sistema solar, sendo que ele gira na direção contrária dos demais planetas.",
        image:  `${venus}` 
    },
    {
        name:"Terra",
        id: 3,
        price: 300.0,
        description:"A Terra tem uma atmosfera composta por gases expelidos por erupções vulcânicas ao longo dos milhares de anos. Essa condição permitiu a temperatura certa para a concepção da vida no sistema solar.",
        image: `${terra}`
    },
    {
        name:"Marte",
        id: 4,
        price: 400.0,
        description:"Marte tem condições de abrigar vida, inclusive sendo um grande candidato à moradia humana no futuro. Isso por dois motivos: sua proximidade com a Terra e as características de sua superfície, bem parecidas com as do nosso planeta.",
        image: `${marte}`
    },
    {
        name:"Júpiter",
        id: 5,
        price: 500.0,
        description:"Júpiter é conhecido como o gigante gasoso, porque é o maior dos planetas do conjunto solar. Além disso, ele não tem uma superfície rígida, e a atmosfera contém amônia e metano",
        image: `${jupiter}`
    },
    {
        name:"Saturno",
        id: 6,
        price: 600.0,
        description:"Saturno é o planeta dos anéis, que são formados por rocha, gelo e poeira e contam com 1 km de extensão. Trata-se do sexto planeta do sistema solar, sendo que 62 satélites circulam em sua órbita.",
        image: `${saturno}`
    },
    {
        name:"Urano",
        id: 7,
        price: 700.0,
        description:"Urano é um planeta composto por hélio, hidrogênio e metano. Como ele está bastante distante do sol, registra clima bem frio, de 185ºC negativos. Ele se movimenta em um eixo paralelo à sua órbita, sendo que nenhum outro planeta faz isso.",
        image: `${urano}`
    },
    {
        name:"Netuno",
        id: 8,
        price: 800.0,
        description:"Netuno, é o planeta mais distante do Sol. Com 14 satélites, Netuno tem rotação de 16 horas e translação de 164 anos. Além disso, ele é predominantemente constituído por metano, o que contribui para a sua coloração azulada. ",
        image: `${netuno}`
    },
    {
        name:"Plutão",
        id: 9,
        price: 900.0,
        description:"Plutão é constituído por um núcleo rochoso sobre um manto de gelo e metano congelados. A temperatura estimada é de 220 ºC negativos e, por isso, é conhecido também como Anão Gelado. Ele está localizado numa zona do espaço denominada Cinturão de Kuiper.",
        image: `${plutao}`
    },
    {
        name:"Sol",
        id: 10,
        price: 10000.0,
        description:"O Sol é uma estrela anã amarela que os demais corpos celestes do Sistema Solar orbitam. Ele é formado por gases e não dispõe de nenhuma superfície sólida. O Sol é uma estrela localizada na Via Láctea. Trata-se da estrela mais próxima do planeta Terra e a maior de todo o Sistema Solar.",
        image: `${sol}`
    },
]

export default products;