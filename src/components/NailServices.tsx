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
import { useAllNailServices } from '../graphql/useAllNailServices'

const NailSErvices: React.FC = () => {
  const nailServices = useAllNailServices()?.allNailServicesYaml?.edges
  return (
    <Box as="section" minHeight={['auto', '80vh']} background="gray.200" p={8}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading as="h2" color="gray.800" fontSize={'8xl'}>
          Nail Services
        </Heading>
      </Stack>

      <Container maxW={'8xl'} mt={10}>
        {nailServices.map((edge, idx) => (
          <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
              <Text fontWeight={200} fontSize={'4xl'} color="ButtonText">
                {edge?.node?.title}
              </Text>
            </Stack>

            <Container maxW={'6xl'} mt={10}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                {edge?.node?.items.map((item) => (
                  <HStack key={item.item} align={'top'}>
                    <Box color={'primary.700'} px={2}>
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <Text fontWeight={600} color="ButtonText">
                        {item.item}
                      </Text>
                      <Text color="InfoText" textAlign="center">
                        {item.price}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </SimpleGrid>
            </Container>
          </Box>
          // <HStack
          //   key={edge?.node?.title}
          //   align="top"
          //   width="100%"
          //   flexDirection={{
          //     base: 'column',
          //     md: idx % 2 === 0 ? 'row' : 'row-reverse',
          //   }}
          //   mb={12}
          // >
          //   <Center width={{ base: '100%', md: '50%' }}>
          //     <Heading fontWeight={200} fontSize="6xl" mb={{ base: 6, md: 0 }}>
          //       {edge?.node?.title}
          //     </Heading>
          //   </Center>
          //   <SimpleGrid
          //     columns={{ base: 1 }}
          //     spacing={8}
          //     width={{ base: '100%', md: '50%' }}
          //   >
          //     {edge?.node?.items?.map((item) => (
          //       <HStack key={item?.title} align={'top'}>
          //         <Box color={'primary.600'} px={2}>
          //           <Icon as={CheckIcon} />
          //         </Box>
          //         <VStack align={'start'}>
          //           <Text fontWeight={300} fontSize="xl">
          //             {item?.item}
          //           </Text>
          //           <Text color={'gray.500'} fontSize="large">
          //             {item.price}
          //           </Text>
          //         </VStack>
          //       </HStack>
          //     ))}
          //   </SimpleGrid>
          // </HStack>
        ))}
      </Container>
    </Box>
  )
}

export default NailSErvices
