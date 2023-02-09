import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from './styles'
import { Home } from './pages'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
