import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* Css Reset */   

   html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio,video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
   }

   * {
      box-sizing: border-box;
   }

   article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	   display: block;
   }

   body {
      line-height: 1;
   }

   html, body, #root {
      height: 100%;
   }

   html {
      @media (max-width: 1080px) {
         font-size: 93.75%;
      }
     
      @media (max-width: 720px) {
         font-size: 87.5%;
      }
   }
   
   body, button {
      font: 600 1rem 'Montserrat', sans-serif;
   }

   h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
   }

   label, p, input {
      font-weight: 400;
      font-family: 'Montserrat', sans-serif;
   }

   input {
      font-size: 1rem;
      color: #9E9E9E
   }

   label {
      font: 600 0.875rem 'Montserrat', sans-serif;
   }
   
   button {
      cursor: pointer;
   }
`