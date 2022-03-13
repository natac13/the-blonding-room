import { Box, Container } from '@chakra-ui/react'
// import '@fontsource'
// import '@fontsource/parisienne/latin.css'
import * as React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { SEO } from './SEO'

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <Box as="section">
      <SEO />
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}
