import styled from 'styled-components'

export const MyFooter = styled.footer`
    background: #6752ff;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	font: bold 16px sans-serif;
	text-align: left;
	padding: 50px 60px 40px;
    margin-top: 40px;
	/* overflow: hidden; */

	>div{
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items:center;
		gap:10px;
	}
`
