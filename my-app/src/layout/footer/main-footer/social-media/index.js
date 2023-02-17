import { List, Section, Title } from "./styled";

function SocialMedia() {
    return (
      <Section>
        <Title>Redes sociais</Title>
        <List>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/img/facebook.svg"}
                alt="logo facebook"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/img/instagram.svg"}
                alt="logo instagram"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/img/youtube.svg"}
                alt="logo youtube"
              />
            </a>
          </li>
        </List>
      </Section>
    );
  }
  
  export default SocialMedia;