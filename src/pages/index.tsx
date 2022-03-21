import * as React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import AboutUs from '../components/AboutUs'
import { Hero } from '../components/App/Hero'
import { Layout } from '../components/App/Layout'
import Contact from '../components/Contact'
import HairServices from '../components/HairServices'
import NailServices from '../components/NailServices'

const Index: React.FC = () => (
  <Layout>
    <ParallaxProvider>
      <Hero />
      <HairServices />
      <NailServices />
      <AboutUs />
      <Contact />
    </ParallaxProvider>
  </Layout>
)

export default Index
