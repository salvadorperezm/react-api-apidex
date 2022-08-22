import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './chakra'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ChakraProvider resetCSS theme={theme}>
    <App />
  </ChakraProvider>
)
