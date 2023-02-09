import React from 'react'
// import "./Home.css"
import { Card, Image, Button, Div } from './Style'

export default function Home({Data, addPlusItem}) {
  return (
    // aqui vai renderizar os cards //
    <Div>
            <Card>
                <h3>{Data.name}</h3>
                <Image src={Data.imageUrl} alt={Data.name} className="image" />
                <h4>{Data.id}</h4>
                <p>{Data.distance}</p> 
                <p>{Data.value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}</p> 
                  
                <Button onClick={()=> addPlusItem(Data)}>Comprar</Button>
            </Card>
                 
        
    </Div>
  )
}
