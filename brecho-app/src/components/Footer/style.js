import styled from "styled-components";


export const Delivery = styled.section `
width: 100%;
height: auto;
background-color: #ededed;

`
export const Information = styled.div `
display: flex;
justify-content: center;

`
export const List = styled.ul`
margin: 2em 3em;
`
export const List_li = styled.li`
margin-top: 0.7em;
font-size: 0.8em;
color: #4d4d4d;
list-style: none;

&:hover{
    font-weight: 700;
}
`
export const List_link = styled.a`
cursor: pointer;
`

export const List_link_button = styled.a`
border: 1px solid #4d4d4d;
font-size: 0.8em;
font-weight: 700;
padding: 1em 0.9em;
cursor: pointer;

&:hover{
    background: #4d4d4d;
    color: white;
    font-weight: 700;
}
`
export const List_li_button = styled.li`
margin-top: 1.5em;
list-style: none;
`
export const Network = styled.div`
margin-top: 2em;
`
export const Network_link = styled.a`
margin-left: 1em;
cursor: pointer;
`
export const Graph = styled.p `
margin-right: 4em;
margin-left: 0.7em;
`
export const ContainerFooter = styled.div `
display: flex;
justify-content: center;
align-items: center;
padding: 1em 0;
font-size: 14px;
`
export const Payment_card = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const Payment = styled.div`
margin-left: 1em;
`
export const Payment_img = styled.img`
margin-left: 0.7em;
`

export const Payment_desc = styled.div`
margin:0 0 0 1em;
`
export const Payment_desc_p = styled.p`
font-size: 0.7em;
`
export const Footer_desc = styled.div`
width: 100%;
height: 60px;
background-color: teal;
margin-top: 1em;
`