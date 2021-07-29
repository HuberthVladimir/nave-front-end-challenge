import styled from 'styled-components'

export const Container = styled.div`
   margin: 0 2rem;
   overflow: hidden;

   .titleContainer {
      margin-top: 4.6875rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
         font-size: 2.5rem;
      }
   }

   .cardContainer {
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1.875rem;
   }

   .icons {
      & > div {
         cursor: pointer;
      }
   }
`