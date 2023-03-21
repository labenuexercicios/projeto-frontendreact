import styled from "styled-components";

export const Category = styled.div`
height: 40px;
width: 100%;
background-color: white;

`
export const ListCategory = styled.ul`
display: flex;
align-items: center;
justify-content: center;

`
export const ListCategoryItem = styled.li`
list-style: none;
margin: 10px 50px;
`
export const LinkCategory = styled.a`
text-decoration: none;
color: #666666;
font-weight: 700;
font-size: 1.2em;

&:hover {
color: #4d4d4d;

}
`
export const Information = styled.div`
height: 60px;
width: 100%;
background-color: black;
display: flex;
justify-content: space-around;
align-items: center;
`
export const Information_desc = styled.p`
color: white;
font-size: 1.2em;
font-weight: 300;
text-align: center;
`
export const Information_desc_inf = styled.span`
font-size: 0.6em;
text-align: center;
`
