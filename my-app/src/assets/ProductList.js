import almofada1 from '../images/almofada1.png'
import almofada2 from '../images/almofada2.png'
import almofada3 from '../images/almofada3.png'
import papeldeparede1 from '../images/papeldeparede1.png'
import papeldeparede2 from '../images/papeldeparede2.png'
import quadro1 from '../images/quadro1.png'
import quadro2 from '../images/quadro2.png'
import quadro3 from '../images/quadro3.png'
import relogio1 from '../images/relogio1.png'

const ProductList = [
    {
        name: 'ALMOFADA GALÁXIA ROXA',
        id: 1,
        category: 'Almofadas',
        rate: 5,
        price: 12.90,
        stock: 20,
        description: 'Capa de almofada 45x45 cm com ziper embutido',
        image: almofada1
    },
    {
        name: 'ALMOFADA GALÁXIA VERMELHA',
        id: 2,
        rate: 4,
        category: 'Almofadas',
        price: 12.90,
        stock: 15,
        description: 'Capa de almofada 45x45 cm com ziper embutido',
        image: almofada2
    },
    {
        name: 'ALMOFADA GALÁXIA DIVERSA',
        id: 3,
        rate: 4.5,
        category: 'Almofadas',
        price: 15.90,
        stock: 5,
        description: 'Capa de almofada 45x45 cm com ziper embutido',
        image: almofada3
    },
    {
        name: 'ADESIVO PLANETA CLARO',
        id: 4,
        rate: 4.5,
        category: 'Adesivos',
        price: 55.90,
        stock: 7,
        description: 'Papel de parede adesivado em rolo 0,50 x 1,05 m, em fundo claro',
        image: papeldeparede1
    },
    {
        name: 'ADESIVO PLANETA ESCURO',
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
        id: 8,
        rate: 3.5,
        category: 'Relógios',
        price: 89.90,
        stock: 23,
        description: 'Relógio de parede em acrílico em alto relevo',
        image: relogio1
    }  
]

export const quantidade = ProductList.length

export default ProductList