import { HeaderContainer, InputHeader, Img } from "./headerStyle"


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
            <Img src="https://image.freepik.com/vetores-gratis/foguete-no-espaco-ilustracao-de-desenho-vetorial-de-nave-espacial-lancamento_97231-814.jpg"/>
        </HeaderContainer>
    )
}