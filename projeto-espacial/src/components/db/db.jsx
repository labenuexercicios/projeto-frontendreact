import Produto1 from "../Utils/Produto1.png"
import Produto2 from "../Utils/Produto2.png"
import Produto3 from "../Utils/Produto3.png"
import Produto4 from "../Utils/Produto4.png"
import Produto5 from "../Utils/Produto5.png"
import Produto6 from "../Utils/Produto6.png"
import Produto7 from "../Utils/Produto7.png"
import Produto8 from "../Utils/Produto8.png"
import Produto9 from "../Utils/Produto9.png"
import Produto10 from "../Utils/Produto10.png"
import Produto11 from "../Utils/Produto11.png"
import Produto12 from "../Utils/Produto12.png"
import Produto13 from "../Utils/Produto13.png"
import Produto14 from "../Utils/Produto14.png"
import Produto15 from "../Utils/Produto15.png"
import Produto16 from "../Utils/Produto16.png"
import Produto17 from "../Utils/Produto17.png"
import Produto18 from "../Utils/Produto18.png"
import Produto19 from "../Utils/Produto19.jpg"


const db = [
    {
        name: "Darth Vader",
        id: 1,
        category: "Bonecos",
        price: 396.00,
        priceDesconconto: 480.00 ,
        stoke: 10,
        description: "Darth Vader Posição Prestigio.",
        image: Produto1
    
    },
    {
        name: "The Mandalorian",
        id: 2,
        category: "Bonecos",
        price: 450.500,
        priceDesconconto: 500.00 ,
        stoke: 10,
        description: "The Mandalorian, Figura de 24 cm - Oly",
        image:Produto2
    },
    {
        name: "Luke Skywalker",
        id: 3,
        category: "Bonecos",
        price: 450.90,
        priceDesconconto: 500.90 ,
        stoke: 10,
        description: "Figura Star Wars Luke Skywalker - Com Acessórios.",
        image:Produto3
    },
    {
        name: "Atiradora Galatica",
        id: 4,
        category: "Bonecos",
        price: 364.90,
        priceDesconconto: 474.90 ,
        stoke: 10,
        description: "Star wars Collection Atiradora Galatica",
        image:Produto4
        
    },
    {
        name: "Baby Yoda 28 Cm Star Wars",
        id: 5,
        category: "Bonecos",
        price: 264.90,
        priceDesconconto: 374.90 ,
        stoke: 10,
        description: "Boneco - Baby Yoda The Child - Star Wars MandalorianO boneco não mexe os olhos.",
        image:Produto5
    },
    {
        name: "The Mandalorian Posição de Combate",
        id: 6,
        category: "Bonecos",
        price: 364.90,
        priceDesconconto: 474.90 ,
        stoke: 10,
        description: "The Mandalorian Posição de Combate Figura de 24 cm.",
        image:Produto6
    },
    {
        name: "Ahsoka Tano (Corvus) ",
        id: 7,
        category: "Bonecos",
        price: 365.90,
        priceDesconconto: 474.90 ,
        stoke: 10,
        description: "Boneco Star Wars The Vintage Collection The Mandalorian, Figura 9,5 cm - Ahsoka Tano (Corvus)",
        image:Produto7
    },
    {
        name: " Darth Vader Desafiando",
        id: 8,
        category: "Bonecos",
        price: 464.90,
        priceDesconconto: 574.90 ,
        stoke: 10,
        description: "Boneco Star Wars Box The Black Series ",
        image:Produto8
    },
    {
        name: " Luke Skywalker Star Wars Black",
        id: 9,
        category: "Bonecos",
        price: 336.90,
        priceDesconconto: 446.90 ,
        stoke: 10,
        description: "Boneco Luke Skywalker Star Wars Black Series 27,9cm com Acessórios",
        image:Produto9
    },
    {
        name: "Chewbacca",
        id: 10,
        category: "Bonecos",
        price: 336.90,
        priceDesconconto: 446.90 ,
        stoke: 10,
        description: "Boneco Star Wars Uma Nova Esperança The Black Series Archive, Figura 15 cm - Chewbacca",
        image:Produto10
    },
    {
        name: "Transporte Inquisidor Scythe",
        id: 11,
        category: "Naves",
        price: 844.90,
        priceDesconconto: 954.90 ,
        stoke: 10,
        description: "Transporte Inquisidor Scythe - Lego Star Wars",
        image:Produto11
    },
    {
        name: "The Mandalorian & Grogu",
        id: 12,
        category: "Bonecos",
        price: 444.90,
        priceDesconconto: 554.90 ,
        stoke: 10,
        description: "STAR WARS Figuras Eletrônicas Galactic Action - The Mandalorian & Grogu Interativos 30 cm",
        image:Produto12
    },
    {
        name: "Baby Yoda Grogu Com Movimentos",
        id: 13,
        category: "Bonecos",
        price: 444.90,
        priceDesconconto: 554.90 ,
        stoke: 10,
        description: "Baby Yoda Grogu Com Movimentos Realistas Star Wars.",
        image:Produto13
    },
    {
        name: "Lego Star Wars Imperial Tie Fighter",
        id: 14,
        category: "Naves",
        price: 744.90,
        priceDesconconto: 854.90 ,
        stoke: 10,
        description: "Espetacular versão em peças lego do Imperial tie Fighter.",
        image:Produto14
    },
    {
        name: "Lego - TIE Bomber - Star Wars",
        id: 15,
        category: "Naves",
        price: 689.90,
        priceDesconconto: 708.89 ,
        stoke: 10,
        description: "Os fãs de Star Wars: O Império Contra-Ataca podem embarcar em missões Imperiais para derrotar a Aliança Rebelde com esta nave estelar construída com peças LEGO® ",
        image:Produto15
    },
    {
        name: " Luke Skywalker Star Wars",
        id: 16,
        category: "Bonecos",
        price: 328.50,
        priceDesconconto: 410.50 ,
        stoke: 10,
        description: "Boneco Luke Skywalker Star Wars Black Series 27,9cm com Acessórios",
        image:Produto16
    },
    {
        name: "Star Wars - O Starfighter™ N-1 do Mandaloriano",
        id: 17,
        category: "Naves",
        price: 536.90,
        priceDesconconto: 646.90 ,
        stoke: 10,
        description: "Tem cockpit para uma minifigura, espaço de passageiro para Grogu, compartimento de carga, um disparador acionado por mola e detalhes realistas.",
        image:Produto17
    },
    {
        name: "Han Solo",
        id: 18,
        category: "Bonecos",
        price: 286.90,
        priceDesconconto: 388.90 ,
        stoke: 10,
        description: "Star Wars Boneco Han Solo O Despertar Da Força Black Series.",
        image:Produto18
    },
    {
        name: "LEGO Capacete do Mandaloriano",
        id: 18,
        category: "Capacete",
        price: 419.90,
        priceDesconconto: 519.90 ,
        stoke: 10,
        description: "LEGO Capacete do Mandaloriano, 584 Peças.",
        image:Produto19
    },
    ]
    export default db;