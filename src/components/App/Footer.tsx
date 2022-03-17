import {
  Box,
  chakra,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'
import clientProfile from '../../../data/client-profile.json'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'none'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.300'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export const Footer: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'black')}
      color={useColorModeValue('gray.700', 'gray.200')}
      width="100%"
    >
      <Container
        as={Flex}
        w={{ base: '100%', md: '60vw' }}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text align="center" noOfLines={2} order={[2, 1]}>
          © {new Date().getFullYear()} {clientProfile.name}. All rights reserved
        </Text>
        <Stack direction={'row'} spacing={6} order={[1, 2]} mb={['2rem', 0]}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={clientProfile.socialMedia.instagram}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
