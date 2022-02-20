import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { DarkModeSwitch } from '../common/DarkModeSwitch'

const LINKS = [
  {
    text: 'Services',
    href: '#services',
  },
  {
    text: 'About',
    href: '#about',
  },
  {
    text: 'Contact Us!',
    href: '#contact-us',
  },
]

const NavLink: React.FC<{ href: string }> = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    textTransform="uppercase"
    fontWeight="light"
    color={useColorModeValue('primary.800', 'primary.100')}
    href={href}
  >
    {children}
  </Link>
)

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      bg={useColorModeValue('primary.50', 'black')}
      px={4}
      py={2}
      as="nav"
      position="fixed"
      top="0"
      left={0}
      right={0}
      zIndex={100}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'} w="100%">
          <Heading as="h1" fontSize="3xl" flex="1 0">
            <Link href="#home" _hover={{ textDecoration: 'none' }}>
              <StaticImage
                src="../../images/sign-cropped.png"
                alt="Main logo"
                blurredOptions={{}}
                height={65}
              />
              {/* The blonding room */}
            </Link>
          </Heading>
          <Flex
            as={'nav'}
            flex="2 1"
            display={{ base: 'none', md: 'flex' }}
            justifyContent="space-evenly"
            transform="translateX(18px)"
          >
            {LINKS.map((link) => (
              <NavLink key={link} href={link.href}>
                {link.text}
              </NavLink>
            ))}
          </Flex>
          <IconButton
            borderRadius={0}
            variant="outline"
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box flex="1 0" display={['none', 'flex']} />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} pt={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {LINKS.map((link) => (
              <NavLink key={link} href={link.href}>
                {link.text}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}
