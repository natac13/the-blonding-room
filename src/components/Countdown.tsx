import { Box, Stack, Text } from '@chakra-ui/react'
import isAfter from 'date-fns/isAfter'
import getTime from 'date-fns/fp/getTime'
import * as React from 'react'

export interface CountdownProps {}

const secondsInMili = 1000
const minuteInMili = secondsInMili * 60
const hourInMili = minuteInMili * 60
const dayInMili = hourInMili * 24

function TimeDisplay({ dimension, time }) {
  return (
    <Stack align={{ base: 'center' }}>
      <Text>{time}</Text>
      <Text>{dimension}</Text>
    </Stack>
  )
}

const getTimeSeconds = (distance: number) =>
  Math.floor((distance % minuteInMili) / secondsInMili)
const getTimeMinutes = (distance: number) =>
  Math.floor((distance % hourInMili) / minuteInMili)
const getTimeHours = (distance: number) =>
  Math.floor((distance % dayInMili) / hourInMili)
const getTimeDays = (distance: number) => Math.floor(distance / dayInMili)

const today = new Date()
const endTime = new Date('2022-04-09T09:00:00')

const Countdown: React.FC<CountdownProps> = (props) => {
  const {} = props
  const [timer, setTimer] = React.useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  })

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const remainingTime = getTime(endTime) - getTime(now)

      if (remainingTime <= 0) {
        setTimer({
          seconds: 0,
          minutes: 0,
          hours: 0,
          days: 0,
        })
        clearInterval(timer)
        return
      }

      const seconds = getTimeSeconds(remainingTime)
      const minutes = getTimeMinutes(remainingTime)
      const hours = getTimeHours(remainingTime)
      const days = getTimeDays(remainingTime)
      setTimer({
        seconds,
        minutes,
        hours,
        days,
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const isPassedOpening = isAfter(today, endTime)

  return (
    <Box mt={{ base: '2rem' }} display={isPassedOpening ? 'none' : 'block'}>
      <Text
        align={{ base: 'center' }}
        mb={{ base: '1rem' }}
        fontSize={{ base: '2xl' }}
        fontFamily="heading"
      >
        {isPassedOpening ? "We're Open!" : 'Opening Day!'}
      </Text>
      <Box display={{ base: 'flex' }} gap={{ base: '1rem' }}>
        <TimeDisplay dimension="Days" time={timer.days} />
        <TimeDisplay dimension="Hours" time={timer.hours} />
        <TimeDisplay dimension="Minutes" time={timer.minutes} />
        <TimeDisplay dimension="Seconds" time={timer.seconds} />
      </Box>
    </Box>
  )
}

export default Countdown
