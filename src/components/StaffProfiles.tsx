import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Text,
  Heading,
  Divider,
  Button,
  IconButton,
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

const StyledCard: React.FC<{
  style: any
}> = ({ children, style, ...rest }) => (
  <Card
    style={style}
    position="absolute"
    height="500px"
    width="350px"
    maxW="500px"
    maxH="500px"
    background="gray.50"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    alignItems="stretch"
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
    >
      <StyledCard
        style={{
          opacity,
          transform,
          rotateY: '-180deg',
          backfaceVisibility: 'hidden',
        }}
        onClick={() => set((s) => !s)}
        cursor="pointer"
        overflowY="scroll"
      >
        <Box
          p="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="ButtonText">{edge?.node?.description}</Text>
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
            width={350}
            height={350}
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
            alignItems="center"
            pt="1rem"
            px="1rem"
            justifyContent="space-between"
          >
            <Text as="h4" color="ButtonText" fontSize="2xl" fontWeight={500}>
              {edge?.node?.name}
            </Text>
            <Heading
              as="h6"
              fontSize="2xl"
              // fontStyle="italic"
              color="ButtonText"
              // fontWeight={100}
            >
              {edge?.node?.jobRole}
            </Heading>
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
            {edge?.node?.businessRole ? (
              <Heading
                justifySelf="flex-start"
                alignItems="center"
                color="ButtonText"
                textAlign="left"
                fontSize="lg"
              >
                {edge?.node?.businessRole}
              </Heading>
            ) : (
              <div />
            )}

            <Box display="flex" alignItems="center" gap="1rem">
              <IconButton
                aria-label="instagram"
                onClick={() => {}}
                background="whiteAlpha.900"
                borderColor="InactiveCaptionText"
                borderRadius={0}
                borderStyle="solid"
                transition={'background 0.3s ease'}
                _hover={{
                  bg: 'blackAlpha.200',
                  '& > svg': {
                    transition: 'transform 0.5s ease',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <BsInstagram size={25} />
              </IconButton>
              <IconButton
                aria-label="description"
                onClick={() => {
                  set((state) => !state)
                }}
                background="whiteAlpha.900"
                borderColor="InactiveCaptionText"
                borderRadius={0}
                borderStyle="solid"
                transition={'background 0.3s ease'}
                _hover={{
                  bg: 'blackAlpha.200',
                  '& > svg': {
                    transition: 'transform 0.5s ease',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <BsChevronRight size={25} />
              </IconButton>
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
    <Box as="section" height="calc(1000px + 12rem)">
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
        wrap="nowrap"
        justifyContent="center"
        mb="4rem"
        position="relative"
        height="500px"
      >
        {owners?.edges?.map((edge) => (
          <ProfileCard edge={edge} />
        ))}
      </Flex>
      <Flex
        gap="10vh"
        flexDirection="row"
        wrap="nowrap"
        justifyContent="center"
        position="relative"
        height="500px"
      >
        {workers?.edges?.map((edge) => (
          <ProfileCard edge={edge} />
        ))}
      </Flex>
    </Box>
  )
}

export default StaffProfiles
