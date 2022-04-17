import { FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem, Select, Checkbox, Button, useBreakpointValue } from '@chakra-ui/react'

const Details = () => {
  const colSpan = useBreakpointValue({base: 2, md: 1});

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to sign in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6}>
        <GridItem colSpan={colSpan}>
          <FormControl>
           <FormLabel>First name</FormLabel>
           <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
           <FormLabel>Last name</FormLabel>
           <Input placeholder="Jones" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
           <FormLabel>Address</FormLabel>
           <Input placeholder="Blvd. Broken Dreams 42" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
           <FormLabel>City</FormLabel>
           <Input placeholder="San Address" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
           <FormLabel>Country</FormLabel>
           <Select value="russia">
            <option value="usa">United States of America</option>
            <option value="russia">Russia</option>
            <option value="ukrain">Ukrain</option>
            <option value="chine">Chine</option>
           </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button colorScheme="brand" size="lg" w="full">Place Order</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}

export default Details
