import { useHistory } from "react-router-dom";

import { Header } from "../../components/Header"
import { Content } from "./styles"

import { IconContext } from "react-icons";
import { IoChevronBack } from 'react-icons/io5'
import { Button } from "../../components/Button";

export const EditUser = () => {
   const history = useHistory()

   return (
      <Content>
         <Header />

         <main>
            <section className="centerContent">
               <div className="titleContent" aria-label="titulo">
                  <IconContext.Provider value={{ size: '1.5em' }} >
                     <div style={{ cursor: 'pointer' }} onClick={() => history.push('/home')}>
                        <IoChevronBack />
                     </div>
                  </IconContext.Provider>

                  <h1>Editar naver</h1>
               </div>

               <div className="inputContent">
                  <div>
                     <label htmlFor="name">Nome</label>
                     <input type="text" id="name" name="name" placeholder="Nome" />
                  </div>

                  <div>
                     <label htmlFor="job_role">Cargo</label>
                     <input type="text" id="job_role" name="job_role" placeholder="Cargo" />
                  </div>

                  <div>
                     <label htmlFor="birthdate">Data Nascimento</label>
                     <input type="text" id="birthdate" name="birthdate" placeholder="Data Nascimento" />
                  </div>

                  <div>
                     <label htmlFor="admission_date">Data de admissão</label>
                     <input type="text" id="admission_date" name="admission_date" placeholder="Data de admissão" />
                  </div>

                  <div>
                     <label htmlFor="project">Projetos que participou</label>
                     <input type="text" id="project" name="project" placeholder="Projetos que participou" />
                  </div>


                  <div>
                     <label htmlFor="url">URL da foto do Naver</label>
                     <input type="text" id="url" name="url" placeholder="URL da foto do Naver" />
                  </div>

               </div>

               <Button>Salvar</Button>
            </section>
         </main>
      </Content>
   )
}