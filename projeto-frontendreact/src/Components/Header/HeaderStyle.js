import styled from "styled-components";

export const HeaderStyle = styled.div`
    display: flex;
    height: 10vh;
    background-color: #040f14;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 400px) {
        height: 10vh;
    }

`

export const Input = styled.input`
    height: 1.5rem;
    width: 25rem;
    padding-left: 5px;
    margin: 30px;
    color: #e40d7c;
    border: 2px solid #8707ff;
    border-radius: 10px;
    padding: 10px 25px;
    background: transparent;


:active {
    box-shadow: 2px 2px 15px #8707ff inset;
}

@media screen and (max-width: 400px) {
    width: 7rem;
    margin: 0;
    }
`

export const Img = styled.img`
    object-fit: contain;
    cursor: pointer;
    
`

export const IconsHeader = styled.div`
    display: flex;
    gap: 10px;
    height: 100%;

`

export const Navbar = styled.nav`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

export const Quantity = styled.button`
    height: 15px;
    width: 15px;
    font-size: 12px;
    font-weight: 700;
    border-radius: 50%;
    background-color: #e40d7c;
    border: none;
    position: absolute;
    cursor: default;
    margin-left: 4.4rem;
    display: ${props => props.cartQuantity === 0 ? "none" : "flex"};
    justify-content: center;
    align-items: center;

    
`