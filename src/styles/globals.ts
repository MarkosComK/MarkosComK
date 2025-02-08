// src/styles/globals.ts
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }

 body {
   background: ${({ theme }) => theme.colors.background};
   color: ${({ theme }) => theme.colors.text};
   font-family: 'Courier New', Courier, monospace;
   line-height: 1.6;
   padding: 0;
 }

 a {
   color: ${({ theme }) => theme.colors.link};
   text-decoration: none;
   &:hover {
     text-decoration: underline;
   }
 }

 ::-webkit-scrollbar {
   width: 8px;
   height: 8px;
 }

 ::-webkit-scrollbar-track {
   background: ${({ theme }) => theme.colors.background};
 }

 ::-webkit-scrollbar-thumb {
   background: #888;
   border-radius: 4px;
 }

 ::-webkit-scrollbar-thumb:hover {
   background: #555;
 }
`

export default GlobalStyle
