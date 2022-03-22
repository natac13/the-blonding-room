import * as React from 'react'
import { Box, Button, Link, Text, useMediaQuery } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useParallax } from 'react-scroll-parallax'

export const Hero: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 30em)')
  const parallax = useParallax<HTMLDivElement>({
    speed: isMobile ? 20 : 16,
    opacity: [2, 0],
    translateY: ['-70%', '190%'],
  })

  // const opacity = useParallax<HTMLDivElement>({
  //   // opacity: [-1, 0.88],
  // })

  return (
    <Box
      height={{ base: 'auto' }}
      width="100%"
      maxW="100vw"
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      justifyContent="flex-start"
      id="home"
      // background="gray.900"
      background="#e8e6e5"
      position={'relative'}
      // overflowX="hidden"
      sx={{
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-2px',
          right: 0,
          left: 0,
          backgroundColor: 'gray.900',
          // backgroundColor: '#e8e6e5',
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 100%)',
          height: { base: '60px', lg: '70px' },
        },
      }}
    >
      <Box
        flex={{ lg: '1 0' }}
        mt={{ base: '1rem', lg: '-2rem' }}
        pb={{ lg: '1rem' }}
        boxShadow={{ base: 'rgba(203, 196, 192, 1) 0px 2px 5px', lg: 'none' }}
        overflow="hidden"
      >
        <StaticImage
          src="../../images/new-hero.png"
          alt="The Blonding Room Sign"
          placeholder="dominantColor"
          layout="fullWidth"
          objectFit="cover"
          loading="eager"
        />
      </Box>
      <Box
        flex={{ lg: '1 0' }}
        height={{ base: '100%', lg: 'auto' }}
        display="flex"
        flexDirection={{ base: 'column' }}
        justifyContent={{ base: 'flex-start', lg: 'center' }}
        alignItems={{ base: 'center' }}
        mt={{ base: '0.5rem' }}
        color="blackAlpha.900"
        mb={{ base: '6rem', sm: '9rem', lg: '0' }}
      >
        <Box
          my={{ base: '2rem', lg: '0' }}
          px={{ base: '0.5rem' }}
          mx={{ lg: '2rem' }}
        >
          <Text
            align={{ base: 'center' }}
            fontSize={{ base: 'lg', sm: 'xl' }}
            mb={{ base: '1rem' }}
          >
            With Blonding, Colouring, Styling and Nail Services
          </Text>
          <Text align={{ base: 'center' }} fontSize={{ base: 'lg', sm: 'xl' }}>
            Are you ready to join us at the Blonding Room?
          </Text>
        </Box>
        <div ref={parallax.ref}>
          <Button
            variant="solid"
            size="lg"
            color="blackAlpha.900"
            fontSize={{ base: 'xl' }}
            background="primary.600"
            boxShadow="md"
            border="3px solid transparent"
            as={Link}
            textDecoration="none"
            href="#contact-us"
            sx={{
              padding: '1.5rem 2rem',
              '&:hover': {
                backgroundColor: 'transparent',
                border: '3px solid var(--chakra-colors-primary-600)',
                textDecoration: 'none',
                color: 'black',
              },
              '&:active, &:focus': {
                backgroundColor: 'primary.700',
                outline: 'none',
                textDecoration: 'none',
                color: 'whiteAlpha.700',
                boxShadow: 'sm',
              },
            }}
          >
            Book Now!
          </Button>
        </div>
      </Box>
    </Box>
  )
}
