import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { useAboutData } from '../graphql/useAboutData'
import StaffProfiles from './StaffProfiles'

const AboutUs: React.FC = () => {
  const data = useAboutData()?.aboutData?.about
  return (
    <Box
      as="section"
      id="about"
      minHeight={['auto', '80vh']}
      pt={3}
      mt={'1rem'}
      bg="gray.900"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: '-80px',
        right: 0,
        left: 0,
        backgroundColor: 'gray.900',
        clipPath: 'polygon(50% 10%, 100% 80%, 100% 100%, 0 100%, 0 80%)',
        height: '80px',
      }}
    >
      <Stack
        spacing={4}
        mb={'4rem'}
        as={Container}
        maxW={'6xl'}
        textAlign={'center'}
      >
        <Heading
          as="h2"
          fontSize={{ base: '6xl', sm: '9xl' }}
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
