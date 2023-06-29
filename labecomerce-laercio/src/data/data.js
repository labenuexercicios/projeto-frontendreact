import lua from "../Components/ShoppingCart/Items/utils/lua.jpg"
import lua2 from "../Components/ShoppingCart/Items/utils/lua2.jpg"
import lua3 from "../Components/ShoppingCart/Items/utils/lua3.jpg"
import interestrelar from "../Components/ShoppingCart/Items/utils/interstrelar.jpg"
import interestrelar2 from "../Components/ShoppingCart/Items/utils/interstrelar2.jpg"
import interestrelar3 from "../Components/ShoppingCart/Items/utils/interstrelar3.jpg"
import interestrelar4 from "../Components/ShoppingCart/Items/utils/interstrelar4.jpg"
import marte from "../Components/ShoppingCart/Items/utils/marte.jpg"
import marte2 from "../Components/ShoppingCart/Items/utils/marte2.jpg"
import marte3 from "../Components/ShoppingCart/Items/utils/marte3.jpg"
import marte4 from "../Components/ShoppingCart/Items/utils/marte4.jpg"
import marte5 from "../Components/ShoppingCart/Items/utils/marte5.jpg"
import marte6 from "../Components/ShoppingCart/Items/utils/marte6.jpg"
import orbital from "../Components/ShoppingCart/Items/utils/orbital.jpg"
import orbital2 from "../Components/ShoppingCart/Items/utils/orbital2.jpg"
import orbital3 from "../Components/ShoppingCart/Items/utils/orbital3.jpg"
import turismo from "../Components/ShoppingCart/Items/utils/turismo-espacial2.jpg"
import capsula from "../Components/ShoppingCart/Items/utils/capsula-turismo.jpg"    


const data = [
    {
      name: "Estadia na Estação Espacial",
      id: 1,
      category: "Viagem-Solo",
      price: 1800.00,
      stoke: 4,
      discription:
        "Você gostaria de vivenciar a vida no espaço por um período mais longo? Oferecemos a oportunidade de passar semanas a bordo da Estação Espacial Internacional. Você terá a chance de trabalhar com astronautas profissionais e apreciar a vista deslumbrante do espaço sideral.",
      imagem: orbital2,
    },
  
    {
      name: "Turismo na Lua",
      id: 2,
      category: "Viagem-Solo",
      price: 3246.00,
      stoke: 7,
      discription:
        "Viagem a bordo de uma espaçonave tripulada até o nosso satélite natural. Explore a superfície lunar, caminhe onde os astronautas históricos já estiveram e maravilhe-se com a imensidão do cosmos.",
      imagem: lua,
      lua2,
      lua3,
    },
  
    {
      name: "Colonização espacial",
      id: 3,
      category: "Viagem-Familia",
      price: 9854.00,
      stoke: 4,
      discription:
        "Se você está interessado em ser parte da história e contribuir para a colonização de outros planetas, oferecemos viagens para estabelecer assentamentos em planetas como Marte. Projetadas para pessoas corajosas e visionárias que desejam criar uma nova vida em um mundo extraterrestre.",
      imagem: capsula,
    },
  
    {
      name: "Viagem Orbital",
      id: 4,
      category: "Viagem-Solo",
      price: 1200.00,
      stoke: 6,
      discription:
        "Emocionante viagem Orbital da Terra, a bordo de uma   espaçonave especialmente projetada para você terá a oportunidade de subir até a borda do espaço, contemplar a curvatura da Terra e desfrutar de vistas deslumbrantes antes de retornar à Terra.",
      imagem: orbital,
      orbital3,
    },
  
    {
      name: "Viagem Interestrelar",
      id: 5,
      category: "Viagem Solo",
      price: 9850.00,
      stoke: 4,
      discription:
        "Embarque em uma espaçonave de última geração projetada para viagens interestelares e descubra as maravilhas do universo. Visite sistemas estelares distantes, admire paisagens cósmicas e desvende os mistérios do cosmos.",
      imagem: interestrelar,
      interestrelar2,
      interestrelar3,
      interestrelar4,
    },
  
    {
      name: "Viagem a Mercúrio",
      id: 6,
      category: "Viagem-Familia",
      price: 8790.00,
      stoke: 4,
      discription:
        "Embarque em uma missão para Mercúrio e teste os limites da tecnologia espacial enquanto você se aventura no planeta mais próximo do Sol. Explore as crateras e formações rochosas únicas de Mercúrio e desfrute das vistas incríveis do pôr do sol em um cenário cósmico.",
      imagem: marte5,
    },
  
    {
      name: "Viagem a Vênus",
      id: 7,
      category: "Viagem-Familia",
      price: 8760.00,
      stoke: 4,
      discription:
        "Faça uma viagem para o planeta irmão da Terra e experimente a paisagem vulcânica e a atmosfera densa de Vênus. Admire as montanhas e os vales cobertos de nuvens, e descubra os segredos desse mundo misterioso",
      imagem: marte3,
    },
  
    {
      name: "Viagem a Marte",
      id: 8,
      category: "Viagem-Familia",
      price: 6250.00,
      stoke: 3,
      discription:
        "Jornada incrível e desafiadora o levará ao Planeta Vermelho, onde você terá a chance de explorar sua geologia, estudar sua atmosfera e quem sabe, descobrir sinais de vida passada ou futura.",
      imagem: marte,
      marte3,
      marte5,
      marte6,
    },
  
    {
      name: "Viagem a Júpiter",
      id: 9,
      category: "Viagem-Familia",
      price: 5660.00,
      stoke: 4,
      discription:
        "Embarque em uma nave espacial especialmente projetada para suportar as condições extremas de Júpiter, o maior planeta do sistema solar. Maravilhe-se com as faixas coloridas de nuvens e as tempestades violentas que dominam a atmosfera gasosa de Júpiter.",
      imagem: marte2,
    },
  
    {
      name: "Viagem a Saturno",
      id: 10,
      category: "Viagem-Familia",
      price: 5880.00,
      stoke: 4,
      discription:
        "Faça uma viagem inesquecível para Saturno e fique maravilhado com seus anéis majestosos. Desça na lua Titã, com sua atmosfera densa e lagos de metano líquido, ou visite Encélado, onde jatos de água são expelidos de sua superfície gelada.",
      imagem: lua2,
    },
    {
      name: "Viagem a Urano",
      id: 11,
      category: "Viagem-Familia",
      price: 6500.00,
      stoke: 4,
      discription:
        "Explore o planeta gelado de Urano e testemunhe sua inclinação única, onde ele roda de lado. Observe suas nuvens azul-esverdeadas e descubra seus anéis escuros e suas luas fascinantes.",
      imagem: marte4,
    },
  
    {
      name: "Viagem a Netuno",
      id: 12,
      category: "Viagem-Familia",
      price: 7540.00,
      stoke: 4,
      discription:
        " Embarque em uma missão para o distante planeta azul de Netuno. Maravilhe-se com as tempestades violentas e os ventos poderosos que ocorrem em sua atmosfera. Descubra suas luas intrigantes, como Tritão, e mergulhe em um mundo completamente diferente.",
      imagem: turismo,
    },
  ];

export default data