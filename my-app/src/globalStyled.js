
import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  :root {
    --primario:rgba(53, 58, 63, 1);
    --red-900: #9D1111;
    --secundario: #E5FF00;
    --secundarioOscuro: rgb(255,204,0);
    --branco: #FFF;
    --negro: #000;
      --white: #fff;
      --gray-100: #e1e1e6;
      --gray-300: #c4c4cc;
      --gray-400: #8d8d99;
      --gray-600: #323238;
      --gray-700: #29292e;
      --gray-800: #202024;
      --gray-900: #121214;
    
    --fuentePrincipal: 'Staatliches', cursive;
    --shadow1: 3px 1px 0.5px rgb(14,1,1);
}

  :root{
  position: relative;
  font-size: 16px;
}
*{
box-sizing: border-box;
padding: 0;
margin: 0;
list-style-type: none;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 2rem;
}

header{
flex-direction: column;

}

input{
    width: 50%;

}
.menu {
  background-color: rgb(0, 0, 0);
  display: flex;
  width: 90%;
top: 0;
  left: 0;
  height: 85px;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  border-bottom: 1px solid #fff;
  box-shadow: 5px 0 10px rgba(0,4 0, 0, .6);
  position: fixed;
  margin-left: 5%;
  margin-right: 5%;
  z-index: 11;
color: #e6e6e6;
font-size: 1.43rem;
}


 .menu__item {
  display: flex;
  list-style: none;
  margin-left: 30px;
}

.item {
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  margin: 0 15px;
}

.link-item {
  padding: 2px 11px;
  text-decoration: none;
  font-size: 18px;
  display: block;
  color: rgb(16, 6, 6);
  width: 50%;
  margin-right: 15px;
}

li.item:hover,
li.active:hover {
  background-color: rgb(217, 255, 1);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-style: solid;
  text-decoration-color: rgb(221, 255, 0);
  transition: .4s;
  -webkit-transition: .4s;
  -moz-transition: .4s;
  -ms-transition: .4s;
  -o-transition: .4s;
  -moz-text-decoration-style: solid;
  -moz-text-decoration-color: aquamarine;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  background-color: yellow;
}






.show {
  top: 70px;
  display: inline-flex;
  flex-direction: column;
  flex-flow: wrap;
  background-color: red;
  width: 100%;

}

.logo {
  width: 50px;
  height: 50px;
}

.logoBrand {
  height: 60px;
  margin-left: -10px;
}


@media screen and (max-width: 952px) {


  .logoBrand {
    padding-left: 85px;
  }


  .link-item {
    font-size: 16px;
    display: inline-block;
  }


}

@media screen and (max-width: 858px) {
  .menu {
    height: 65px;
  }

  .btn__menu {
    display: inline-flex;
    display: inline-flex;
  }

  .menu__item {
    position: fixed;
    width: 80%;
    height: 100%;
    max-height: calc(100% - 65px);
    background-color: rgb(143, 255, 207);
    top: 65px;
    text-align: start;
    transition: all .4s;
    -webkit-transition: all .4s;
    -moz-transition: all .4s;
    -ms-transition: all .4s;
    -o-transition: all .4s;
    display: none;
    margin-right: 40px;

  }

  .item {
    display: block;
    line-height: 30px 0 0 0;
    width: 100%;
    height: 80px;
    margin: 10px;
  }

  .menu__item .item :hover {
    background: none;
  }

  .menu__item .item .link-item {
    font-size: 20px;
    color: black;
    font-weight: bold;
  }

  .menu__item .item .link-item :hover {
    color: rgb(0, 18, 0);
    background-color: yellow;
  }

  .logoBrand {
    padding-left: 15px;
    height: 50px;

  }

}
main{
display: flex;
flex-flow: column wrap;
width: 95%;

margin-left: 2.5%;
height: 44vh;
align-items: center;
justify-content: center;
background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.wallpapersafari.com%2Fdesktop%2F1600%2F900%2F37%2F1%2Fejotvq.jpg&f=1&nofb=1&ipt=b41f38d1adfeab94cae2a1f82614a05fe7dad8194f6eeafc84302670dddb26d3&ipo=images");
background-size: cover;
background-position: top center;
color:  #e6e6e6;
font-size: 2.5rem;
text-align: center;
overflow: scroll
}
section{
display: flex;
flex-flow: row wrap;
width: 100%;
}

h1, 
.title__container {
display: flex;
flex-flow: row wrap;
width: 95%;
height: 100%;
max-height: 10vh;
align-items: center;
justify-content: center;
text-align: center;
font-size: 1.3rem;
margin: 30px auto;
margin-left:0;
justify-content: center;
}

/*
ul {

display: flex;
flex-flow: row wrap;
height: 100%;
width: 100%;
list-style-type: none;
align-self: center;
list-style-position: inside;
list-style-type: none;
justify-content: center;
}*/

/*
ul li {
display: flex;
flex-flow: column wrap;
height: 100%;
width: 100%;
max-width:  250px;

list-style-type: none;
justify-content: flex-start;
align-items: flex-start;
align-self: flex-start;
background-color: #e6e6e6;
justify-content: space-around;
margin: 10px 30px ;
padding-left: 2.5%;

border: 1.2px groove rgb(19, 1, 1);
border-radius: 15px;
}

ul li ul li{
width: 100%;
min-width: 200px;
margin-left: -10px;
align-self: flex-start;
background-color: aliceblue;
}*/

