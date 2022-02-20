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
import { useAboutData } from '../graphql/useAboutData'

const AboutUs: React.FC = () => {
  const data = useAboutData()?.aboutData?.about
  return (
    <Box as="section" id="about" minHeight={['auto', '80vh']} pt={8}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading as="h2" fontSize={'8xl'} fontWeight={200} textAlign="center">
          About Us
        </Heading>
        <Text fontSize={'xl'}>{data?.main}</Text>
        <Text fontSize={'larger'}>{data?.secondary}</Text>
        <Text fontSize={'larger'}>{data?.goal}</Text>
        <Text fontSize={'larger'}>{data?.dream}</Text>
      </Stack>
    </Box>
  )
}

export default AboutUs
