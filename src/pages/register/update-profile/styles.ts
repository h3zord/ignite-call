import { Box, styled, Text } from '@h3zord-ui-ignite-call/react'

export const ProfileBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$2',

    textArea: {
      width: '100%',
    },
  },
})

export const FormAnnotation = styled(Text, {
  color: '$gray200',
})
