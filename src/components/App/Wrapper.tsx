import * as React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

export interface WrapperProps {}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children } = props

  return <ParallaxProvider>{children}</ParallaxProvider>
}

export default Wrapper
