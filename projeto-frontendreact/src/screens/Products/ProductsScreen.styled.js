import styled from "styled-components";

export const SideBarContainer = styled.div`
   .side-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 120px;
    background-color: #E6E6E6;
    border-radius: 8px;
    margin: 20px 50px;

}

input {
        text-align: center;
        padding: 8px;
        width: 99px;
        height: 21px;
        background: #E6E6E6;
        border: 1px solid #14b6b9;
        border-radius: 8px;
    
        ::-webkit-input-placeholder { 
            font-size: 12px;
            font-family: 'Cabin', sans-serif;
    }
}
    h3 {
        color:#757775;
    }
    
    select {
        font-size: 12px;
        font-family: 'Cabin', sans-serif;
        border: 1px solid #14b6b9;
        border-radius: 8px;
    }
`