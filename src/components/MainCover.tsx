import logo from '../img/Cores fundo claro.png'
import fundo from '../img/fundo.png'

import './maincover.css'

export const MainCover = () => (
  <div className='background' style={{ backgroundImage: `url(${fundo})` }}>
    <img src={logo} alt='QueerIST logo' />
    <h3>Secção Autónoma da Associação dos Estudantes do Instituto Superior Técnico</h3>
  </div>
)
