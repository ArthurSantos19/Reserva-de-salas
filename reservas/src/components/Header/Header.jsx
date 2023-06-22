import { HeaderContainer, CustomLink } from "./styles"
import { Link } from 'react-router-dom'

export function Header() {
    return (
       <HeaderContainer>
            <Link to={'/'}>
                <CustomLink>Reserva de salas</CustomLink>
            </Link>
        
       </HeaderContainer>
    )
}