import * as React from 'react'

import {
  Box,
  Center,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import { FaMapPin, FaMobileAlt, FaRegEnvelope } from 'react-icons/fa'
// @ts-expect-error this is a yaml file
import clientProfile from '../data/client-profile.yml'

export interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
  const {} = props

  return (
    <Box
      as="section"
      id="contact-us"
      height="auto"
      pb="4rem"
      bg="gray.900"
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
          We are available for bookings Monday to Saturday
        </Text>
        <Text as="h5" fontSize="large" align="center" fontWeight="thin" pb={4}>
          We strive for a work life balance and therefore if we have no bookings
          we are not at the salon but enjoying the beautiful day!
        </Text>
        <Stack
          direction={['column', 'row']}
          divider={<StackDivider borderColor="gray.200" />}
          spacing="1rem"
        >
          <Text align="center">
            Please contact us to make your next appointment!
          </Text>
          {/* <Text align="center">
            Tuesday – Thursday from 9:00 AM to 8:00 PM{' '}
          </Text>
          <Text align="center">Friday from 9:00 AM to 6:00PM and</Text>
          <Text align="center">Saturday from 9:00 AM to 3:00 PM</Text> */}
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
          <Stack
            role="group"
            direction="column"
            alignItems="center"
            width={{ base: '100%' }}
            as={Link}
            isExternal
            _hover={{
              textDecoration: 'none',
            }}
            href="https://www.google.com/maps?q=21578+Richmond+Street,+Arva,+ON,+Canada"
          >
            <FaMapPin size={30} />
            <Text fontSize="xl" fontWeight="thin" align="center">
              LOCATION
            </Text>
            <Text
              noOfLines={2}
              align="center"
              width={{ base: '100%' }}
              _groupHover={{
                textDecoration: 'underline',
              }}
            >
              {clientProfile.address}
            </Text>
          </Stack>
          <Stack
            role="group"
            direction="column"
            alignItems="center"
            justifyContent="center"
            width={{ base: '100%' }}
            as={Link}
            isExternal
            _hover={{
              textDecoration: 'none',
            }}
            href={`tel:${clientProfile?.phoneNumber?.replace('-', '')}`}
          >
            <FaMobileAlt size={30} />
            <Text fontSize="xl" fontWeight="thin">
              PHONE
            </Text>
            <Text
              align="center"
              width={{ base: '100%' }}
              _groupHover={{
                textDecoration: 'underline',
              }}
            >
              {clientProfile.phoneNumber}
            </Text>
          </Stack>
          <Stack
            role="group"
            direction="column"
            alignItems="center"
            width={{ base: '100%' }}
            as={Link}
            isExternal
            href={`mailto:${clientProfile?.emailAddress}`}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <FaRegEnvelope size={30} />
            <Text fontSize="xl" fontWeight="thin">
              EMAIL
            </Text>
            <Text
              align="center"
              width={{ base: '100%' }}
              _groupHover={{
                textDecoration: 'underline',
              }}
            >
              {clientProfile.emailAddress}
            </Text>
          </Stack>
        </SimpleGrid>
      </Center>
    </Box>
  )
}

export default Contact
