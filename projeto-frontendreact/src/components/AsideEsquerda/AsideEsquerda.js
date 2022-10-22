import {AsideEsquerdaStyled, Form, Input, BotaoPesquisa, SectionBusca, ImgLupa} from './styles'
import lupa from './midia-asideEsquerdo/lupa.jpg'

export const AsideEsquerda = (props) => {

    // function pegarTextoPesquisado(){
    //     const texto = props.string
    //     props.pesquisar(texto)
    //   }

    const onChangeString = (event) => {
        props.setString(event.target.value)
      }
    return(
        // style={{ backgroundImage: `url(${fundo})` }}>
        <Form>   
            <label>
                Pesquisar item por nome:
                <SectionBusca>
                    <ImgLupa src={lupa} alt="Buscar..." />
                    <Input type="text" placeholder="Pesquise um item..." value = {props.string}  onChange={onChangeString}/> 
                    <BotaoPesquisa  onClick={props.pesquisar(props.string)}>Buscar</BotaoPesquisa> 
                </SectionBusca>
            </label>
        </Form>
    )
}

