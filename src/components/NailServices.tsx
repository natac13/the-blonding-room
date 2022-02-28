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
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useAllNailServices } from '../graphql/useAllNailServices'
import { useParallax } from 'react-scroll-parallax'
import { StaticImage } from 'gatsby-plugin-image'

const NailServieces: React.FC = () => {
  const nailServices = useAllNailServices()?.allNailServicesYaml?.edges

  const parallax = useParallax<HTMLDivElement>({
    speed: 9,
    opacity: [0.1, 1],
    scale: [0.6, 1],
    translateX: [-30, 10],
  })

  return (
    <Box
      position={'relative'}
      as="section"
      id="nail-services"
      minHeight={['auto', '80vh']}
      background="gray.200"
      pt="80px"
      pb="2rem"
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-2px',
          right: 0,
          left: 0,
          backgroundColor: 'gray.800',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 20%)',
          height: '100px',
        },
      }}
    >
      <Box
        ref={parallax.ref}
        display={{ base: 'none', sm: 'block' }}
        position="absolute"
        width="20%"
        mt={'3rem'}
      >
        <StaticImage src="../images/inspiring-sign.jpg" alt="Inspring sign" />
      </Box>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading as="h2" color="gray.800" fontSize={{ base: '6xl', sm: '8xl' }}>
          Nail Services
        </Heading>
      </Stack>

      <Container maxW={'5xl'} mt={10}>
        {nailServices.map((edge, idx) => (
          <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
              <Text
                fontWeight={200}
                fontSize={{ base: '3xl', sm: '4xl' }}
                color="ButtonText"
                mb="1rem"
              >
                {edge?.node?.title}
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={10}>
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
          </Box>
        ))}
      </Container>
    </Box>
  )
}

export default NailServieces
