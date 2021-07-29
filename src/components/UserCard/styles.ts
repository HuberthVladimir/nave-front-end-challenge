import styled from 'styled-components'

export const Container = styled.section`
   max-width: 17.5rem;
   max-height: 25.5rem;
   height: 25.5rem;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   gap: 0.25rem;

   img {
      margin-bottom: 0.75rem;
      object-fit: cover;
      object-position: center top;
      height: 17.5rem;
      width: 17.5rem;
      filter: grayscale(1)
   }

   .icons {
      display: flex;
      gap: 1rem
   } 
`