/* eslint-disable camelcase */
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'

dayjs.extend(utc)
dayjs.extend(timezone)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const username = String(req.query.username)

  const { date } = req.query

  if (!date) {
    return res.status(400).json({ message: 'Date no provided.' })
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return res.status(400).json({ message: 'User does not exist.' })
  }

  console.log('New Date =>', new Date())

  const referenceDate = dayjs.tz(String(date), 'America/Sao_Paulo')

  console.log('Reference date =>', referenceDate)

  const isPastDate = referenceDate.endOf('day').isBefore(new Date())

  console.log('End day =>', referenceDate.endOf('day'))

  if (isPastDate) {
    return res.status(200).json({ possibleTimes: [], availableTimes: [] })
  }

  const userAvailability = await prisma.userTimeInterval.findFirst({
    where: {
      user_id: user.id,
      week_day: referenceDate.get('day'),
    },
  })

  if (!userAvailability) {
    return res.status(200).json({ possibleTimes: [], availableTimes: [] })
  }

  const { time_start_in_minutes, time_end_in_minutes } = userAvailability

  const startHour = time_start_in_minutes / 60
  const endHour = time_end_in_minutes / 60

  const possibleTimes = Array.from({ length: endHour - startHour }).map(
    (_, i) => {
      return startHour + i
    },
  )

  const blockedTimes = await prisma.scheduling.findMany({
    select: {
      date: true,
    },
    where: {
      user_id: user.id,
      date: {
        gte: referenceDate.set('hour', startHour).toDate(),
        lte: referenceDate.set('hour', endHour).toDate(),
      },
    },
  })

  console.log(dayjs.tz(blockedTimes[0].date, 'America/Sao_Paulo').hour())

  const availableTimes = possibleTimes.filter((time) => {
    const isTimeBlocked = blockedTimes.some(
      (blockedTime) =>
        dayjs.tz(blockedTime.date, 'America/Sao_Paulo').hour() === time,
    )

    const isTimeInPast = referenceDate.set('hour', time).isBefore(new Date())

    console.log('Set hour =>', referenceDate.set('hour', time))

    console.log('Is time in past =>', isTimeInPast)

    return !isTimeBlocked && !isTimeInPast
  })

  return res.status(200).json({ possibleTimes, availableTimes })
}
