import { Container } from './styles'

import Nave from '../../assets/nave.jpg'

import { IconContext } from "react-icons";
import { IoPencilOutline, IoTrash } from 'react-icons/io5'

interface UserCardProps {
   handleDelete: () => void
   handleClick: () => void
}

export const UserCard = ({ handleDelete, handleClick }: UserCardProps) => {

   return (
      <Container onClick={handleClick}>
         <img src={Nave} alt="sla" />
         <h2>Juliano Reis</h2>
         <p lang="en">Front-end Developer</p>

         <div className="icons">
            <IconContext.Provider value={{ size: '1.5em' }}>
               <div onClick={() => console.log('edit')}>
                  <IoPencilOutline />
               </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ size: '1.5em' }}>
               <div
                  onClick={(e) => {
                     e.stopPropagation();
                     handleDelete()
                  }}
               >
                  <IoTrash />
               </div>
            </IconContext.Provider>

         </div>
      </Container>
   )
}