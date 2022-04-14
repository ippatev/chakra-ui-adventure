import { VStack, Flex, Box, Divider, Heading, Text, Button, List, ListItem, AspectRatio, Image } from '@chakra-ui/react'

const Cart = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="gray.50"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,
          <Button variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <List w="full" spacing={3}>
        <ListItem>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
             <Flex gap={3}> 
              <Box maxW="100px">
                <Image src="https://i.pinimg.com/originals/c6/e5/18/c6e518bc0ff173610f8eb4b4b929140a.png" objectFit="cover" alt="itachi"></Image> 
              </Box>
              <Box>
                <Flex flexDirection="column">
                 <Text as="b" color="black">Penny board</Text> 
                 <Text textTransform="uppercase">pnycomp27541</Text> 
                </Flex> 
              </Box>
             </Flex> 
            </Box>
            <Box>
              <Text color="black" as="b">$119.00</Text>
            </Box>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex justifyContent="space-between">
            <Text>Subtotal</Text>
            <Text color="black" as="b">$119.00</Text>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex justifyContent="space-between">
            <Text>Shipping</Text>
            <Text color="black" as="b">$19.99</Text>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex justifyContent="space-between">
            <Text>Taxes (estimated)</Text>
            <Text color="black" as="b">$23.80</Text>
          </Flex>
        </ListItem>
        <ListItem>
          <Divider marginY="20px" />         
        </ListItem>
        <ListItem>
          <Flex justifyContent="space-between">
            <Text>Total</Text>
            <Heading size="lg">$23.80</Heading>
          </Flex>
        </ListItem>
      </List>
    </VStack>
  )
}

export default Cart
