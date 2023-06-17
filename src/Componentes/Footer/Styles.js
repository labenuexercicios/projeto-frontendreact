import styled from 'styled-components'

export const Container = styled.footer`
    width: 100vw;
    height: 10vh;
    color: white;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Signika Negative', sans-serif;
`;

export const Name = styled.span`
    font-size: 2.3vh;
    height: 3vh;
`

export const Img = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0.5vh;
    gap: 1vw;
`
export const ImgGitHub = styled.a`
    display: flex;
    height: 1.5em;
`
export const ImgLinKedin = styled.a`
    display: flex;
    height: 1.5em;
`