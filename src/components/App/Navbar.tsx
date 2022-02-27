import {
  Box,
  Flex,
  IconButton,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react'
import * as React from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { animated, config as rsConfig, useSpring, useTrail } from 'react-spring'

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
    fontSize="large"
    color={useColorModeValue('primary.800', 'primary.100')}
    href={href}
    {...rest}
  >
    {children}
  </Link>
)

export interface NavbarProps {}

const AnimatedLink = animated(NavLink)
const AnimatedBox = animated(Box)
const AnimatedFlex = animated(Flex)

export const Navbar: React.FC<NavbarProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [reveal, setReveal] = React.useState(false)
  const [isMobile] = useMediaQuery('(max-width: 30em)')

  const linkTrail = useTrail(LINKS?.length, {
    transform: `translate${isMobile ? 'X' : 'Y'}(${reveal ? '0px' : '-20px'})`,
    opacity: reveal ? 1 : 0,
    delay: isMobile ? 150 : 50,
  })

  const navSpring = useSpring({
    height: reveal ? (isMobile ? '160px' : '60px') : '0px',
    config: rsConfig.molasses,
  })

  const titleSpring = useSpring({
    opacity: reveal ? 1 : 0,
    config: rsConfig.molasses,
    delay: 200,
  })

  return (
    <Box
      bg={useColorModeValue('primary.50', 'black')}
      px={4}
      py={2}
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
          bottom: -12,
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
            transform: 'translate(0px, -6px)',
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
      <AnimatedFlex
        style={navSpring}
        flexDirection={isMobile ? 'row' : 'column'}
        overflow="hidden"
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flex
          as={'nav'}
          flex="2 1"
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-evenly"
          transform="translateX(18px)"
          height="100%"
          width={'100%'}
          order={isMobile ? 0 : 1}
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
        <AnimatedBox
          style={titleSpring}
          alignSelf={isMobile ? 'flex-end' : 'center'}
          order={isMobile ? 1 : 0}
        >
          <Text fontSize="small" pb={{ base: '0px', sm: '2px' }}>
            The Blonding room
          </Text>
        </AnimatedBox>
      </AnimatedFlex>
    </Box>
  )
}
