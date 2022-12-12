import { HeroContainer, Heading } from "./style";
import iconManOnMoon from '../../assets/onmoon.svg'

function Hero(props) {
    return (
        <HeroContainer>
            <Heading>
                <div className="heading">
                    <h2>
                        <span>SpaceLand Toys</span>
                        <br />
                        <span>Brinquedos Temáticos</span>
                    </h2>
                </div>
                <div className="sub-heading">
                    <p>Para futuros astronautas e astrônomos, navegue em nossa</p>
                    <p>loja de brinquedos e produtos com tema espacial.</p>
                </div>
                <div className="search-input">
                    <input placeholder="Busque por brinquedos e produtos temáticos"
                     value={props.search}
                     onChange={(event) => props.setSearch(event.target.value)}/>
                </div>
            </Heading>
            <img src={iconManOnMoon} alt="Man on moon icon" />
        </HeroContainer>
    )
}

export default Hero;