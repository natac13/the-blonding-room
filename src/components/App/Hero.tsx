import * as React from 'react'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useParallax } from 'react-scroll-parallax'

export const Hero: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 30em)')
  const parallax = useParallax<HTMLDivElement>({
    speed: isMobile ? 20 : 16,
    opacity: [2, 0],
    translateY: ['-160%', '190%'],
  })

  // const opacity = useParallax<HTMLDivElement>({
  //   // opacity: [-1, 0.88],
  // })

  const couchParallax = useParallax<HTMLDivElement>({
    speed: 1,
    translateY: [50, 400],
    opacity: [-0.2, 0.7],
    scale: [0.5, 1],
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
          backgroundColor: 'gray.900',
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 100%)',
          height: '120px',
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
        width={{
          base: '90vw',
          sm: '600px',
          md: '800px',
          lg: '950px',
          xl: '1200px',
        }}
        // mt={{ base: '10rem', md: '5rem' }}
        bg="white"
        boxShadow={'lg'}
        height="max-content"
        zIndex={2}
        ref={parallax.ref}
      >
        {/* <Box
          ref={opacity.ref}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            bg: 'white',
            zIndex: -1,
          }}
        /> */}
        <StaticImage
          src="../../images/theblondingroom-transparent.png"
          layout="fullWidth"
          alt="The Blonding Room Sign"
          loading="lazy"
          placeholder="none"
        />
      </Box>
      <Box
        width={{ base: '60%', sm: '35%', md: '25%' }}
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
