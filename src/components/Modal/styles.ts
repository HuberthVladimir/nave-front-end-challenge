import styled from 'styled-components'

export const Container = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   height: 100%;
   width: 100%;
   background: #00000080;
   display: flex;
   align-items: center;
   justify-content: center;

   .user {
      display: flex;
      max-height: 31.4375rem;
      max-width: 62.875rem;
      
      & > img {
         max-height: 31.4375rem;
         max-width: 31.4375rem;
         width: 31.4375rem;
         object-fit: cover;
         object-position: center top;
         filter: grayscale(1)
      }

      .content {
         display: flex;
         flex-direction: column;
         max-width: 31.4375rem;
         height: 31.4375rem;
         width: 31.4375rem;
         background: #FFF;
         padding: 1.3125rem 1.3125rem 1.5625rem 2rem;

         .closeButton {
            font-size: 2rem;
            margin-left: auto;
            cursor: pointer;
         }

         .userInfo{
            display: flex;
            flex-direction: column;
            gap: 0.625rem;

            .titleName {
               font-size: 1.5rem;
            }

            & > p {
               margin-bottom: 0.875rem;
            }

            .icons {
               margin-top: 5.7rem;
               display: flex;
               gap: 1rem
            } 
         }
      }

   }

   .notification {
      max-width: 37rem;
      width: 37rem;
      max-height: 10rem;
      height: 10rem;
      padding: 1rem 1.875rem 2rem 2rem;
      background: #FFF;
      display: flex;
      flex-direction: column;
      
      .closeButton {
         font-size: 2rem;
         margin-left: auto;
         cursor: pointer;
      }

      .notificationInfo {
         display: flex;
         flex-direction: column;
         gap: 1.5rem;

         & > h1 {
            margin-top: -0.5rem;
            font-size: 1.5rem;
      }
      }
   }

   .confirm {
      max-width: 37rem;
      width: 37rem;
      max-height: 14.5625rem;
      height: 14.5625rem;
      padding: 2rem;
      background: #FFFFFF;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      .corfirmInfo {
         display: flex;
         flex-direction: column;
         gap: 2rem;

         & > h1 {
            font-size: 1.5rem;
        }
      }

      .confirmButtons {
         display: flex;
         justify-content: flex-end;
         gap: 1.5rem;
      }
   }
`