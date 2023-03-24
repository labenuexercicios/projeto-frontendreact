import { HeaderContainer, InputHeader } from "./headerStyle"


export default function Header ({ search, setSearch }){
    
    const handleSearch = (e) => {
        setSearch(e.target.value)
    };
    console.log(handleSearch)
    
    return(
        <HeaderContainer>
            <h1>LabeStore</h1>
            <InputHeader 
            placeholder="    O que você procura?"
            type="text"
            value={search}
            onChange={handleSearch}/>
        </HeaderContainer>
    )
}