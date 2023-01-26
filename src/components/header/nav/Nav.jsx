import { Navigation } from "./Style"
import { A } from "./Style"
import { Container } from "./Style"


export default function Nav(props) {
    return (
        <Container>
            <Navigation>
                {props.categories.map(item => (<A key={item.name} href="">{item.name}</A>))}
            </Navigation>
        </Container>
    )       
}