
import styled from 'styled-components'
export const Page = styled.div`
background: white;
width: 100%;
flex-flow: column wrap;
`

export const AsideLeft = styled.aside`
display: flex;
width: 25%;`

export const HeaderCtn = styled.div`
display: grid;
margin-left: 5%;
width: 90%;
height: 100%;
height: 120px;
grid-template-rows: 60px 60px ;

border: 2px solid blue;
`

export const HeaderCtn2 = styled.div`
display: grid;
width: 100%;
height: 100%;
  min-height: 100%;
background-color: aliceblue;

border: 2px solid blue;
`
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
margin-top: 10x;
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
    min-width: 325px;
    max-width: 350px;
    height: 100%;
    min-height: 480px;
    box-shadow: 0 8px 10px rgba(66,66,66, .5);
    background: #fff;
    padding: 25px 25px 0px 25px;
    box-shadow: 3px 0 62px rgb(13 3 3 / 20%);

    margin: 60px auto;
 padding: 1rem;
    border-radius: 25px;
    align-items: space-around;
    img{
        width: 300px;
       max-height: 250px;
        object-fit: contain;

    }
    `

export const AsideRight = styled.aside`
display: flex;
flex-flow: column wrap;
align-content: center;
width: 22%;
max-height: 410px;
padding: auto;
border: 2px solid black;
border-radius: 15px;
-webkit-border-radius: 15px;
-moz-border-radius: 15px;
-ms-border-radius: 15px;
-o-border-radius: 15px;
margin: 30px auto;
margin-top: 100px;
@media screen and (max-width: 720px){
    width: 100%;
}
`
export const Label = styled.label`
display: flex;
flex-flow: row wrap;
height: 100%;
background: white;
border: 2px solid gray;
border-radius: 15px;


`

export const SectionTitle = styled.h2`
display: flex;
flex-flow: row wrap;
width: 90%;
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
width: 100%;
margin:30px auto;
justify-content: center;
text-align: center;
align-self: center;
`


export const  InputText = styled.input`
display: flex;
flex-flow: column wrap;
   width: 50%;
   height: 30px;
   justify-content: center;

margin-left: 10%;
   border-radius: 5px;
   align-self:center;
text-align: center;
   display: flex;
   font-size: 1rem;

 :active{
    background-color: gold;
   }

`

export const  InputNumber = styled.input`
display: flex;
flex-flow: column wrap;
   width: 60%;
   height: 30px;
   justify-content: center;

margin-left: 10%;
   border-radius: 5px;
   align-self:center;
text-align: center;
   display: flex;
   font-size: 1rem;

 :active{
    background-color: gold;
   }

`
export const CtnType = styled.div`
width: 90%;
height: 100%;
max-width: 300px;
text-align: center;
`
export const Div50 = styled.div`
width: 40%;
max-width: 400px;
min-height: 10vh;
max-height: 40vh;
overflow-y: auto;
margin: 10px auto;
background: #FFFFFF;

box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
border-radius: 16px;



`



export const DivCtn = styled.div`

display: flex;
width: 100%;
height: 100%;
font-family: "Raleway", sans-serif !important;
min-height: 72vh;
justify-content: space-around;
align-items: space-around;
background: rgb(255, 157, 9);


`
export const DivRow = styled.div`
display: flex;
flex-flow: row wrap;
    background-color: #dedede;
    height: 100%;
    width: 100%;

`
export const DivModal  = styled.div`
position: sticky;
left: 0;
right: 0;
top: 0vh;
padding: 1rem;
overflow: auto;
display: ${({modalDisplay})=>(modalDisplay === 0) ? "none" : "flex"};
background: navy;
flex-flow: row wrap;
border-radius: var(--roundedMedium);



`
export const ButtonCard1 = styled.button`
display: flex;
width: 70%;  
min-width: 80px;
max-width: 110px;

`

export const Small = styled.span`
display: block;
font-size: var(--small);
text-align: center;

`

export const TableRow = styled.tr`
background: #FFFFFF;
box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.15);
border: 2px solid #efefef;
border-radius: 10px;

text-align:center;

`


export const DivTotal = styled.div`
align-content: space-around;
height: 100%;
padding: 2rem`

export const DivOffers = styled.div`
width: 80%;
height: 100%;
min-height: 50vh;
max-height: 67vh;
`