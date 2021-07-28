import React, { MouseEvent } from 'react'
import { Content, CardSignInAttr } from './styles'

import { useHistory } from 'react-router-dom'

import { api } from '../../services/api'
import { login, isAuthenticated } from '../../services/auth'
import AppGlobalContext from '../../services/context'

interface formDataProps {
   email: string
   password: string
}

export const SignIn = () => {
   const { sucessSingUp } = React.useContext(AppGlobalContext)
   const [formDataValues, setFormDataValues] = React.useState<formDataProps>({
      email: '',
      password: ''
   });
   const [errorPassword, setErrorPassword] = React.useState(false)
   const [errorLogin, setErrorLogin] = React.useState(false)
   const history = useHistory()

   React.useEffect(() => {
      if (isAuthenticated()) history.push('/home')
   }, [history])

   const handleSubmit = async (e: MouseEvent) => {
      e.preventDefault();
      setErrorLogin(false)
      setErrorPassword(false)

      if (formDataValues.password.length < 8) {
         setErrorPassword(true)
         console.log('error')
      } else {
         setErrorPassword(false)
         console.log('login realizado com sucesso')

         try {
            const response = await api.post('users/login', formDataValues)
            login(response.data.token)
            history.push('/home')
         } catch (e) {
            setErrorLogin(true)
         }
      }
   };

   const redirect = () => {
      history.push('/singup')
   }

   return (
      <Content>
         <CardSignInAttr
            submitForm={(e: MouseEvent) => handleSubmit(e)}
            valueInputEmail={formDataValues.email}
            handleChangeInputEmail={(e) => setFormDataValues({ ...formDataValues, email: e.target.value })}
            valueInputPassword={formDataValues.password}
            handleChangeInputPassword={(e) => setFormDataValues({ ...formDataValues, password: e.target.value })}
            handleSecondButtonClick={redirect}
            passwordState={errorPassword}
            loginState={errorLogin}
            isAccountCreate={sucessSingUp}
         />
      </Content>
   )
}