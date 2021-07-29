import { Container } from './style'
import Logo from '../..//assets/images/logo.png'

import { useHistory } from 'react-router-dom'

import { logout } from '../../services/auth'

export const Header = () => {
   const history = useHistory()

   return (
      <Container>
         <img
            src={Logo}
            alt="logo"
            onClick={() => history.push('/home')}
         />
         <h1
            className="logout"
            onClick={() => {
               logout()
               window.location.reload()
            }
            }
         >
            Sair
         </h1>
      </Container>
   )
}