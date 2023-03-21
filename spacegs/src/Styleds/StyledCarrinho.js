import styled from "styled-components";

export const StyledCarrinho = styled.div`

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
padding: 2vh;








margin: 0;





.blocos{
    display: flex;
    
    
    justify-content: center;
    flex-direction: column;
    flex-wrap:wrap;
    margin: 0px;
    min-height:44vh;
    width: 25vh;
    
    padding: 30px;
    font-family:Arial, Helvetica, sans-serif;
    font-size:20px;
    align-items: center;
    background: rgb(23,22,22);
    background: linear-gradient(0deg, rgba(23,22,22,1) 2%, rgba(120,49,177,1) 100%);   
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