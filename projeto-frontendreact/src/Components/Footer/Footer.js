import { FooterStyle, IconDiv } from "./FooterStyle"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";



export default function Footer() {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.offsetHeight;
            const scrollHeight = window.pageYOffset;
            if (windowHeight + scrollHeight >= fullHeight) {
                setIsFooterVisible(true);
            } else {
                setIsFooterVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return isFooterVisible ? <FooterStyle>
        Conteúdo criado por Miguel Alves

        <IconDiv>
        <a href="https://www.linkedin.com/in/miguelbitz/" target={"blank"}>
        <FontAwesomeIcon beat size="2xl" icon={faLinkedin} style={{ color: "#ffffff" }} />
        </a>

        <a href="https://github.com/miguelbitz" target={"blank"}>
        <FontAwesomeIcon beat size="2xl" icon={faGithub} style={{ color: "#ffffff" }} />
        </a>
        </IconDiv>
    </FooterStyle> : null;


};

