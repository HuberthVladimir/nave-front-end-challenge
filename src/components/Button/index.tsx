import { Container } from './style'

interface ButtonProps {
   children: string
   color?: 'black' | 'white'
   handleClick?: () => void
}

export const Button = ({ children, color = 'black', handleClick }: ButtonProps) => {
   return (
      <Container color={color} onClick={handleClick}>
         {children}
      </Container>
   )
}