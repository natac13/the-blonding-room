import * as React from 'react'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useParallax } from 'react-scroll-parallax'

export const Hero: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 30em)')
  const parallax = useParallax<HTMLDivElement>({
    speed: isMobile ? 20 : 13,
    translateY: [300, 0],
  })

  const couchParallax = useParallax<HTMLDivElement>({
    speed: 6,
    translateY: [0, isMobile ? 50 : 300],
    opacity: [-0.2, 0.7],
    // disabled: isMobile,
  })
  return (
    <Box
      height="106vh"
      width="100%"
      display="flex"
      justifyContent="center"
      id="home"
      background="gray.100"
      position={'relative'}
      // overflowX="hidden"
      sx={{
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-2px',
          right: 0,
          left: 0,
          backgroundColor: 'gray.800',
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 100%)',
          height: '100px',
        },
      }}
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
        width={{ base: '300px', md: '425px', lg: '650px', xl: '800px' }}
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
        boxShadow="dark-lg"
        zIndex={2}
        right={0}
        bottom={'3rem'}
        // display={{ base: 'none', md: 'block' }}
        sx={{
          '& img': {
            filter: 'brightness(0.5)',
          },
        }}
      >
        <StaticImage
          src="../../images/half-couch.jpg"
          alt="Half couch picture with green plant"
          layout="constrained"
          objectFit="cover"
        />
      </Box>
    </Box>
  )
}
