import React from 'react'
import { useHistory } from 'react-router-dom'

import { isAuthenticated } from '../../services/auth'

import { Container } from './styles'
import { Header } from '../../components/Header/index'
import { Button } from '../../components/Button'
import { UserCard } from '../../components/UserCard'

export function Home() {
   const history = useHistory()

   React.useEffect(() => {
      if (!isAuthenticated()) history.push('/')
   }, [history])

   return (
      <Container>
         <Header />

         <section className="titleContainer">
            <h1 className="title">Navers</h1>
            <Button>Adicionar Naver</Button>
         </section>

         <main className="cardContainer">
            <UserCard />
         </main>

      </Container>
   )
}