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
        src="../../images/hero.jpg"
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
        bg="white"
        boxShadow={'lg'}
        height="max-content"
        zIndex={2}
        ref={parallax.ref}
      >
        <StaticImage
          src="../../images/theblondingroom-transparent.png"
          layout="fullWidth"
          alt="The Blonding Room Sign"
          loading="lazy"
          placeholder="none"
        />
      </Box>
    </Box>
  )
}
