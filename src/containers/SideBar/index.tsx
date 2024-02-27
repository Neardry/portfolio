import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SideBarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const SideBar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Bruno Portela</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        neardry
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SideBar
