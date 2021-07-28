import React, { MouseEvent } from 'react'
import { Content } from './styles'
import { CardSign } from '../../components/CardSing'

import { useHistory } from 'react-router-dom'

import { api } from '../../services/api'
import { login, isAuthenticated } from '../../services/auth'

interface formDataProps {
   email: FormDataEntryValue | null
   password: FormDataEntryValue | null
}

export const SignIn = () => {
   const [formDataValues, setFormDataValues] = React.useState<formDataProps>({
      email: '',
      password: ''
   });
   const [errorPassword, setErrorPassword] = React.useState<boolean>(false)
   const [errorLogin, setErrorLogin] = React.useState<boolean>(false)
   const history = useHistory()

   React.useEffect(() => {
      if (isAuthenticated()) history.push('/home')
   }, [history])

   const handleSubmit = async (e: MouseEvent) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      setErrorLogin(false)
      setErrorPassword(false)

      if (!formData.get("password")) {
         //&& (formData.get("password")?.length > 8)
         setErrorPassword(true)
      } else {
         setErrorPassword(false)
         setFormDataValues({
            ...formDataValues,
            email: formData.get("email"),
            password: formData.get("password")
         });

         try {
            const response = await api.post('users/login', formDataValues)
            login(response.data.token)
            history.push('/home')
         } catch (e) {
            setErrorLogin(true)
            console.log(e)
         }
      }
   };

   const redirect = () => {
      history.push('/singup')
   }

   return (
      <Content>
         <CardSign
            submitForm={(e: MouseEvent) => handleSubmit(e)}
            firstButton="Entrar"
            secondButton="Cadastrar-se"
            messageLogin="Não, possui cadastro?"
            placeholderEmail="E-mail"
            placeholderPassword="Senha"
            handleSecondButtonClick={redirect}
            passwordState={errorPassword}
            loginState={errorLogin}
         />
      </Content>
   )
}