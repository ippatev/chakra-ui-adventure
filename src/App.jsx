import { useState } from 'react'
import { Container, Flex } from '@chakra-ui/react'

import logo from './logo.svg'
import Details from './sections/Details'
import Cart from './sections/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}

export default App
