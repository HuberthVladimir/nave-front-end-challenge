import styled from 'styled-components'

export const Content = styled.div`
   margin: 0 2rem;
   overflow: hidden;
   height: 100%;

   main {
      margin-top: -10rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .centerContent {
         display: flex;
         flex-direction: column;
         gap: 2rem;

         .titleContent {
            display: flex;
            align-items: center;
            gap: 1.5rem;

            & > h1 {
               font-size: 1.5rem;
            }
         }
      }

      .inputContent {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         gap: 2rem;

         & > div {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            input {
               padding-left: 0.5rem;
               max-width: 17.5rem;
               height: 2.5rem;
               max-height: 2.5rem;
            }
         }
      }

      button {
         align-self: flex-end;
      }
   }
`