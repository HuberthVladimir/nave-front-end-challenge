import React from 'react'
import { Content, CardSignOutAttr } from './styles'
import { useHistory } from 'react-router-dom'

import AppGlobalContext from '../../services/context'
import { api } from '../../services/api'

interface formDataProps {
   email: string
   password: string
}

export const SignUp = () => {
   const { setSucessSignUp } = React.useContext(AppGlobalContext)
   const [formDataValues, setFormDataValues] = React.useState<formDataProps>({
      email: '',
      password: ''
   });
   const [errorPasswordSignUp, setErrorPasswordSignUp] = React.useState(false)
   const [errorSignUp, setErrorSignUp] = React.useState(false)

   const history = useHistory()

   const handleSubmit = async (e: MouseEvent) => {
      e.preventDefault();
      setErrorPasswordSignUp(false)
      setErrorSignUp(false)

      if (formDataValues.password.length < 8) {
         setErrorPasswordSignUp(true)
      } else {
         try {
            await api.post('users/signup', formDataValues)
            setSucessSignUp(true)
            history.push('/')
         } catch {
            setErrorSignUp(true)
         }
      }
   };

   const redirect = () => {
      history.push('/')
   }
   return (
      <Content>
         <CardSignOutAttr
            submitForm={(e: MouseEvent) => handleSubmit(e)}
            valueInputEmail={formDataValues.email}
            handleChangeInputEmail={(e) => setFormDataValues({ ...formDataValues, email: e.target.value })}
            valueInputPassword={formDataValues.password}
            handleChangeInputPassword={(e) => setFormDataValues({ ...formDataValues, password: e.target.value })}
            handleSecondButtonClick={redirect}
            signUpState={errorSignUp}
            passwordStateSignUp={errorPasswordSignUp}
         />
      </Content>
   )
}