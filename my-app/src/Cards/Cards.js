import React from 'react';
import StyledCards from './styled.cards';
import { useState } from 'react';

const Cards = () => {

    const [cardRoupas, setCardRoupas]= useState[
        {
            id: 1,
            name: "Camiseta Gravidade ZERO Rick",
            value: 80,
            imageUrl: "https://img.ltwebstatic.com/images3_pi/2021/12/29/1640742102396d86c17b0f61d30b51d8f76654e893_thumbnail_405x552.webp"
        },
        {
            id: 2,
            name: "Camiseta Gravidade ZERO Papai Noel",
            value: 80,
            imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/09/14/166314835800c52882cf4cd97867b1f6cf34b3f76a_thumbnail_405x552.webp"
        },
        {
            id: 3,
            name: "Camiseta Gravidade ZERO Urso ET",
            value: 80,
            imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/04/02/16488933549942dacdc1e9815487d2d0cb09890e38_thumbnail_405x552.webp"
        },
        {
            id: 4,
            name: "Camiseta Gravidade ZERO Ovni",
            value: 80,
            imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/07/20/1658302867575e2bc843d21d7ce60cba126c79bc5d_thumbnail_405x552.webp"
        },
        {
            id: 5,
            name: "Camiseta Gravidade ZERO Astronauta na Lua",
            value: 80,
            imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/11/16522378338d69731b1e946590a092f85262467bc8_thumbnail_405x552.webp"
        },
        {
            id: 6,
            name: "Camiseta Gravidade ZERO ET",
            value: 80,
            imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/06/27/1656295059e981c94638cad2330966bac351b4fb9a_thumbnail_405x552.webp"
        },
        {
            id: 7,
            name: "Camiseta Gravidade ZERO Urso",
            value: 80,
            imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/10/17/1665993986e75716596569feda676b575502f577a3_thumbnail_405x552.webp"
        },
        {
            id: 8,
            name: "Moletom Gravidade ZERO Astronauta",
            value: 250,
            imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/07/27/1658897986005a0eb2d5b4101c407619a4dd8f0a0a_thumbnail_405x552.webp"
        },
        {
            id: 9,
            name: "Camiseta Gravidade ZERO Allien",
            value: 80,
            imageUrl: "https://img.ltwebstatic.com/images3_pi/2021/05/07/1620378296af7b679f0f756a0b21fe065cb3302c2f_thumbnail_405x552.webp",
        }
    ];

    const renderizaCard = cardRoupas.map(() => {
        return(
            
        );
    });

    return(
        <StyledCards>     
            <ul>{renderizaCard}</ul>

        </StyledCards>
    )
}

export default Cards;