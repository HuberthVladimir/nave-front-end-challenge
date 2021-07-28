import styled from 'styled-components'
import { CardSign } from '../../components/CardSing'

export const Content = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const CardSignInAttr = styled(CardSign).attrs({
   firstButton: "Entrar",
   secondButton: "Cadastrar-se",
   messageLogin: "Não, possui cadastro?",
   placeholderEmail: "E-mail",
   placeholderPassword: "Senha",
})`
`