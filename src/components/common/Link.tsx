import * as React from 'react'
import { Link as ReachLink } from '@reach/router'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  useColorModeValue,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export interface LinkProps {
  href: string
  text: React.ReactElement
  chakraLinkProps?: ChakraLinkProps
}

export const Link: React.FC<LinkProps> = (props) => {
  const { href, text, nextLinkProps = {}, chakraLinkProps = {} } = props
  const linkColor = useColorModeValue('secondary.700', 'secondary.100')

  return (
    <ChakraLink {...chakraLinkProps} color={linkColor} as={ReachLink} to={href}>
      {text} {chakraLinkProps?.isExternal && <ExternalLinkIcon mx="2px" />}
    </ChakraLink>
  )
}
