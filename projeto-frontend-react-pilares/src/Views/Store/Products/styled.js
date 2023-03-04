
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
margin-top:  5vh;
padding: 2rem;
@media screen and (max-width: 720px){
    flex-flow: column wrap;
}
`

export const SectionCtn = styled.section`

display: flex;
flex-flow: row wrap;
justify-content: center;
width:80%;
height: 100%;
flex-grow: 1;

@media screen and (max-width: 720px){
  display: column wrap;
    width: 80%;

    
}
`




export const ArticleBox = styled.article`
display: flex;
margin: 10px auto;
    padding: 1rem;
    border: 2px groove #ff0086;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 0;
  max-width: 270px;
max-height: 650px;
  object-fit: contain;
    margin: 10px auto;
    img{
        width: 90%;
        max-height: 250px;
        object-fit: cover;

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
flex-flow: column wrap;
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