
import styled from 'styled-components'
export const Page = styled.div`
background: white;
width: 100%;
flex-flow: column wrap;
`

export const AsideLeft = styled.aside`
display: flex;
width: 25%;`


export const FormFilter = styled.form`
display: flex;
flex-flow: column wrap;
width: 80%;

`
export const MainCtn = styled.main`
flex-grow: 1;

display: flex;
flex-direction: row;
justify-content: flex-start;
height: 100%;
margin-top: 10vh;
padding: 2rem;
@media screen and (max-width: 720px){
    flex-flow: column wrap;
}
`

export const SectionCtn = styled.section`

display: flex;
flex-flow: row wrap;
justify-content: space-around;
width:80%;
height: 100%;
flex-grow: 1;

@media screen and (max-width: 720px){
    width: 100%;

    
}
`


export const InputSelect = styled.option`
height: 30px;
display: flex;
flex-flow: column wrap;
   width: 80%;
   height: 40px;
   justify-content: center;

margin-left: 10%;
   border-radius: 15px;
   align-self:center;
text-align: center;
   display: flex;
   font-size: 2rem;
`



export const ArticleBox = styled.article`
display: flex;
    flex-flow: column wrap;
    width: 33.5%;
    height: 100%;
    min-width: 375px;
    max-width: 400px;
    box-shadow: 0 8px 10px rgba(66,66,66, .5);
min-height: 505px;
    max-height: 550px;

    margin: 30px auto;
 
    border-radius: 25px;
    align-items: center;
    margin: 0px auto;
    padding: 2rem;
    margin: 10px auto;
    img{
        width: 90%;
        max-height: 250px;
        object-fit: cover;

    }
    `

export const AsideRight = styled.aside`
display: flex;
flex-flow: column wrap;
align-content: center;
width: 20%;
max-height: 100%;
padding: auto;

border-radius: 15px;
-webkit-border-radius: 15px;
-moz-border-radius: 15px;
-ms-border-radius: 15px;
-o-border-radius: 15px;

@media screen and (max-width: 720px){
    width: 100%;
}
`
export const Label = styled.label`
display: flex;
flex-flow: row wrap;
height: 59px;
background: white;
border: 2px solid gray;
border-radius: 15px;


`

export const SectionTitle = styled.h2`
display: flex;
flex-flow: row wrap;
width: 80%;
justify-content: center;
padding: 10px;
background: white;
border: 2px solid gray;
border-radius: 15px;
margin: 10px auto;
font-size: 2rem;
text-align: center;
`

export const FormContainer = styled.div`
width: 80%;
margin:30px auto;
justify-content: center;
text-align: center;
align-self: center;
`


export const  InputText = styled.input`
display: flex;
flex-flow: column wrap;
   width: 80%;
   height: 40px;
   justify-content: center;

margin-left: 10%;
   border-radius: 5px;
   align-self:center;
text-align: center;
   display: flex;
   font-size: 2rem;

 :active{
    background-color: gold;
   }

`



export const HeaderCtn = styled.header`
display: grid;
margin-left: 5%;
width: 90%;
height: 100%;
  min-height: 100%;
background-color: aliceblue;
grid-auto-rows: repeat(2 , 1fr);
grid-template-columns: 100% ;
border: 2px solid blue;
min-height: 40vh;
margin-top: 4rem;
`
export const HeaderComponent = styled.header`
display: flex;
margin-left: 5%;
width: 90%;
height: 100%;
  min-height: 100%;
background-color: black;
grid-auto-rows: repeat(2 , 1fr);
grid-template-columns: 100% ;
border: 2px solid blue;
min-height: 500px;
margin-top: 4rem;
`
export const NavButton = styled.button`
width: 100px;
height: 40px;
background: navy;
color: white;
align-content: center;
`


export const NavLogo = styled.img`
display: inline-block;
    width: 30%;
    height: 60px;
    align-self: flex-start;

`


export const NavBrand = styled.h1`
    font-size: 1rem;
    color: black;

    display: inline-block;

`

export const NavList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  height: 100%;
  background-color: rgb(10, 0, 32);
color: #48ff00;
  text-align: center;
  align-self: center;
  border-radius: 5px ;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  -webkit-border-radius: 25px ;
  -moz-border-radius: 25px ;
  -ms-border-radius: 25px ;
  -o-border-radius: 25px ;
  justify-content: space-around;
min-height: 7vh;
`


export const Box1 = styled.div`
  border: 2px solid red;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-around;
  text-align: center;
`

export const Box2 = styled.div`
  border: 2px solid red;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-around;
  text-align: center;
`

export const Box3 = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  background-color: #ffdc00;
  height: 100%;
  justify-content: center;
  align-self: flex-end;
`
export const Box4 = styled.div`
  border: 2px solid red;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-around;
  text-align: center;
`
export const Box5 = styled.div`
  border: 2px solid red;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-around;
  text-align: center;
`

export const CircleButton = styled.button`
  display: inline-block;
  width: 75px;
  height: 75px;
  border: 2px groove gold;
  border-radius: 75px;
  overflow: hidden;
`