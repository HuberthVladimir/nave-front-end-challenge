import React, { ReactNode } from 'react'

export interface IProviderProps {
   children?: ReactNode;
}

interface AppGlobalProps {
   sucessSingUp: boolean;
   setSucessSignUp: (arg: boolean) => void
}

const AppGlobalContext = React.createContext({} as AppGlobalProps)

export const AppProvider = ({ children }: IProviderProps) => {
   const [sucessSingUp, setSucessSignUp] = React.useState(false)

   return (
      <AppGlobalContext.Provider
         value={{ sucessSingUp, setSucessSignUp }}>
         {children}
      </AppGlobalContext.Provider>
   )
}

export default AppGlobalContext