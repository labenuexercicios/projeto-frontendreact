import styled from 'styled-components'


export const MainContainer = styled.main`
display: flex;
margin-top: 75px;
flex-direction: column;
width: 81%;
// background: rgb(28, 56, 70);

.produtos{
    display: flex;
    justify-content: center;
    font-family: 'Stick No Bills', sans-serif; 
    color: rgb(139, 164, 176);
    font-size: 30px;
    gap: 30px;
    margin-left: 165px;
}
.filtro{
  position: Fixed;
  font-family: 'Stick No Bills', sans-serif; 
    color: rgb(139, 164, 176);
    font-size: 30px;
    margin-left: 90px;

}

`

export const Produtos = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: 245px;
  margin-top: 20px;
  gap: 20px;
  
`