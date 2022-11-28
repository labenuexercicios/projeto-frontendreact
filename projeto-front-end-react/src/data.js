import imagemVirginGalactic from "./assets/img/vg.svg"
import imagemRoscosmos from "./assets/img/rc.svg"
import imagemRocketLab from "./assets/img/rl.svg"
import imagemBlueOrigin from "./assets/img/bo.svg"
import imagemIsro from "./assets/img/i.svg"
import imagemSpaceX from "./assets/img/sx.svg"
import imagemArianeGroup from "./assets/img/ag.svg"
import imagemStarship from "./assets/img/starship.png"
import imagemBlue from "./assets/img/new-shepard.png"
import imagemAriane from "./assets/img/ariane.png"
import imagemIndia from "./assets/img/india.png"
import imagemFalcon from "./assets/img/falcon-heavy.png"
import imagemNeutron from "./assets/img/neutron.png"
import imagemSpaceShip from "./assets/img/spaceship.png"
import imagemEnergia from "./assets/img/energia.png"
import imagemRfa from "./assets/img/rfa.png"
import imagemRocketfa from "./assets/img/rfa.svg"
import imagemSls from "./assets/img/sls.png"
import imagemNasa from "./assets/img/nasa.png"

const data = {
  products: [
    {
      id: "1",
      nome: "Neutron",
      fabricante: "Rocket Lab",
      altura: 40,
      preco: 6.7,
      empuxo: 7,
      propulsor: "CH₄, LOX",
      origem: "Washington, EUA",
      marca: imagemRocketLab,
      imagem: imagemNeutron,
    },

    {
      id: "2",
      nome: "New Shepard",
      fabricante: "Blue Origin",
      altura: 18,
      preco: 2.5,
      empuxo: 0.49,
      propulsor: "LH2, LOX",
      origem: "Califórnia, EUA",
      marca: imagemBlueOrigin,
      imagem: imagemBlue,
    },

    {
      id: "3",
      nome: "Ariane 6",
      fabricante: "Ariane Group",
      altura: 63,
      preco: 3.6,
      empuxo: 4.65,
      propulsor: "LH2, LOX",
      origem: "Ag. Esp. Européia",
      marca: imagemArianeGroup,
      imagem: imagemAriane,
    },

    {
      id: "4",
      nome: "GSLV MK-III",
      fabricante: "Isro",
      altura: 42,
      preco: 5,
      empuxo: 0.75,
      propulsor: "HTPB",
      origem: "Nova Délhi, Índia",
      marca: imagemIsro,
      imagem: imagemIndia,
    },

    {
      id: "5",
      nome: "Falcon Heavy",
      fabricante: "Space X",
      altura: 70,
      preco: 3.5,
      empuxo: 15.2,
      propulsor: "LOX, RP-1",
      origem: "Califórnia, EUA",
      marca: imagemSpaceX,
      imagem: imagemFalcon,

    },
    {
      id: "6",
      nome: "Starship",
      fabricante: "Space X",
      altura: 50,
      preco: 1.5,
      empuxo: 72,
      propulsor: "LOX, CH₄",
      origem: "Califórnia, EUA",
      marca: imagemSpaceX,
      imagem: imagemStarship,

    },
    {
      id: "7",
      nome: "VSS Imagine",
      fabricante: "Virgin Galactic",
      altura: 8,
      preco: 0.3,
      empuxo: 0.088,
      propulsor: "PO6, N2O",
      origem: "Califórnia, EUA",
      marca: imagemVirginGalactic,
      imagem: imagemSpaceShip,

    },
    {
      id: "8",
      nome: "Energia",
      fabricante: "Roscosmos",
      altura: 58,
      preco: 2,
      empuxo: 46,
      propulsor: "O2, Querosene",
      origem: "Moscou, Rússia",
      marca: imagemRoscosmos,
      imagem: imagemEnergia,

    },
    {
      id: "9",
      nome: "RFA one",
      fabricante: "RFA",
      altura: 30,
      preco: 0.9,
      empuxo: 0.9,
      propulsor: "RP-1, LOX",
      origem: "Berlim, Alemanha",
      marca: imagemRocketfa,
      imagem: imagemRfa,

    },
    {
      id: "10",
      nome: "SLS",
      fabricante: "NASA",
      altura: 75,
      preco: 1.6,
      empuxo: 8.8,
      propulsor: "Propelene",
      origem: "Florida, EUA",
      marca: imagemNasa,
      imagem: imagemSls,

    },
  ]
};
export default data;
