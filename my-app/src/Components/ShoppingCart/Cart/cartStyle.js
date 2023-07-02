import styled from 'styled-components'

export const CartStyle = styled.div`
    h4 {
      font-size: 1.5vw;
      color: white;
      margin-left: 5px;
    }

    i {
      margin-right: 6px;
    }
    

    padding: 0.8vw;
    margin-left: 1vw;
    width: 21vw;
    background: rgb(133,248,63);
    background: linear-gradient(180deg, rgba(133,248,63,0.6) 0%, rgba(0,84,197,0.3) 100%);
    border-radius: 10px 0 0 0 ;
    
    overflow-y: scroll;

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #F0F0F0;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: lightgray;
}

`
export const Lista = styled.div`

    display: flex;
    flex-direction: column;

    h4 {
        font-size: 1.5vw;
        color: white;
    }
    h5 {
        font-size: 0.9vw;
    }
    
    
`

export const Button = styled.button`

    
    border-radius: 2.1vw;
    height: 2.1vw;
    width: 2.1vw;
        
    border: none;
    background-color: #83A3C9;
    color: #5E7796;
    

    :hover {
        background-color: #c70035;
        color: #63001b;
    }

    i {
      margin-right: 0;
    }

  
`
