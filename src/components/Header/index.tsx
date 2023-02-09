import { HeaderContainer } from './styles'
import { logoImg } from '../../assets'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoImg} alt='' />
    </HeaderContainer>
  )
}
