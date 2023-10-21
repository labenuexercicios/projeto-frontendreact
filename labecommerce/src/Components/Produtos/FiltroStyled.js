import styled from 'styled-components'

export const StyledFiltro = styled.div`
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr 1fr 1fr ;
    grid-gap: 1px;
    padding: 2% 0;
    font-family: 'Mina', sans-serif;
    align-items: center;
    justify-items: center;


    .busca{
        appearance: none;
        border: solid 2px #37306B;
        outline: none;
        border-bottom: .2em solid #37306B;
        background: rgba(#66347F, .2);
        border-radius: 2em;
        padding: .4em 1rem;
        color: #66347F;
        width: 30%;       
        font-family: 'Mina', sans-serif;
    }
    .valor{
        appearance: none;
        border: solid 2px #37306B;
        outline: none;
        border-bottom: .2em solid #37306B;
        background: rgba(#66347F, .2);
        border-radius: 2em;
        padding: .2em 1rem;
        color: #66347F;
        width: 10%;    
        font-family: 'Mina', sans-serif;
    }
    .textoOrdem{
    color: #37306B;
    text-shadow:#66347F;
    padding: 0;
    }
    .ordem{
        appearance: none;
        border: solid 2px #37306B;
        outline: none;
        border-bottom: .2em solid #37306B;
        background: rgba(#66347F, .2);
        border-radius: 2em;
        padding: .2em 1rem;
        color: #66347F;
        width: 20%;    
        font-family: 'Mina', sans-serif;
    }
    button {
    appearance: none;
	border: .2em solid #37306B;
	background: transparent;
	padding: .85em 1.5em;
	color: #66347F;
	border-radius: 2em;
	transition: 1s;
	&:hover, &:focus, &:active {
		background: #37306B;
		color: #fff;
	}
}
    
`