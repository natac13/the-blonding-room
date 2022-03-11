import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Text,
  Heading,
  Divider,
  Button,
  IconButton,
  Link,
  Container,
  BoxProps,
} from '@chakra-ui/react'
// import texture from '../images/gold-texture.jpg'
import texture from '../images/texture-1.jpg'
import { StaticImage } from 'gatsby-plugin-image'
import { filter } from 'lodash'
import * as React from 'react'
import { BsChevronBarRight, BsChevronRight, BsInstagram } from 'react-icons/bs'
import {
  FaAngleRight,
  FaChevronCircleRight,
  FaInstagram,
  FaInstagramSquare,
} from 'react-icons/fa'
import { animated, SpringValue, useSpring } from 'react-spring'
import { useAllStaffProfiles } from '../graphql/useAllStaffProfiles'
import { StaffProfilesYamlEdge } from '../types/generated-gatsby'
import { isMobile } from 'react-device-detect'
import isTouchDevice from 'is-touch-device'

export interface StaffProfilesProps {}

const Card = animated(Box)

const cardWidth = 400
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
    background="gray.700"
    color="primary.500"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    alignItems="stretch"
    boxShadow="dark-lg"
    {...rest}
  >
    {children}
  </Card>
)

const ProfileCard: React.FC<{ edge: StaffProfilesYamlEdge }> = (props) => {
  const { edge } = props
  const [flipped, set] = React.useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <Box
      width="min(85%, 20rem)"
      height={`${cardWidth + cardHeight}px`}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={() => set((s) => !s)}
      cursor="pointer"
    >
      <StyledCard
        style={{
          opacity,
          transform,
          rotateY: '-180deg',
        }}
        sx={{
          '&::-webkit-scrollbar': {
            width: '2px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'primary.300',
            borderRadius: '24px',
          },
          backfaceVisibility: 'hidden' as const,
        }}
        overflowY="scroll"
      >
        <Box
          px="1.6rem"
          py="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xl" lineHeight="1.7">
            {edge?.node?.description}
          </Text>
        </Box>
      </StyledCard>
      <StyledCard
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
        sx={{
          backfaceVisibility: 'hidden',
        }}
        role="group"
      >
        <Box
          flex="1 0"
          sx={{
            '& img.avatar': {
              filter: `brightness(${isTouchDevice ? 0.8 : 0.6}) blur(0.5px)`,
              transition:
                'transform 420ms ease, filter 330ms ease, opacity 250ms linear',
              willChange: 'transform filter opacity',
            },
          }}
          _groupHover={{
            '& img.avatar': {
              filter: 'brightness(1)',
              transform: 'scale(1.025)',
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
              borderBottomColor="InactiveCaptionText"
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
                aria-label="instagram"
                as={Link}
                size={'lg'}
                onClick={(e) => {
                  e.stopPropagation()
                }}
                href={edge?.node?.social?.instagram}
                variant="ghost"
                fontSize="3xl"
                color="primary.500"
                _hover={{
                  bg: 'blackAlpha.300',
                }}
                icon={<BsInstagram />}
              />
            </Box>
          </Box>
        </Box>
      </StyledCard>
    </Box>
  )
}

const StaffProfiles: React.FC<StaffProfilesProps> = (props) => {
  const {} = props

  const [group1, group2] = useAllStaffProfiles()?.allStaffProfilesYaml?.group

  const owners = group1?.edges?.length === 3 ? group2 : group1
  const workers = group1?.edges?.length === 3 ? group1 : group2

  return (
    <Box
      as="section"
      mb={'4rem'}
      position="relative"
      px={'1rem'}
      pb={'4rem'}
      maxWidth="100vw"
      overflow={'hidden'}
      _before={{
        content: "''",
        position: 'absolute',
        display: { base: 'hidden', sm: 'initial' },
        width: '100vw',
        height: { md: '90%', lg: '80%' },
        top: { md: '5%', lg: '15%' },
        left: 0,
        // background: 'gray.200',
        backgroundImage: `url(${texture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        filter: 'brightness(0.8)',
        clipPath: {
          base: '',
          md: 'polygon(50% 6%, 100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
          lg: 'polygon(50% 9%, 100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
          xl: 'polygon(50% 13%, 100% 0, 100% 100%, 65% 85%, 35% 85%, 0 100%, 0 0)',
        },
      }}
    >
      {/* <Box
        sx={{
          position: 'absolute',
          width: '105vw',
          height: '80%',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          // background: 'gray.200',
          // backgroundImage: `url(${texture})`,
          // backgroundRepeat: 'repeat',
          // backgroundSize: 'cover',
          clipPath: [
            '',
            'polygon(50% 13%, 100% 0, 100% 100%, 65% 85%, 35% 85%, 0 100%, 0 0)',
          ],
        }}
      >
        <StaticImage
          src="../images/texture-1.jpg"
          alt="background texture white fabric"
          imgStyle={{ filter: 'brightness(0.8)' }}
        />
      </Box> */}
      <Container maxW="10xl" px={{ base: '1.5rem' }}>
        <Heading
          as="h4"
          ml={['2rem', '4rem']}
          mb={'2rem'}
          color="gray.100"
          fontSize={{ base: '4xl', sm: '6xl' }}
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
      </Container>
    </Box>
  )
}

export default StaffProfiles