.card-container{
display: flex;
flex-flow: row wrap;

}

.card {

    margin: 10px 10px;
    padding: 1rem;
    border: 2px groove #0f0c0d;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 0;
  max-width: 300px;
max-height: 450px;
  object-fit: contain;
}

.colorStrong {
    color: #ff0086;
}


/* Flip Cards CSS */

.card-container {
    display: grid;
    perspective: 700px;
}

.card-flip {
    display: grid;
    grid-template: 1fr / 1fr;
    grid-template-areas: "frontAndBack";
    transform-style: preserve-3d;
    transition: all 0.7s ease;
}

.card-flip div {
    backface-visibility: hidden;
    transform-style: preserve-3d;
}

.front {
    grid-area: frontAndBack;
}

.back {
    grid-area: frontAndBack;
    transform: rotateY(-180deg);
        background: url('./../public//assets/img/bgcard.png');
}

.card-container:hover .card-flip {
    transform: rotateY(180deg);
}

.card-title {
    background-color: #bbbbbb;
    font-size: 1.6rem;
    vertical-align: middle;
    padding-left: 1rem;
    font-family: 'Noto Sans', sans-serif;
    font-weight: lighter;
}

.card-block {
    padding: 1rem;
    text-align: center;
    vertical-align: center;

}

.card-text {
    font-family: 'Noto Sans', sans-serif;
    font-weight: lighter;
    font-size: 1.3rem;
}

.btn-primary {
    background-color: #c3c3c3;
    border: 2px solid #bababa;
    border-radius: 15px;
    color: black;
}

.btn-primary:hover {
    background-color: #939393;
    border: 2px solid #000000;
    border-radius: 15px;
}

.card-header {
    background-color: #a4a2a3;
    color: rgb(25, 24, 24);
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}


/*footer*/
footer {
display: flex;
flex-flow: column wrap;
  width: 90%;
height: 100%;
font-size: 15px;
max-height: 6vh;
left: 0;
right:0;
position: relative;

align-items: center;
z-index: 11;
  background-color:rgb(238, 239, 238);
}

 footer ul {
display: flex;
flex-flow: row wrap;
width: 100%;
height: 100%;


background-color: rgb(0, 0, 0);
}

/* footer */

footer ul li {
  display: flex;
  flex-flow: column wrap;
width: 10%;
  height: 100%;
  font-size: 5px;
  background-color: rgb(238, 239, 238);
  justify-content: space-around;

}
footer ul li a{
  align-items: center;
  align-self: center;
  text-decoration: none;
  list-style-type: none;
  color: rgb(22, 27, 1);
  font-size: 1.44rem;
  background-color:rgb(238, 239, 238);
  border-radius: 15px;

max-width: 90px;
  justify-content: space-around;
}



.social-link :hover {
  color: #fb2e7d;
  font-weight: 900px;


}

/* snake game */
.rule01 {
  width: 100%;
  height: 1rem;
  margin: 30px;
  background-color: #ff3f75;
}

/* CARD FLIP */

.cardsPage{
  display: flex;

  flex-flow: row wrap;
  width: 90%;
  height: 100%;
  min-height: 100vh;
   margin: 10px auto;
  justify-content: space-around;
}
.textIndex {
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-style: italic;
}
div.card img{
  width: 100%;
  object-fit: cover;
  height:250px;
}
/*
.card {
    margin: 10px 10px;
    padding: 1rem;
    border: 2px groove #ff0086;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 0;
  width: 300px;
height: 450px;
  object-fit: contain;
}

.colorStrong {
    color: #ff0086;
}


/* Flip Cards CSS
.card-container {
    display: grid;
    perspective: 700px;
}

.card-flip {
    display: grid;
    grid-template: 1fr / 1fr;
    grid-template-areas: "frontAndBack";
    transform-style: preserve-3d;
    transition: all 0.7s ease;
}

.card-flip div {
    backface-visibility: hidden;
    transform-style: preserve-3d;
}

.front {
    grid-area: frontAndBack;
}

.back {
    grid-area: frontAndBack;
    transform: rotateY(-180deg);
}

.card-container:hover .card-flip {
    transform: rotateY(180deg);
}

.card-title {
    background-color: #FFC6E4;
    font-size: 1.6rem;
    vertical-align: middle;
    padding-left: 1rem;
    font-family: 'Noto Sans', sans-serif;
    font-weight: lighter;
}

.card-block {
    padding: 1rem;
    text-align: center;
    vertical-align: center;
}

.card-text {
    font-family: 'Noto Sans', sans-serif;
    font-weight: lighter;
    font-size: 1.3rem;
}

.btn-primary {
    background-color: #FFC6E4;
    border: 2px solid #FFC6E4;
    border-radius: 15px;
    color: black;
}

.btn-primary:hover {
    background-color: #ff0086;
    border: 2px solid #fc0889;
    border-radius: 15px;
}

.card-header {
    background-color: #ff0086;
    color: white;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}*/

`