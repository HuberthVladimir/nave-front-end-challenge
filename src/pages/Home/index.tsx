import React from 'react'
import { useHistory } from 'react-router-dom'

import { isAuthenticated } from '../../services/auth'

export function Home() {
   const history = useHistory()

   React.useEffect(() => {
      if (!isAuthenticated()) history.push('/')
   }, [history])

   return (
      <h1>Oi</h1>
   )
}