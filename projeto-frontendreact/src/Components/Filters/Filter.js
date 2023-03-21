import { Input, FilterStyle, Paragraph, FilterImage } from "./FilterStyle"
import filter from "../../images/filter.png"

export default function Filter(props) {

    return (
        <FilterStyle>
            <nav className="nav">

                <FilterImage src={filter} className="sm-header"/>

                <ul className="nav-list">
                    <li className="nav-item">
                        <Paragraph>Valor mínimo:</Paragraph>
                        <Input
                            value={props.minFilter}
                            onChange={(e) => props.setMinFilter(e.target.value)}
                        />
                    </li>
                    <li className="nav-item">
                        <Paragraph>Valor máximo:</Paragraph>
                        <Input
                            value={props.maxFilter}
                            onChange={(e) => props.setMaxFilter(e.target.value)}
                        />
                    </li>
                </ul>
            </nav>
        </FilterStyle>
    )

}