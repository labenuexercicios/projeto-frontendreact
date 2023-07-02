import almofada1 from '../images/almofada1.png'
import almofada2 from '../images/almofada2.png'
import almofada3 from '../images/almofada3.png'
import papeldeparede1 from '../images/papeldeparede1.png'
import papeldeparede2 from '../images/papeldeparede2.png'
import quadro1 from '../images/quadro1.png'
import quadro2 from '../images/quadro2.png'
import quadro3 from '../images/quadro3.png'
import relogio1 from '../images/relogio1.png'
import brinquedo1 from '../images/brinquedo1.jpg'
import brinquedo2 from '../images/brinquedo2.jpg'
import brinquedo3 from '../images/brinquedo3.jpg'
import brinquedo4 from '../images/brinquedo4.jpg'
import brinquedo5 from '../images/brinquedo5.jpg'
import brinquedo6 from '../images/brinquedo6.jpg'
import brinquedo7 from '../images/brinquedo7.jpg'
import brinquedo8 from '../images/brinquedo8.jpg'
import brinquedo9 from '../images/brinquedo9.jpg'
import brinquedo10 from '../images/brinquedo10.jpg'
import brinquedo11 from '../images/brinquedo11.jpg'
import brinquedo12 from '../images/brinquedo12.jpg'
import brinquedo13 from '../images/brinquedo13.jpg'
import brinquedo14 from '../images/brinquedo14.jpg'


const ProductList = [
    {
        name: 'ALMOFADA VIAGEM Y',
        id: 1,
        category: 'Almofadas',
        rate: 5,
        price: 12.90,
        stock: 20,
        description: 'Capa de almofada 45x45 cm com ziper embutido',
        image: almofada1
    },
    {
        name: 'ALMOFADA VIAGEM X',
        id: 2,
        rate: 4,
        category: 'Almofadas',
        price: 12.90,
        stock: 15,
        description: 'Capa de almofada 45x45 cm com ziper embutido',
        image: almofada2
    },
    {
        name: 'ALMOFADA VIAGEM Z',
        id: 3,
        rate: 4.5,
        category: 'Almofadas',
        price: 15.90,
        stock: 5,
        description: 'Capa de almofada 45x45 cm com ziper embutido',
        image: almofada3
    },
    {
        name: 'ADESIVO PLANETA LIGHT',
        id: 4,
        rate: 4.5,
        category: 'Adesivos',
        price: 55.90,
        stock: 7,
        description: 'Papel de parede adesivado em rolo 0,50 x 1,05 m, em fundo claro',
        image: papeldeparede1
    },
    {
        name: 'ADESIVO PLANETA DARK',
        id: 5,
        rate: 4.5,
        category: 'Adesivos',
        price: 55.90,
        stock: 35,
        description: 'Papel de parede adesivado em rolo 0,50 x 1,05 m, em fundo escuro',
        image: papeldeparede2
    },
    {
        name: 'QUADRO FOGUETE',
        id: 6,
        rate: 4.5,
        category: 'Quadros',
        price: 109.90,
        stock: 5,
        description: 'Quadro ilustração digital, formato 50cm x 70cm, conjunto kit',
        image: quadro1
    },
    {
        name: 'QUADRO ASTRONAUTA',
        id: 7,
        rate: 4.5,
        category: 'Quadros',
        price: 109.90,
        stock: 5,
        description: 'Quadro ilustração digital, formato 50cm x 70cm, conjunto kit',
        image: quadro2
    },
    {
        name: 'QUADRO UNIVERSO',
        id: 8,
        rate: 4.5,
        category: 'Quadros',
        price: 109.90,
        stock: 23,
        description: 'Quadro ilustração digital, formato 50cm x 70cm, conjunto kit',
        image: quadro3
    },
    {
        name: 'RELÓGIO BUSSOLA ESPACIAL',
        id: 9,
        rate: 3.5,
        category: 'Relógios',
        price: 89.90,
        stock: 23,
        description: 'Relógio de parede em acrílico em alto relevo',
        image: relogio1
    },
    {
        name: 'BRINQUEDO ALPHA',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 230.90,
        stock: 23,
        description: 'Bicho de pelúcia antialergênico com espuma embutida',
        image: brinquedo1
    },
    {
        name: 'BRINQUEDO BETA',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 280.90,
        stock: 23,
        description: 'Bicho de pelúcia antialergênico com espuma embutida',
        image: brinquedo2
    },
    {
        name: 'BRINQUEDO GAMA',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 210.90,
        stock: 23,
        description: 'Bicho de pelúcia antialergênico com espuma embutida',
        image: brinquedo3
    },
    {
        name: 'BRINQUEDO DELTA',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 180.90,
        stock: 23,
        description: 'Bicho de pelúcia antialergênico com espuma embutida',
        image: brinquedo4
    },{
        name: 'BRINQUEDO EPSILON',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 350.90,
        stock: 23,
        description: 'Escultura em resina colorida com tinta não tóxica',
        image: brinquedo5
    },{
        name: 'BRINQUEDO ZETA',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 320.90,
        stock: 23,
        description: 'Escultura em resina colorida com tinta não tóxica',
        image: brinquedo6
    },{
        name: 'BRINQUEDO OMIKRON',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 178.90,
        stock: 23,
        description: 'Escultura em resina colorida com tinta não tóxica',
        image: brinquedo7
    },{
        name: 'BRINQUEDO OMEGA',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 199.90,
        stock: 23,
        description: 'Bicho de pelúcia antialergênico com espuma embutida',
        image: brinquedo8
    },{
        name: 'BRINQUEDO PHI',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 145.90,
        stock: 23,
        description: 'Escultura em resina colorida com tinta não tóxica',
        image: brinquedo9
    },{
        name: 'BRINQUEDO THETA',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 120.90,
        stock: 23,
        description: 'Bicho de pelúcia antialergênico com espuma embutida',
        image: brinquedo10
    },{
        name: 'BRINQUEDO KAPPA',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 122.90,
        stock: 23,
        description: 'Bicho de pelúcia antialergênico com espuma embutida',
        image: brinquedo11
    },{
        name: 'BRINQUEDO LAMBDA',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 140.90,
        stock: 23,
        description: 'Bicho de pelúcia antialergênico com espuma embutida',
        image: brinquedo12
    },{
        name: 'BRINQUEDO SIGMA',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 320.90,
        stock: 23,
        description: 'Bicho de pelúcia antialergênico com espuma embutida',
        image: brinquedo13
    },{
        name: 'BRINQUEDO PI',
        id: 9,
        rate: 3.5,
        category: 'Brinquedos',
        price: 285.90,
        stock: 23,
        description: 'Escultura em resina colorida com tinta não tóxica',
        image: brinquedo14
    }
      
]

export const quantidade = ProductList.length

export default ProductList