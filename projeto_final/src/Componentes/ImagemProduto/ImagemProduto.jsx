import { ImagemContainer } from "./Styled";


export default function ImagemProduto({img, alt}){
    return(
        <ImagemContainer>
            <img src={require(`../../imagens/${img}`)} alt={alt} />
        </ImagemContainer>
    )
}