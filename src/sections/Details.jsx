import { FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem, Select, Checkbox, Button } from '@chakra-ui/react'

const Details = () => {
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
        <GridItem colSpan={1}>
          <FormControl>
           <FormLabel>First name</FormLabel> 
           <Input placeholder="John" />
          </FormControl> 
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
           <FormLabel>Last name</FormLabel> 
           <Input placeholder="Jones" />
          </FormControl> 
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
           <FormLabel>Address</FormLabel> 
           <Input placeholder="Blvd. Broken Dreams 42" />
          </FormControl> 
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
           <FormLabel>City</FormLabel> 
           <Input placeholder="San Address" />
          </FormControl> 
        </GridItem>
        <GridItem colSpan={1}>
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
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full">Place Order</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}

export default Details
