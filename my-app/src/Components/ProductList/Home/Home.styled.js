import styled from 'styled-components'

export const HomeHeader = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5vw;

    h4, label {
      font-size: 1.3vw;
      display: flex;
      align-items: center;
      color: white;
      
    }

    select {
      height: 2vw;
      width: 10vw;
      border-radius: 4px;
      font-size: 1.3vw;
    }

    div {
      display: flex;
    }

    i {
      margin-right: 6px;
      color: white;
    }

`

export const HomeStyle = styled.div`
    
    padding: 1vw;
    display: grid;
    grid-template-rows: 2.5vw auto;
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

  background: rgb(148,255,255);
  background: linear-gradient(180deg, rgba(148,255,255,0.3) 0%, rgba(0,84,197,0.4) 100%);
  border-radius: 10px 0 0 0;
`

export const HomeGalery = styled.div`

  
    
`
