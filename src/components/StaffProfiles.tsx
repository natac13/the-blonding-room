import {
  Box,
  BoxProps,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
} from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import isTouchDevice from 'is-touch-device'
import * as React from 'react'
import { BsInfoCircle, BsInstagram } from 'react-icons/bs'
import { animated, useSpring } from 'react-spring'
import { useAllStaffProfiles } from '../graphql/useAllStaffProfiles'
import { StaffProfilesYamlEdge } from '../types/generated-gatsby'

export interface StaffProfilesProps {}

const Card = animated(Box)

const cardWidth = 370
const cardHeight = 150

const StyledCard: React.FC<
  {
    style: any
  } & Omit<BoxProps, 'style'>
> = ({ children, style, ...rest }) => (
  <Card
    style={style}
    position="absolute"
    width={`${cardWidth}px`}
    maxWidth="95vw"
    height={`${cardWidth + cardHeight}px`}
    background="gray.800"
    color="primary.500"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    alignItems="stretch"
    {...rest}
  >
    {children}
  </Card>
)

const ProfileCard: React.FC<{ edge: StaffProfilesYamlEdge }> = (props) => {
  const { edge } = props
  const [flipped, set] = React.useState(false)
  const { transform, opacity, width } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    width: `${flipped ? '30rem' : '22rem'}`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <Card
      style={{
        width,
      }}
      height={`${cardWidth + cardHeight}px`}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      onClick={(e) => {
        e.stopPropagation()
        set((s) => !s)
      }}
    >
      <StyledCard
        style={{
          opacity,
          transform,
          rotateY: '-180deg',
        }}
        width={{ base: '95vw', sm: '100%' }}
        mr={{ base: '10px', sm: '0' }}
        sx={{
          // width: { base: '95vw', sm: '23rem', md: '33rem' },
          boxShadow: 'rgba(245, 245, 245, 0.35) 0px 5px 15px',
          backgroundColor: 'whiteAlpha.900',
          color: 'blackAlpha.900',
          '&::-webkit-scrollbar': {
            width: ['5px', '7px'],
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'primary.600',
            borderRadius: '24px',
          },
          backfaceVisibility: 'hidden' as const,
          zIndex: 1,
        }}
        overflowY="scroll"
      >
        <Box
          pl={{ base: '1.35rem', sm: '1.6rem' }}
          pr={{ base: '0.35rem', sm: '1.6rem' }}
          py="3rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xl" lineHeight="1.7" letterSpacing={'.4px'}>
            {edge?.node?.description}
          </Text>
        </Box>
        {edge?.node?.social?.instagram && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb="3rem"
          >
            <Button
              as={Link}
              size={'lg'}
              onClick={(e) => e.stopPropagation()}
              variant="outline"
              target="_blank"
              href={`https://instagram.com/${edge?.node?.social?.instagram}`}
              // fontSize="3xl"
              color="primary.700"
              bg="whiteAlpha.200"
              _hover={{
                color: 'primary.500',
                bg: 'blackAlpha.800',
                textDecoration: 'none',
              }}
              leftIcon={<BsInstagram />}
            >
              {edge?.node?.social?.instagram}
            </Button>
          </Box>
        )}
      </StyledCard>
      <StyledCard
        // width={{ base: '95vw', sm: '100%' }}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
        sx={{
          boxShadow: 'rgba(245, 245, 245, 0.35) 0px 5px 15px',
          backfaceVisibility: 'hidden',
        }}
        role="group"
      >
        <Box
          flex="1 0"
          sx={{
            '& img.avatar': {
              filter: `brightness(${isTouchDevice ? 0.9 : 0.7}) blur(0.5px)`,
              transition:
                'transform 420ms ease, filter 330ms ease, opacity 250ms linear',
              willChange: 'transform filter opacity',
            },
          }}
          _groupHover={{
            '& img.avatar': {
              filter: 'brightness(1)',
              transform: 'scale(1.04)',
            },
          }}
        >
          <StaticImage
            src="../images/jonathan-borba-XJt51hAa3z8-unsplash.jpg"
            layout="fixed"
            width={cardWidth}
            height={cardWidth}
            alt="Placeholer"
            objectFit="cover"
            imgClassName="avatar"
            imgStyle={{
              maxWidth: '95vw',
            }}
          />
        </Box>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width="100%"
          bg="white"
          color="blackAlpha.900"
        >
          <Box
            display="flex"
            alignItems="flex-end"
            pt="1rem"
            px="1rem"
            justifyContent={'center'}
          >
            <Text as="h4" fontSize="4xl" fontWeight={200}>
              {edge?.node?.name}
            </Text>
          </Box>
          <Box px="1rem">
            <Divider
              variant="solid"
              orientation="horizontal"
              borderBottomColor="blackAlpha.600"
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px="1rem"
            py="1rem"
            gap="1rem"
          >
            {edge?.node?.jobRole ? (
              <Heading
                justifySelf="flex-start"
                alignItems="center"
                textAlign="left"
                fontSize="3xl"
              >
                {edge?.node?.jobRole}
              </Heading>
            ) : (
              <div />
            )}

            <Box display="flex" alignItems="center">
              <IconButton
                aria-label="description"
                size={'lg'}
                onClick={(e) => {
                  e.stopPropagation()
                  set((s) => !s)
                }}
                variant="ghost"
                fontSize="3xl"
                color="blackAlpha.900"
                _hover={{
                  bg: 'blackAlpha.100',
                }}
                icon={<BsInfoCircle />}
              />
            </Box>
          </Box>
        </Box>
      </StyledCard>
    </Card>
  )
}

const StaffProfiles: React.FC<StaffProfilesProps> = (props) => {
  const {} = props

  const [group1, group2] = useAllStaffProfiles()?.allStaffProfilesYaml?.group

  const owners = group1?.edges?.length === 3 ? group2 : group1
  const workers = group1?.edges?.length === 3 ? group1 : group2

  return (
    <Container maxW="10xl">
      <Box
        as="section"
        position="relative"
        pb={'8rem'}
        pt={'1rem'}
        mx="auto"
        overflow={'hidden'}
        // sx={{
        //   boxShadow: {
        //     base: 'unset',
        //     sm: 'rgba(245, 245, 245, 0.15) 0px 2px 10px, rgba(245, 245, 245, 0.15) 0px -2px 10px',
        //   },
        // }}
      >
        <Heading
          as="h4"
          ml={['2rem', '4rem']}
          mb={'2rem'}
          color="gray.100"
          fontSize={{ base: '4xl', sm: '5xl', xl: '6xl' }}
        >
          Say Hello!
        </Heading>

        <Flex
          gap="10vh"
          flexDirection="row"
          wrap="wrap"
          justifyContent="space-evenly"
          mb="6rem"
        >
          {owners?.edges?.map((edge) => (
            <ProfileCard edge={edge} />
          ))}
        </Flex>
        <Flex
          gap="10vh"
          flexDirection="row"
          wrap="wrap"
          justifyContent="space-around"
        >
          {workers?.edges?.map((edge) => (
            <ProfileCard edge={edge} />
          ))}
        </Flex>
      </Box>
    </Container>
  )
}

export default StaffProfiles
