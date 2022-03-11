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
} from '@chakra-ui/react'
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

export interface StaffProfilesProps {}

const Card = animated(Box)
const iconSize = 35

const cardWidth = 380
const cardHeight = 150

const StyledCard: React.FC<{
  style: any
}> = ({ children, style, ...rest }) => (
  <Card
    style={style}
    position="absolute"
    width={`${cardWidth}px`}
    height={`${cardWidth + cardHeight}px`}
    // background="secondary.900"
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

const ProfileCard: React.FC = (props) => {
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
          backfaceVisibility: 'hidden',
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
        }}
        overflowY="scroll"
      >
        <Box
          px="1rem"
          py="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xl" lineHeight="1.5">
            {edge?.node?.description}
          </Text>
        </Box>
      </StyledCard>
      <StyledCard
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          backfaceVisibility: 'hidden',
        }}
        role="group"
      >
        <Box
          flex="1 0"
          sx={{
            '& img.avatar': {
              filter: 'brightness(0.8)',
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
            {/* {edge?.node?.businessRole ? (
              <Heading
                as="h6"
                fontSize="2xl"
                lineHeight="3xl"
                // fontStyle="italic"
                // fontWeight={100}
              >
                {edge?.node?.businessRole}
              </Heading>
            ) : null} */}
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
  console.log({ owners, workers })

  return (
    <Box as="section" height={'min-content'} mb={'4rem'}>
      <Container maxW="8xl">
        <Heading
          as="h4"
          ml={['2rem', '4rem']}
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
          mb="4rem"
          position="relative"
          height={{
            sm: `${(cardWidth + cardHeight) * (owners?.edges?.length + 0.5)}px`,
            md: `${(cardWidth + cardHeight) * (1 + 0.5)}px`,
            xl: `${cardWidth + cardHeight}px`,
          }}
        >
          {owners?.edges?.map((edge) => (
            <ProfileCard edge={edge} />
          ))}
        </Flex>
        <Flex
          gap="10vh"
          flexDirection="row"
          wrap="wrap"
          justifyContent="space-evenly"
          position="relative"
          height={{
            sm: `${
              (cardWidth + cardHeight) * (workers?.edges?.length + 0.4)
            }px`,
            md: `${(cardWidth + cardHeight) * 2}px`,
            xl: `${cardWidth + cardHeight}px`,
          }}
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
