import styled from 'styled-components'
import { CardSign } from '../../components/CardSing'

export const Content = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const CardSignOutAttr = styled(CardSign).attrs({
   firstButton: "Cadastrar-se",
   secondButton: "Fazer login",
   messageLogin: "Já, possui cadastro?",
   placeholderEmail: "Cadastre seu E-mail",
   placeholderPassword: "Cadastre sua senha",
})`
`