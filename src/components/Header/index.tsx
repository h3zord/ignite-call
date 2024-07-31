import Image from 'next/image'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Image src="/icon-app.svg" width={56} height={56} alt="Logo app" />

      <div>
        <span>IGNITE</span>
        <span>CALL</span>
      </div>
    </HeaderContainer>
  )
}
