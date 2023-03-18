import { FooterStyle } from "./FooterStyle"
import { useEffect, useState } from "react";

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

    return isFooterVisible ? <FooterStyle>Conteúdo criado por Miguel Alves</FooterStyle> : null;
};

