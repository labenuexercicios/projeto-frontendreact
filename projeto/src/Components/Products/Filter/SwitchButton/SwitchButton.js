import { useState } from "react";
import { Button, Input, SwitchContainer } from "./SwithB-Styled";

export const SwitchButton = (props) =>{
const [checkboxValue, setCheckbox] = useState()

props.filter(checkboxValue)


return (
<SwitchContainer>
    <Input type = "checkbox" id={props.Input} value={checkboxValue} onChange={(e)=>setCheckbox(e.target.checked)} />
    <Button></Button>
</SwitchContainer>
)}