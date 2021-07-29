import styled from 'styled-components'

export const Container = styled.header`
   display: flex;
   justify-content: space-between;
   margin-top: 1.5rem;
   
   img {
      max-height: 10rem;
      max-width: 10rem;
   }

   img, .logout {
      cursor: pointer;
   }
`