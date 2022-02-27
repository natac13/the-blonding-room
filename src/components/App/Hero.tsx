import * as React from 'react'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useParallax } from 'react-scroll-parallax'

export const Hero: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 30em)')
  const parallax = useParallax<HTMLDivElement>({
    speed: isMobile ? 20 : 13,
    translateY: [300, 0],
  })

  const couchParallax = useParallax<HTMLDivElement>({
    speed: 6,
    translateY: [0, 300],
    opacity: [-0.2, 0.7],
  })
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      id="home"
      background="gray.100"
      position={'relative'}
      // overflowX="hidden"
    >
      <StaticImage
        src="../../images/texture-1.jpg"
        alt="texture"
        placeholder="dominantColor"
        objectFit="cover"
        loading="eager"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <Box
        width={{ base: '220px', md: '400px', lg: '900px' }}
        mt={{ base: '10rem', md: '5rem' }}
        boxShadow="dark-lg"
        height="max-content"
        zIndex={2}
        ref={parallax.ref}
      >
        <StaticImage
          src="../../images/sign-cropped.png"
          alt="The Blonding Room Sign"
        />
      </Box>
      <Box
        width="25%"
        ref={couchParallax.ref}
        position="absolute"
        zIndex={2}
        right={0}
        display={{ base: 'none', md: 'block' }}
      >
        <StaticImage
          src="../../images/half-couch.jpg"
          alt="Half couch picture with green plant"
          layout="constrained"
          objectFit="contain"
        />
      </Box>
    </Box>
  )
}
