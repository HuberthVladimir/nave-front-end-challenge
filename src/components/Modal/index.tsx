import { Container } from './styles'

import Logo from '../../assets/nave.jpg'

import { IconContext } from "react-icons";
import { IoPencilOutline, IoTrash } from 'react-icons/io5'
import { Button } from '../Button';

export const ModalUser = () => {
   return (
      <Container>
         <section className="user">
            <img src={Logo} alt="sla" />

            <div className="content">

               <div className="closeButton" aria-label="close modal button">&times;</div>

               <div className="userInfo">
                  <h1 className="titleName">Juliano Reis</h1>
                  <p>Front-end Developer</p>

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
                        <div onClick={() => console.log('delete')}>
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
   return (
      <Container>
         <section className="notification">
            <div className="closeButton" aria-label="close modal button">&times;</div>

            <div className="notificationInfo">
               <h1>Naver criado</h1>
               <p>Naver criado com sucesso!</p>
            </div>
         </section>
      </Container>
   )
}

export const ModalConfirm = () => {
   return (
      <Container>
         <section className="confirm">

            <div className="corfirmInfo">
               <h1>Excluir Naver</h1>
               <p>Tem certeza que deseja excuir este Naver?</p>
            </div>

            <div className="confirmButtons">
               <Button color="white">Cancelar</Button>
               <Button>Excluir</Button>
            </div>
         </section>
      </Container>
   )
}