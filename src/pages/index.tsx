import * as React from 'react'
import AboutUs from '../components/AboutUs'
import { Hero } from '../components/App/Hero'
import { Layout } from '../components/App/Layout'
import Contact from '../components/common/Contact'
import HairServices from '../components/HairServices'
import NailServices from '../components/NailServices'

const Index: React.FC = () => (
  <Layout>
    <Hero />
    <HairServices />
    <NailServices />
    <AboutUs />
    <Contact />
  </Layout>
)

export default Index
