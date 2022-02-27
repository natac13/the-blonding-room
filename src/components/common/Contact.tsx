import * as React from 'react'

import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import { FaMapPin, FaMobileAlt, FaRegEnvelope } from 'react-icons/fa'
import clientProfile from '../../../data/client-profile.json'

export interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
  const {} = props

  return (
    <Box
      as="section"
      id="contact-us"
      height="auto"
      pb="4rem"
      px={{ base: '1rem', sm: 0 }}
    >
      <Heading
        as="h2"
        fontSize={{ base: '6xl', sm: '8xl' }}
        textAlign="center"
        fontWeight="thin"
        py="2rem"
      >
        Get In Touch
      </Heading>

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
          <Text align="center">
            Tuesday – Thursday from 9:00 AM to 8:00 PM{' '}
          </Text>
          <Text align="center">Friday from 9:00 AM to 6:00PM and</Text>
          <Text align="center">Saturday from 9:00 AM to 3:00 PM</Text>
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
  )
}

export default Contact
