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
import * as React from 'react'
import { CheckIcon } from '@chakra-ui/icons'
import { useAllHairServices } from '../graphql/useAllHairServices'
import { useParallax } from 'react-scroll-parallax'
import { StaticImage } from 'gatsby-plugin-image'

const HairServices: React.FC = () => {
  const hairServices = useAllHairServices()?.allHairServicesYaml?.edges
  const couchParallax = useParallax<HTMLDivElement>({
    speed: 1,
    translateY: [0, 10],
    opacity: [-0.2, 0.7],
    scale: [0.5, 1],
    // disabled: isMobile,
  })

  return (
    <Box
      as="section"
      id="services"
      minHeight={['auto', '80vh']}
      pt={8}
      position="relative"
      bg="gray.900"
    >
      <Box
        width={{ base: '60%', sm: '35%', md: '25%' }}
        ref={couchParallax.ref}
        position="absolute"
        boxShadow="dark-lg"
        zIndex={2}
        right={0}
        bottom={'3rem'}
        // display={{ base: 'none', md: 'block' }}
        sx={{
          '& img': {
            filter: 'brightness(0.5)',
          },
        }}
      >
        <StaticImage
          src="../../images/half-couch.jpg"
          alt="Half couch picture with green plant"
          layout="constrained"
          objectFit="cover"
        />
      </Box>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading
          as="h2"
          fontSize={{ base: '6xl', sm: '7xl', lg: '8xl', xl: '9xl' }}
          fontWeight={200}
          textAlign="center"
        >
          Hair Services
        </Heading>
        <Text color={'whiteAlpha.700'} fontSize={{ base: 'xl', xl: '2xl' }}>
          Pricing is personalized to each independent stylist.
          <br />
          All services include olaplex (Bonding Agent).
        </Text>
      </Stack>

      <Container maxW={'8xl'} mt={10}>
        {hairServices.map((edge, idx) => (
          <Box
            key={edge?.node?.title}
            width="100%"
            display="flex"
            flexDirection="column"
          >
            <HStack
              align="top"
              flexDirection={{
                base: 'column',
                md: idx % 2 === 0 ? 'row' : 'row-reverse',
              }}
            >
              <Center width={{ base: '100%', md: '50%' }}>
                <Heading
                  fontWeight={200}
                  fontSize={{ base: '5xl', sm: '6xl', lg: '7xl', xl: '8xl' }}
                  mb={{ base: 6, md: 0 }}
                  color="white"
                  // @ts-expect-error this is fine
                  textAlign={{ base: 'center !important', sm: 'left' }}
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
                    <Box color={'primary.500'} px={2}>
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <Text
                        fontWeight={'400'}
                        textTransform={'uppercase'}
                        color="white"
                        fontSize={{ base: 'xl', xl: '2xl' }}
                      >
                        {item?.title}
                      </Text>
                      <Text
                        color={'whiteAlpha.800'}
                        fontSize={{ base: 'lg', xl: 'xl' }}
                      >
                        {item.description}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </SimpleGrid>
            </HStack>
            <Box
              width="33%"
              borderBottom={'solid 1px'}
              borderBottomColor={'whiteAlpha.500'}
              mx="auto"
              my="4rem"
            />
          </Box>
        ))}
      </Container>
    </Box>
  )
}

export default HairServices
