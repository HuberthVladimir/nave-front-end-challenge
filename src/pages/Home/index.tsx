import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'
import { Header } from '../../components/Header/index'
import { Button } from '../../components/Button'
import { UserCard } from '../../components/UserCard'

import AppGlobalContext from '../../services/context'
import { ModalConfirm, ModalNotification, ModalUser } from '../../components/Modal'

export function Home() {
   const history = useHistory()
   const { setConfirmModal, setModalUser } = React.useContext(AppGlobalContext)

   return (
      <Container>
         <Header />

         <main>
            <section className="titleContainer">
               <h1 className="title">Navers</h1>
               <Button handleClick={() => history.push('/edit-user')}>Adicionar Naver</Button>
            </section>

            <section className="cardContainer">
               <UserCard
                  handleClick={() => setModalUser(true)}
                  handleDelete={() => setConfirmModal(true)} />
            </section>
         </main>

         <ModalUser />
         <ModalConfirm />
         <ModalNotification />
      </Container>
   )
}