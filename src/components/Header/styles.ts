import { styled } from '@h3zord-ui-ignite-call/react'

export const HeaderContainer = styled('header', {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '$6',
  display: 'flex',
  gap: '$3',
  alignItems: 'center',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Lora',
    color: '$gray100',
    fontSize: '$xl',
    alignItems: 'center',
    fontWeight: '$bold',
  },
})
