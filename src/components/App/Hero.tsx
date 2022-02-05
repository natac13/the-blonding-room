import {
  AspectRatio,
  Text,
  Heading,
  Center,
  Stack,
  Box,
} from '@chakra-ui/react'
import clientProject from '../../../data/client-profile.json'
import heroLogo from '../../images/main-logo.jpg'
import { StaticImage } from 'gatsby-plugin-image'

export const Hero = ({ title }: { title: string }) => (
  <Stack
    height="100vh"
    width="100%"
    flexDirection={['column', 'row']}
    id="home"
  >
    <Center
      width={['100vw', '50vw']}
      mt={['4rem', '0']}
      height={['65vh', 'auto']}
      sx={{
        position: 'relative',
        '&::after': {
          boxShadow: `inset 0 0 100px var(--chakra-colors-gray-200)`,
          content: "''",
          position: 'absolute',
          top: 0,
          bottom: '7px',
          left: 0,
          right: 0,
          background: 'transparent',
          borderColor: 'transparent',
        },
      }}
      backgroundColor="gray.100"
    >
      <StaticImage
        src="../../images/main-logo.jpg"
        alt="The blonding room hero image"
      />
    </Center>
    <Center
      width={['100vw', '50vw']}
      height={['50vh', 'auto']}
      flexDirection="column"
    >
      {/* <Heading as="h4" size="2xl" pb="1rem">
        {title}
      </Heading> */}
      <Text mx={['5px', '5rem']} align="center" fontSize={['xl', '2xl']}>
        Laboris laborum cillum dolore tempor irure pariatur qui id do
        adipisicing laborum incididunt sint eiusmod. Reprehenderit cillum
        adipisicing ea adipisicing anim ea dolor fugiat excepteur occaecat
        mollit anim sunt.
      </Text>
    </Center>
  </Stack>
)

Hero.defaultProps = {
  title: clientProject.name,
}
