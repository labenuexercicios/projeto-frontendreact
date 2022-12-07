import styled from "styled-components";

export const StyledCards = styled.div`

@keyframes fundoAnimado {

     0%{
        background-position: 0 0, 0 0;
}

    50%{
        background-position: 50% 0, 50% 0;
}

    100%{
        background-position: 100% 0, 100% 0;
}
    
}





background-image: url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg" ),  url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg");
animation: fundoAnimado 100s linear infinite;
background-repeat: repeat-x, repeat-x repeat repeat;








display: flex;
flex-direction: column;
padding: 50px;
justify-content: center;
align-items: center;
margin: 0;

display: grid;
grid-template-columns:1fr 1fr 1fr;



.blocos{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap:wrap;
    margin: 20px;
    
    padding: 20px;
    font-family:Arial, Helvetica, sans-serif;
    font-size:20px;
    align-items: center;
    background: linear-gradient(90deg, rgba(28,4,106,1) 35%, rgba(59,59,59,1) 94%);
    border-radius: 10px;
    box-shadow: 20px 20px 10px grey;
    

    p{
        @import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&display=swap');
        font-size: 20px;
        font-family:'PT Serif', serif;
        color: white;
        
        /* background: linear-gradient(135deg, #8E43AD, #3398DB); */
        text-align: center;
    }

 button{

    background-color: black;
    color: white;
    font-family:'PT Serif', serif;
    border-radius:20px;
    padding: 15px;
    align-items: center;
    
    

 }
 button:hover{
    background-color: white;
    color: black;
    padding: 17px;
    cursor: pointer;
 }

 .imagem{

    width:94px; 
    height: 94px;


 }
}

`