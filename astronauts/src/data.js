import orangesuit from "./assets/products/roupa_espacial_orange.jpg"
import silversuit from "./assets/products/silversuit.jpg"
import oldsuit from "./assets/products/roupaantiga.webp"
import bluesuit from "./assets/products/Bluesuit.webp"
import apolloa4 from "./assets/products/apollo_A4-h.jpg"
import apollospd from "./assets/products/Apollo_SPD-143.jpg"
import balenWhite from "./assets/products/balenciagawhite.jpg"
import emu from "./assets/products/EMU.jpg"
import gemini from"./assets/products/Gemini_g3-c.jpg"
import helmet1 from "./assets/products/helmet1.jpg"
import helmet2 from "./assets/products/helmet2.jpg"
import helmet3 from "./assets/products/helmet3.jpg"
import mkiio from "./assets/products/MKIIO.jpg"
import mochila from "./assets/products/mochila.webp"
import pochete from "./assets/products/pochete.webp"

const product=[
    {
        name: "Orange Suit",
        key: Math.random(),
        price: 15,
        image: orangesuit,
        alt: "roupa espacial laranja",
        type: "traje com capacete",

    }, {
        name: "Silver Suit",
        key: Math.random(),
        price: 10,
        image: silversuit,
        alt: "roupa espacial prata",
        type: "traje com capacete",

    },
    {
        name: "Vintage Suit",
        key: Math.random(),
        price: 20,
        image: oldsuit,
        alt: "roupa espacial antiga",
        type: "traje com capacete",

    },
    {
        name: "Full Suit",
        key: Math.random(),
        price: 10,
        image: bluesuit,
        alt: "roupa espacial com equipamento",
        type: "traje com capacete",

    }, {
        name: "Apollo A4-H",
        key: Math.random(),
        price: 12,
        image: apolloa4,
        alt: "traje Apollo A4-H",
        type: "sem capacete",

    },{
        name: "Apollo SPD-143",
        key: Math.random(),
        price: 16,
        image: apollospd,
        alt: "roupa espacial Apollo SPD-143",
        type: "sem capacete",

    },{
        name: "E.M.U - Lançamento",
        key: Math.random(),
        price: 5,
        image: emu,
        alt: "Traje Espacial último lançamento",
        type: "traje com capacete",

    },{
        name: "Gemini G3-C",
        key: Math.random(),
        price: 13,
        image: gemini,
        alt: "Traje Espacial Gemini",
        type: "sem capacete",

    },{
        name: "Mk I 'O'",
        key: Math.random(),
        price: 17,
        image: mkiio,
        alt: "Traje Espacial Mk I O",
        type: "sem capacete",

    },{
        name: "Helmet I",
        key: Math.random(),
        price: 7,
        image: helmet1,
        alt: "Helmet IO",
        type: "helmet",

    },{
        name: "Helmet II",
        key: Math.random(),
        price: 8,
        image: helmet2,
        alt: "Helmet II",
        type: "helmet",

    },{
        name: "Helmet III",
        key: Math.random(),
        price: 10,
        image: helmet3,
        alt: "Helmet III",
        type: "helmet",

    },{
        name: "Jaqueta Espacial",
        key: Math.random(),
        price: 8,
        image: balenWhite,
        alt: "jacketa espacial Balen White",
        type: "acessorio",

    },{
        name: "Pochete NASA",
        key: Math.random(),
        price: 5,
        image: pochete,
        alt: "Pochete NASA",
        type: "acessorio",

    },{
        name: "Mochila Espacial",
        key: Math.random(),
        price: 3,
        image: mochila,
        alt: "Mochila Espacial",
        type: "acessorio",
    },
    
    
]
export default product