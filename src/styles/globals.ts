import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scrollbar-width: thin;
  scrollbar-color: #00ff00 ${({ theme }) => theme.colors.background};
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
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.background};
}

::-webkit-scrollbar-thumb {
  background: #00ff00;
  border: 2px solid ${({ theme }) => theme.colors.background};
}

::-webkit-scrollbar-corner {
  background: ${({ theme }) => theme.colors.background};
}
`
export default GlobalStyle
