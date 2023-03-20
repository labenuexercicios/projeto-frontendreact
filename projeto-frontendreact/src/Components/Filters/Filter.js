import { Input, FilterStyle, Paragraph } from "./FilterStyle"

export default function Filter(props) {

    return (
        <FilterStyle>
            <Paragraph>Valor mínimo:</Paragraph>
            <Input
                value={props.minFilter}
                onChange={(e) => props.setMinFilter(e.target.value)}
            />
            <Paragraph>Valor máximo:</Paragraph>
            <Input
                value={props.maxFilter}
                onChange={(e) => props.setMaxFilter(e.target.value)}
            />
        </FilterStyle>
    )

}