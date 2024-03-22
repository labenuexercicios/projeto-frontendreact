import { FooterDiv } from "./FooterStyles";
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <FooterDiv>
            <p> This store was developed by<Link to="https://raissagomes.com/"> @Raissa Gomes </Link> </p>
        </FooterDiv>
    )

}

export default Footer;