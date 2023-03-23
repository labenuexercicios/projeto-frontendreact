import { Input, FilterStyle, Paragraph, FilterImage } from "./FilterStyle"
import filter from "../../Images/filter.png"

export default function Filter(props) {

    return (
        <FilterStyle>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Paragraph>Valor mínimo:</Paragraph>
                        <Input
                            type={"number"}
                            min={0}
                            value={props.minFilter}
                            onChange={(e) => props.setMinFilter(e.target.value)}
                        />
                    </li>
                    <li>
                        <FilterImage src={filter} className="sm-header" />
                    </li>
                    <li className="nav-item">
                        <Paragraph>Valor máximo:</Paragraph>
                        <Input
                            type={"number"}
                            min={0}
                            value={props.maxFilter}
                            onChange={(e) => props.setMaxFilter(e.target.value)}
                        />
                    </li>
                </ul>
            </nav>
        </FilterStyle>
    )

}