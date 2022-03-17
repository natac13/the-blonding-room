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
      background="white"
      pt="80px"
      pb="4rem"
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-2px',
          right: 0,
          left: 0,
          backgroundColor: 'gray.900',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0%)',
          height: '105px',
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
        <Heading
          as="h2"
          color="blackAlpha.800"
          fontSize={{ base: '6xl', sm: '9xl' }}
        >
          Nail Services
        </Heading>
      </Stack>

      <Container maxW={'5xl'} mt={10}>
        {nailServices.map((edge, idx) => (
          <Box py={6} px={{ base: 0, sm: 1 }} key={edge?.node?.id ?? idx}>
            <Box
              spacing={4}
              display={'flex'}
              flexDirection="column"
              as={Container}
              maxW={'3xl'}
              textAlign={'center'}
              justifyContent="center"
            >
              <Text
                fontWeight={200}
                textTransform="uppercase"
                fontSize={{ base: '3xl', sm: '4xl' }}
                color="blackAlpha.900"
              >
                {edge?.node?.title}
              </Text>
              <Box
                borderBottom={'1px solid var(--chakra-colors-primary-900)'}
                mx="auto"
                my={'0.5rem'}
                width={{ base: '12%', sm: '6%' }}
              />
            </Box>

            <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} spacing={10}>
              {edge?.node?.items.map((item) => (
                <HStack key={item.item} align={'top'} width="100%">
                  <Box color={'primary.700'} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'} width="100%">
                    <Text
                      fontWeight={'400'}
                      color="blackAlpha.800"
                      fontSize={{ base: 'xl', sm: '2xl' }}
                    >
                      {item.item}
                    </Text>
                    <Text
                      color="black"
                      fontWeight={500}
                      textAlign="center"
                      fontSize={{ base: 'lg', sm: 'xl' }}
                    >
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
