import styled from "styled-components";

export const FilterStyled = styled.div`



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





/* background-image: url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg" ),  url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg");
animation: fundoAnimado 160s linear infinite;
background-repeat: repeat-x, repeat-x repeat repeat; */




display: flex ;
flex-direction: column;
align-items: center;
background-color: rgba(10,23,55,0.5);
box-shadow:10px 10px 10px;
border-radius: 10px;
padding: 30px;
box-sizing: border-box;
border: thick double;
height: 850px;

h1{
    border-radius: 10px 20px 10px 20px;
    padding: 20px ;
    box-shadow:20px 20px 10px;
    background-image: radial-gradient(circle at 0% 0%, #c193fd 0, #9b77e9 50%, #725dd5 100%);
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}








.campoDeBusca{
  
  display: flex;
  border-radius: 20px;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  border: thick double ; 
  border-color: black ;
  

  margin: 30px;
  box-shadow: 10px 10px 10px 10px ;
  

  


}

.campoDeFiltro{
    
  border-radius: 20px;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  margin: 30px;
  box-shadow: 10px 10px 10px 10px ;
  border: thick double ; 
  border-color: black ;




}

button{
      border-radius:10px;
      padding:10px;
      cursor: pointer;
      border: thick double ; 
      box-shadow: 10px 10px 10px 10px ;
      
      
img{
   background-color: #222;
   
}


}

button:hover{

   padding: 15px ;

}
 



  

  






`