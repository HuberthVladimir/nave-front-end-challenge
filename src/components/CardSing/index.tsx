import { Content } from './styles'
import Logo from '../../assets/images/logo.png'

interface CardSignProps {
   submitForm: (e: any) => void;
   handleFirstButtonClick?: () => void;
   handleSecondButtonClick?: () => void;

   handleChangeInputEmail: (e: any) => void;
   valueInputEmail: string;

   handleChangeInputPassword: (e: any) => void;
   valueInputPassword: string;

   firstButton: string;
   secondButton: string;
   messageLogin: string;
   placeholderEmail: string;
   placeholderPassword: string;
   passwordState?: boolean;
   loginState?: boolean;
   passwordStateSignUp?: boolean;
   signUpState?: boolean;
   isAccountCreate?: boolean;
}

export const CardSign = ({
   handleFirstButtonClick,
   handleSecondButtonClick,
   submitForm,
   valueInputEmail,
   handleChangeInputEmail,
   valueInputPassword,
   handleChangeInputPassword,
   firstButton,
   secondButton,
   messageLogin,
   placeholderEmail,
   placeholderPassword,
   passwordState,
   loginState,
   signUpState,
   passwordStateSignUp,
   isAccountCreate
}: CardSignProps) => {

   return (
      <Content>
         <img src={Logo} alt="logo" />
         <form onSubmit={submitForm}>
            {isAccountCreate && <p style={{ color: 'green', marginBottom: '1rem' }}>Conta Criada com Sucesso</p>}
            <label htmlFor="email">E-mail</label>
            <input
               type="email"
               name="email"
               id="email"
               value={valueInputEmail}
               onChange={handleChangeInputEmail}
               placeholder={placeholderEmail}
            />

            {loginState && <p style={{ color: 'red' }}>Conta inexistente</p>}

            {signUpState && <p style={{ color: 'red' }}>Erro ao validar dados</p>}

            <label htmlFor="password">Password</label>
            <input
               type="password"
               name="password"
               id="password"
               value={valueInputPassword}
               onChange={handleChangeInputPassword}
               placeholder={placeholderPassword}
            />

            {passwordState && <p style={{ color: 'red' }}>Digite uma senha valida</p>}

            {passwordStateSignUp && <p style={{ color: 'red' }}>A senha precisa ter 8 digitos</p>}

            <button type="submit" onClick={handleFirstButtonClick}>{firstButton}</button>
            <p>{messageLogin}</p>
            <button type="button" onClick={handleSecondButtonClick}>{secondButton}</button>
         </form>
      </Content>
   )
}