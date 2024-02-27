import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import SideBar from './containers/SideBar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './Themes/TemaLight'
import temaDark from './Themes/Dark'
import { useState } from 'react'

function App() {
  const [usandoTemaDark, setUsandoTemaDark] = useState(false)

  function trocaTema() {
    setUsandoTemaDark(!usandoTemaDark)
  }
  return (
    <ThemeProvider theme={usandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
