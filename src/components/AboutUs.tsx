import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { useAboutData } from '../graphql/useAboutData'
import StaffProfiles from './StaffProfiles'

const AboutUs: React.FC = () => {
  const data = useAboutData()?.aboutData?.about
  return (
    <Box as="section" id="about" minHeight={['auto', '80vh']} pt={8}>
      <Stack
        spacing={4}
        mb={'4rem'}
        as={Container}
        maxW={'6xl'}
        textAlign={'center'}
      >
        <Heading
          as="h2"
          fontSize={{ base: '6xl', sm: '8xl' }}
          fontWeight={200}
          textAlign="center"
        >
          About Us
        </Heading>
        <Text fontSize={'xl'}>{data?.main}</Text>
        <Text fontSize={'larger'}>{data?.secondary}</Text>
        <Text fontSize={'larger'}>{data?.goal}</Text>
        <Text fontSize={'larger'}>{data?.dream}</Text>
      </Stack>

      <StaffProfiles />
    </Box>
  )
}

export default AboutUs
