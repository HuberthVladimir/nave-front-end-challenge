import React from 'react'
import { Content } from './styles'
import { CardSign } from '../../components/CardSing'
import { useHistory } from 'react-router-dom'

// import { api } from '../../services/api'

interface formDataProps {
   email: FormDataEntryValue | null
   password: FormDataEntryValue | null
}

export const SignUp = () => {
   const [formDataValues, setFormDataValues] = React.useState<formDataProps>({
      email: '',
      password: ''
   });
   const [errorPasswordSignUp, setErrorPasswordSignUp] = React.useState<boolean>(false)
   const [errorSignUp, setErrorSignUp] = React.useState<boolean>(false)
   // const [sucessSignUp, setSucessSignUp] = React.useState<boolean>(false)

   const history = useHistory()

   const handleSubmit = async (e: MouseEvent) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);

      if (!formData.get("password")) {
         setErrorPasswordSignUp(true)
         console.log('senha invalida')
      } else {
         console.log('conta cadastrada')
         setErrorPasswordSignUp(false)
         setErrorSignUp(false)
         // setSucessSignUp(false)
         setFormDataValues({
            ...formDataValues,
            email: formData.get("email"),
            password: formData.get("password")
         });

         try {
            // const response = await api.post('users/signup', formDataValues)
            history.push('/')
            // setSucessSignUp(true)
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
         <CardSign
            submitForm={(e: MouseEvent) => handleSubmit(e)}
            firstButton="Cadastrar-se"
            secondButton="Fazer login"
            messageLogin="Já, possui cadastro?"
            placeholderEmail="Cadastre seu E-mail"
            placeholderPassword="Cadastre sua senha"
            handleSecondButtonClick={redirect}
            signUpState={errorSignUp}
            passwordStateSignUp={errorPasswordSignUp}
         />
      </Content>
   )
}