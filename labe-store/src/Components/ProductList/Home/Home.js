import React, {useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import { DivHome, Select } from "./homeStyle";

export default function Home(){

    const [ordination, setOrdination] = useState("");

    const handleOrdination = (e) =>{
        setOrdination(e.target.value)
    };


    const product=[
        {
            id: 1,
            name: "Camiseta Universo",
            value: 99.90,
            imageUrl: <img src="https://images-ext-1.discordapp.net/external/KcaNSvRlvTp9HcKDBNgdD3Bq0UN9Bg9LXZXd0jqsUU4/https/img.elo7.com.br/product/original/3244BA4/camiseta-camisa-personalizada-espaco-universo-pintura-hd-5-desenho-rio.jpg?width=410&height=494"
            width={250}
            height={250}/>
        },
        {
            id: 2,
            name: "Camiseta Astronauta/Lua",
            value: 89.90,
            imageUrl: <img src="https://images-ext-1.discordapp.net/external/yUFtg5hmoAYPZQAmLmIZUP4We053lVyJjTTPTr8OGt4/https/http2.mlstatic.com/D_NQ_NP_662823-MLB46751821011_072021-W.jpg?width=498&height=494"
            width={250}
            height={250}/>
        },
        {
            id: 3,
            name: "Camiseta Astronauta Radical",
            value: 79.00,
            imageUrl: <img src="https://images-ext-2.discordapp.net/external/TVnqq7m1Ensg3YSPoNmTQcWaVwlc7dQaZEfqBdxKm-I/%3Fq%3Dtbn%3AANd9GcSvDYTNWFE640lqftmh4QyJA-oi4CxbCEvxKQogaiWR-UpYCx8QMeZAn-OiiLMx2mUPWQg%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images"
            width={250}
            height={250}/>
        },
        {
            id: 4,
            name: "Camiseta Astronauta/Balanço",
            value: 79.50,
            imageUrl: <img src="https://images-ext-2.discordapp.net/external/a3o_rn6ZJLSw1ck9eOjlBsHeE5sR0J6mlFAteknDuik/%3Fq%3Dtbn%3AANd9GcQzFWdWh56FVc5s6tSbY-CMt6v2Ks4vLySMqQ%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images"
            width={250}
            height={250}/>
        },
        {
            id: 5,
            name: "Camiseta Lua",
            value: 87.90,
            imageUrl: <img src="https://images-ext-2.discordapp.net/external/hmKEJKIu9jOnqKYlzMWGe-As2fm5UWb2V2ErzyOxfMk/https/cf.shopee.com.br/file/cf8e7689043dc97d90578edf1a901aed?width=494&height=494"
            width={250}
            height={250}/>
        },
        {
            id: 6,
            name: "Camiseta NASA",
            value: 79.90,
            imageUrl: <img src="https://images-ext-1.discordapp.net/external/hNhOps9fgXRFgEqU_iv-WfywCy96d_IU0Qgnk9RVDao/https/http2.mlstatic.com/D_NQ_NP_720532-MLB50062640861_052022-W.jpg?width=395&height=494"
            width={250}
            height={250}/>
        },
        {
            id: 7,
            name: "Camiseta Astronauta/Planetas",
            value: 89.90,
            imageUrl: <img src="https://images-ext-1.discordapp.net/external/aidBmgXcVgBT3Dnwsr0EafL6yUZFUg3wEg7orltHbMo/https/http2.mlstatic.com/D_NQ_NP_904129-MLB51949836656_102022-W.jpg?width=388&height=494"
            width={250}
            height={250}/>
        },
        {
            id: 8,
            name: "Camiseta Universo/Azul",
            value: 79.00,
            imageUrl: <img src="https://images-ext-2.discordapp.net/external/9oqZeHZ0XHiVWGe58TB2ozbpsBujrENK96dsmNEILDY/https/http2.mlstatic.com/D_NQ_NP_670592-MLB50944804485_072022-O.jpg?width=446&height=494"
            width={250}
            height={250}/>
            
        },
        {
            id: 9,
            name: "Camiseta Astronauta/Balão",
            value: 89.00,
            imageUrl: <img src="https://img.elo7.com.br/product/zoom/3269AD8/camiseta-camisa-astronauta-baloes-no-universo-arte-hd-6-promocao.jpg"
            width={250}
            height={250}/>
            
        }

        
    ]

    return(
        <div>
            <Select onChange={handleOrdination}
            value={ordination}>
                <option value="">
                    Ordem
                </option>
                <option value="crescente">
                    Crescente
                </option>
                <option value="decrescente">
                    Decrescente
                </option>
            </Select>
        <DivHome>            
            <ProductCard product={product[0]}/>
            <ProductCard product={product[1]}/>
            <ProductCard product={product[2]}/>
            <ProductCard product={product[3]}/>
            <ProductCard product={product[4]}/>
            <ProductCard product={product[5]}/>
            <ProductCard product={product[6]}/>
            <ProductCard product={product[7]}/>
            <ProductCard product={product[8]}/>
        </DivHome>        
        </div>
    )
}