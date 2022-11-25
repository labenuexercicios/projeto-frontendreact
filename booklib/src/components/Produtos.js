import {ProdutosContainer} from "./StyledComponents"
import {ProdutosImg} from "./StyledComponents"

export function Produtos (){

    const livros = [
    {
        id: 1,
        nome: "É Assim que Acaba - Vol. 1",
        preco: 34.50,
        imagem: "https://m.media-amazon.com/images/I/513NSXK2nLL.jpg",
    }, 

    {
        id: 2,
        nome: "Box - Os Bridgertons",
        preco: 278.45,
        imagem: "https://m.media-amazon.com/images/I/51sS72KcvyS._SY346_.jpg",
    }, 

    {
        id: 3,
        nome: "A Garota do Lago",
        preco: 15.00,
        imagem: "https://m.media-amazon.com/images/I/516VOgxwg2L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    }, 

    {
        id: 4,
        nome: "A Jóia: Cidade Solitária - Vol. 1",
        preco: 23.00,
        imagem: "https://m.media-amazon.com/images/I/51YHz7P-FRL.jpg",
    }, 

 
    {
        id: 5,
        nome: "De Sangue e Cinzas - Vol. 1",
        preco: 33.20,
        imagem: "https://m.media-amazon.com/images/I/51HS0iOFxvL.jpg",
    }, 

  
    {
        id: 6,
        nome: "Os sete maridos de Evelyn Hugo",
        preco: 31.40,
        imagem: "https://m.media-amazon.com/images/I/41bWJGOl9oL.jpg",
    }, 

    {
        id: 7,
        nome: "Box - Harry Potter",
        preco: 189.90,
        imagem: "https://m.media-amazon.com/images/I/51MCEo6xgyL._SY346_.jpg",
    },  

    {
        id: 8,
        nome: "Raio de Sol",
        preco: 42.90,
        imagem: "https://m.media-amazon.com/images/I/518Bgs4gE+L._SY344_BO1,204,203,200_.jpg",
    }, 
    ]

    return (
                <ProdutosContainer>
        {
            livros.map((item, index) => (
                <div key = {index} >

                   
                    <img src = {item.imagem} alt = "Imagem" />
                    

                    <ul>
                        <li>{item.nome}</li> 
                        <li>R$ {item.preco}</li>
                    </ul>
                </div>
            ))
        }
        
            </ProdutosContainer>
    
    )
}

