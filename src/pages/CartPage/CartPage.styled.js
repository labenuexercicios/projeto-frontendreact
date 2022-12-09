import styled from "styled-components";

export const CartPageContainer = styled.main`
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    text-align: center;
    
    width: 100vw;
    height: 100%;

    .banner {
        width: 100vw;
    }

    h2:nth-child(1n) {
        margin: 7rem 0rem 2rem 0rem;
    }

    img:nth-child(n2) {
        height: 600px;
        width: 90%;
        
        margin: 10px;
        border-radius: 80px;

        -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
		-moz-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
		box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
    }

    section:nth-child(1n) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100vw;
    }
    
    /* Estilo do campo de busca */
    .search {
        &__container {
            padding-top: 64px;
        }
        
        &__title {
            font-size: 22px;
            font-weight: 900;
            text-align: center;
            color: #ff8b88;
        }
        
        &__input {
            width: 100%;
            padding: 12px 24px;

            background-color: transparent;
            transition: transform 250ms ease-in-out;
            font-size: 14px;
            line-height: 18px;
            
            color: #575756;
            background-color: transparent;

            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-size: 18px 18px;
            background-position: 95% center;
            border-radius: 50px;
            border: 1px solid #575756;
            transition: all 250ms ease-in-out;
            backface-visibility: hidden;
            transform-style: preserve-3d;
            
            &::placeholder {
                color: color(#575756 a(0.8));
                text-transform: uppercase;
                letter-spacing: 1.5px;
            }
            
            &:hover,
            &:focus {
                padding: 12px 0;
                outline: 0;
                border: 1px solid transparent;
                border-bottom: 1px solid #575756;
                border-radius: 0;
                background-position: 100% center;
            }
        }
    }
`;
