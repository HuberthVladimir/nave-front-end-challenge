import React, { ReactNode } from 'react'

export interface IProviderProps {
   children?: ReactNode;
}

interface AppGlobalProps {
   sucessSingUp: boolean;
   setSucessSignUp: (arg: boolean) => void
   notificationModal: boolean
   setNotificationModal: (arg: boolean) => void
   confirmModal: boolean
   setConfirmModal: (arg: boolean) => void
   modalUser: boolean
   setModalUser: (arg: boolean) => void
}

const AppGlobalContext = React.createContext({} as AppGlobalProps)

export const AppProvider = ({ children }: IProviderProps) => {
   const [sucessSingUp, setSucessSignUp] = React.useState(false)
   const [notificationModal, setNotificationModal] = React.useState(false)
   const [confirmModal, setConfirmModal] = React.useState(false)
   const [modalUser, setModalUser] = React.useState(false)

   return (
      <AppGlobalContext.Provider
         value={{
            sucessSingUp, setSucessSignUp,
            notificationModal, setNotificationModal,
            confirmModal, setConfirmModal,
            modalUser, setModalUser,
         }}>
         {children}
      </AppGlobalContext.Provider>
   )
}

export default AppGlobalContext