import styled from 'styled-components'

export const Content = styled.main`
   width: 448px;
   height: 525px;
   display: flex;
   flex-direction: column;
   gap: 40px;
   border: 1px solid #212121;
   padding: 2.5rem 2rem;

   @media (max-width: 600px) {
      width: 348px;
   }

   @media (max-width: 365px) {
      width: 300px;
   }

   & > img {
      max-width: 235.34px;
      max-height: 60px;
      align-self: center;
   }

   & > form {
      display: flex;
      flex-direction: column;
      gap: 4px;

      &:nth:child(3) {
         margin-top: 2rem;
      }

      &:nth:child(4) {
         margin-bottom: 2rem;
      }

      input {
         height: 40px;
         width: 100%;
         padding: 0.5rem;
      }

      label:last-of-type, button:first-of-type {
         margin-top: 2rem;
      }

      p {
         margin-top: 1rem;
      }

      button {
         background: #212121;
         color: #FFF;
         height: 2.5rem;
         border: 0;
      }
   }

   

`