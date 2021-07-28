import { Content } from './styles'

import Logo from '../../assets/images/logo.png'

interface CardSignProps {
   submitForm: (e: any) => void;
   handleFirstButtonClick?: () => void;
   handleSecondButtonClick?: () => void;
   firstButton: string;
   secondButton: string;
   messageLogin: string;
   placeholderEmail: string;
   placeholderPassword: string;
   passwordState?: boolean;
   loginState?: boolean;
   passwordStateSignUp?: boolean;
   signUpState?: boolean;
}

export const CardSign = ({ handleFirstButtonClick, handleSecondButtonClick, firstButton, secondButton, messageLogin, placeholderEmail, placeholderPassword, submitForm, passwordState, loginState, signUpState, passwordStateSignUp }: CardSignProps) => {
   return (
      <Content>
         <img src={Logo} alt="logo" />
         <form onSubmit={submitForm}>
            <label htmlFor="email">E-mail</label>
            <input
               type="email"
               name="email"
               id="email"
               placeholder={placeholderEmail}
            />

            {loginState && <p style={{ color: 'red' }}>Conta inexistente</p>}

            {signUpState && <p style={{ color: 'red' }}>Erro ao validar dados</p>}

            <label htmlFor="password">Password</label>
            <input
               type="password"
               name="password"
               id="password"
               placeholder={placeholderPassword}
            />

            {passwordState && <p style={{ color: 'red' }}>Digite uma senha valida</p>}

            {passwordStateSignUp && <p style={{ color: 'red' }}>Digite uma senha valida</p>}

            <button type="submit" onClick={handleFirstButtonClick}>{firstButton}</button>
            <p>{messageLogin}</p>
            <button type="button" onClick={handleSecondButtonClick}>{secondButton}</button>
         </form>
      </Content>
   )
}