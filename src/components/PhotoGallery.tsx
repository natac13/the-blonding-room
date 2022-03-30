import * as React from 'react'
import Gallery from '@browniebroke/gatsby-image-gallery'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Box, Container } from '@chakra-ui/react'

interface ImageProp {
  full: IGatsbyImageData
  thumb: IGatsbyImageData
  thumbAlt?: string
  title?: string
  caption?: string
}

export interface PhotoGalleryProps {
  photos: ImageProp[]
}

const CustomWrapper = ({ children, onClick }) => (
  <Box onClick={onClick}>{children}</Box>
)

export const PhotoGallery: React.FC<PhotoGalleryProps> = (props) => {
  const { photos } = props

  return (
    <Container
      maxW="1800px"
      sx={{
        '& > div': {
          display: 'flex',
          justifyContent: 'space-evenly',
          rowGap: { base: '2rem' },
        },
      }}
    >
      <Gallery images={photos} customWrapper={CustomWrapper} />
    </Container>
  )
}
