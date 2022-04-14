import { useState } from 'react'
import { Container, Flex } from '@chakra-ui/react'

import logo from './logo.svg'
import Details from './sections/Details'
import Cart from './sections/Cart'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="container.xl" p={0}>
      <Flex h={{base: "auto", md: "100vh"}} py={[0, 10, 20]} direction={{base: "column-reverse", md: "row"}}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}

export default App
