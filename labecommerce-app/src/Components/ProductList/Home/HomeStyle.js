import styled from 'styled-components';

export const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    gap: 5px;
    padding: 16px;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
`


export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    margin-top: 20px;
`

export const Select = styled.select`
    width: 100px;
    margin: 0;
    padding: 2px;
    margin-left: 5px;
`