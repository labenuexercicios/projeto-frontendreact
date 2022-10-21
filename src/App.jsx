import { Filtro } from './components/filtro/Filtro'
import {Produtos}  from './components/Produtos/Produtos'
import GlobalStyle from './globalStyle'
import {Article, Section} from './style'

function App() {

  return (
    <div>
      <GlobalStyle/>

      <Section>
        <Filtro/>

        <Article>
          <Produtos nome='produto 3' preco='R$ 30,00'/>
          <Produtos nome='produto3' preco='R$ 30,00'/>
          
        </Article>

        <Filtro/>
      </Section>
    </div>

  )
}

export default App
