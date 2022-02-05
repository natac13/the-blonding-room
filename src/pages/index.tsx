import {
  Box,
  Center,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import { FaMapPin, FaMobileAlt, FaRegEnvelope } from 'react-icons/fa'
import clientProfile from '../../data/client-profile.json'
import { Hero } from '../components/App/Hero'
import { Layout } from '../components/App/Layout'

const Index = () => (
  <Layout>
    <Hero />
    <Box as="section" id="services" height={['auto', '80vh']}>
      <Text as="h2" fontSize="6xl" align="center" fontWeight="thin" py={4}>
        Services
      </Text>
    </Box>
    <Box
      as="section"
      id="about"
      height={['auto', '80vh']}
      background="gray.200"
    >
      <Text
        as="h2"
        fontSize="6xl"
        align="center"
        fontWeight="thin"
        py={4}
        color="gray.900"
      >
        About
      </Text>
    </Box>
    <Box as="section" id="contact-us" height="auto" pb="4rem">
      <Text as="h2" fontSize="6xl" align="center" fontWeight="thin" py="2rem">
        Get In Touch
      </Text>

      <Center flexDirection="column" mb="4rem">
        <Text as="h5" fontSize="large" align="center" fontWeight="thin" pb={4}>
          We are open 5 days a week as follows
        </Text>
        <Stack
          direction={['column', 'row']}
          divider={
            <StackDivider borderColor="gray.200" orientation="veritical" />
          }
          spacing="1rem"
        >
          <Text>Tuesday – Thursday from 9:00 AM to 8:00 PM </Text>
          <Text>Friday from 9:00 AM to 6:00PM and</Text>
          <Text>Saturday from 9:00 AM to 3:00 PM</Text>
        </Stack>
      </Center>

      <Center mt={6}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 3 }}
          width={['100%', '90%', '90%', '70%']}
          alignItems="center"
          justifyContent="space-evenly"
          gap={['6rem', '0']}
        >
          <Stack direction="column" alignItems="center">
            <FaMapPin size={30} />
            <Text fontSize="xl" fontWeight="thin" align="center">
              LOCATION
            </Text>
            <Text noOfLines={2} align="center">
              {clientProfile.address}
            </Text>
          </Stack>
          <Stack direction="column" alignItems="center">
            <FaMobileAlt size={30} />
            <Text fontSize="xl" fontWeight="thin">
              PHONE
            </Text>
            <Text align="center">{clientProfile.phoneNumber}</Text>
          </Stack>
          <Stack direction="column" alignItems="center">
            <FaRegEnvelope size={30} />
            <Text fontSize="xl" fontWeight="thin">
              EMAIL
            </Text>
            <Text align="center">{clientProfile.emailAddress}</Text>
          </Stack>
        </SimpleGrid>
      </Center>
    </Box>
    {/* <Main></Main> */}
  </Layout>
)

export default Index
