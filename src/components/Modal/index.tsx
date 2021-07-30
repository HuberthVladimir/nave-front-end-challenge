import { Container } from './styles'

import Logo from '../../assets/nave.jpg'

import React from 'react'

import { IconContext } from "react-icons";
import { IoPencilOutline, IoTrash } from 'react-icons/io5'
import { Button } from '../Button';
import AppGlobalContext from '../../services/context'

export const ModalUser = () => {
   const { modalUser, setModalUser, setConfirmModal } = React.useContext(AppGlobalContext)
   return (
      <Container userModal={modalUser} onClick={() => setModalUser(false)}>
         <section className="user" onClick={e => e.stopPropagation()}>
            <img src={Logo} alt="sla" />

            <div className="content">

               <div className="closeButton" aria-label="close modal button" onClick={() => setModalUser(false)}>&times;</div>

               <div className="userInfo">
                  <h1 className="titleName">Juliano Reis</h1>
                  <p lang="en">Front-end Developer</p>

                  <h2>Idade</h2>
                  <p>Lorem Ipsum</p>

                  <h2>Tempo de Empresa</h2>
                  <p>Lorem Ipsum</p>

                  <h2>Projetos que Participou</h2>
                  <p>Lorem Ipsum</p>

                  <div className="icons">
                     <IconContext.Provider value={{ size: '1.5em' }}>
                        <div onClick={() => console.log('edit')}>
                           <IoPencilOutline />
                        </div>
                     </IconContext.Provider>

                     <IconContext.Provider value={{ size: '1.5em' }}>
                        <div onClick={() => {
                           setModalUser(false)
                           setConfirmModal(true)
                        }
                        }>
                           <IoTrash />
                        </div>
                     </IconContext.Provider>

                  </div>
               </div>

            </div>
         </section>
      </Container>
   )
}

export const ModalNotification = () => {
   const { notificationModal, setNotificationModal } = React.useContext(AppGlobalContext)
   return (
      <Container confirmModalattr={notificationModal} onClick={() => setNotificationModal(false)}>
         <section className="notification" onClick={e => e.stopPropagation()}>
            <div className="closeButton" aria-label="close modal button" onClick={() => setNotificationModal(false)}>&times;</div>

            <div className="notificationInfo">
               <h1>Naver criado</h1>
               <p>Naver criado com sucesso!</p>
            </div>
         </section>
      </Container>
   )
}

export const ModalConfirm = () => {
   const { confirmModal, setConfirmModal } = React.useContext(AppGlobalContext)
   return (
      <Container confirmModalattr={confirmModal} onClick={() => setConfirmModal(false)}>
         <section className="confirm" onClick={e => e.stopPropagation()}>

            <div className="corfirmInfo">
               <h1>Excluir Naver</h1>
               <p>Tem certeza que deseja excuir este Naver?</p>
            </div>

            <div className="confirmButtons">
               <Button color="white" handleClick={() => setConfirmModal(false)}>Cancelar</Button>
               <Button>Excluir</Button>
            </div>
         </section>
      </Container>
   )
}