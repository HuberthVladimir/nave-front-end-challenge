import { Container } from './styles'

import Nave from '../../assets/nave.jpg'

import { IconContext } from "react-icons";
import { IoPencilOutline, IoTrash } from 'react-icons/io5'

export const UserCard = () => {
   return (
      <Container>
         <img src={Nave} alt="sla" />
         <h2>Juliano Reis</h2>
         <p>Front-end Developer</p>

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
      </Container>
   )
}