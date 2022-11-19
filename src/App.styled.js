import styled from "styled-components"

export const Container = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row-reverse;
width:100vw;
.main-container{
    
  width:${(props)=>(
    props.size && props.screen ===1 ? "85%":"100vw"
    )}
   

}


`
