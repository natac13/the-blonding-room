import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Center,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useAllHairServices } from '../graphql/useAllHairServices'

const HairServices: React.FC = () => {
  const hairServices = useAllHairServices()?.allHairServicesYaml?.edges

  return (
    <Box
      as="section"
      id="services"
      minHeight={['auto', '80vh']}
      pt={8}
      position="relative"
    >
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading
          as="h2"
          fontSize={{ base: '6xl', sm: '8xl' }}
          fontWeight={200}
          textAlign="center"
        >
          Hair Services
        </Heading>
        <Text color={'gray.400'} fontSize={'xl'}>
          Pricing personalize to each independant stylist.
          <br />
          All services include olaplex (Blonding Agent).
        </Text>
      </Stack>

      <Container maxW={'8xl'} mt={10}>
        {hairServices.map((edge, idx) => (
          <HStack
            key={edge?.node?.title}
            align="top"
            width="100%"
            flexDirection={{
              base: 'column',
              md: idx % 2 === 0 ? 'row' : 'row-reverse',
            }}
            mb={'6em'}
          >
            <Center width={{ base: '100%', md: '50%' }}>
              <Heading
                fontWeight={200}
                fontSize={{ base: '4xl', sm: '6xl' }}
                mb={{ base: 6, md: 0 }}
                color="gray.100"
              >
                {edge?.node?.title}
              </Heading>
            </Center>
            <SimpleGrid
              columns={{ base: 1 }}
              spacing={8}
              width={{ base: '100%', md: '50%' }}
            >
              {edge?.node?.items?.map((item) => (
                <HStack key={item?.title} align={'top'}>
                  <Box color={'primary.600'} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={300} fontSize="xl">
                      {item?.title}
                    </Text>
                    <Text color={'gray.300'} fontSize="large">
                      {item.description}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </HStack>
        ))}
      </Container>
    </Box>
  )
}

export default HairServices
