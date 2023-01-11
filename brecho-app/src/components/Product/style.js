import styled from 'styled-components'

export const Container = styled.div`
`
export const CardContainer = styled.div`
/* border: 10px solid teal; */
background-color:  #f6f6f6;
border-radius: 10px;
padding: 20px;
height: auto;
width: 20vw;
text-align: center;
margin-bottom: 70px;
`
export const Image = styled.img`
width: 200px;
height: 250px;
`
export const Info = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const Title = styled.h2`
font-size: 16px;
color: black;
margin-bottom: 20px;
`
export const Button = styled.button`
border: none;
border-radius: 10px;
padding: 10px 20px;
background-color: teal;
color: white;
cursor: pointer;
font-weight: 600;
transition: 0.5s;

&:hover{
    padding: 15px 25px;
}
`
export const Price = styled.span`
font-size: 14px;
padding-bottom: 10px;
`

