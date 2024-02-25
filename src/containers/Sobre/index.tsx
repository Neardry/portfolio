import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem iParagrafosum dolor sit amet consectetur adipisicing elit. Aut odit
      officiis, voluptates doloribus facere sequi unde asperiores excepturi
      ducimus harum repellendus minus illo numquam pariatur optio! Quaerat
      blanditiis aperiam quibusdam!
    </Paragrafo>
    <GitHubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=neardry&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=neardry&layout=compact&langs_count=7&theme=dracula"
      />
    </GitHubSecao>
  </section>
)

export default Sobre
