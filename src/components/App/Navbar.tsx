import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import * as React from 'react'
import { animated, useTrail } from 'react-spring'
import { BsChevronDoubleDown } from 'react-icons/bs'
import {
  Box,
  Button,
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

const NavLink: React.FC<{ href: string }> = ({ children, href, ...rest }) => (
  <Link
    px={2}
    py={1}
    textTransform="uppercase"
    fontWeight="light"
    color={useColorModeValue('primary.800', 'primary.100')}
    href={href}
    {...rest}
  >
    {children}
  </Link>
)

export interface NavbarProps {}

const AnimatedLink = animated(NavLink)

export const Navbar: React.FC<NavbarProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [reveal, setReveal] = React.useState(false)

  const linkTrail = useTrail(LINKS?.length, {
    // from: {
    //   opacity: 0,
    // },
    transform: `translateY(${reveal ? '0px' : '-20px'})`,
    opacity: reveal ? 1 : 0,
  })

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
      <Box
        position="absolute"
        sx={{
          position: 'absolute',
          left: '50%',
          right: '50%',
          height: '60px',
          bottom: '-50%',
          width: '72px',
          display: 'grid',
          placeItems: 'center',
          transform: 'translateX(-50%)',
          '&::before': {
            content: '""',
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderColor: 'black transparent transparent transparent',
            borderWidth: '36px 36px 0 36px',
            position: 'absolute',
            left: '50%',
            right: '50%',
            transform: 'translateX(-50%)',
          },
        }}
      >
        <IconButton
          onClick={() => {
            setReveal((state) => !state)
          }}
          aria-label="Show Links"
          sx={{
            backgroundColor: 'transparent',
            outline: 'none',
            color: 'primary',
            transform: 'translateX(1px)',
            '&:hover, &:focus, &:active': {
              boxShadow: 'unset',
              outline: 'unset',
              outlineOffset: 'unset',
              backgroundColor: 'transparent',
            },
          }}
        >
          <BsChevronDoubleDown size={25} />
        </IconButton>
      </Box>
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
            {linkTrail.map((styles, idx) => (
              <AnimatedLink
                style={styles}
                key={LINKS[idx]?.text}
                href={LINKS[idx].href}
              >
                {LINKS[idx].text}
              </AnimatedLink>
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
