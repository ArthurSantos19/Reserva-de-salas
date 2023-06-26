import { HeaderContainer, CustomLink, IconNotifica } from "./styles"
import { Link } from 'react-router-dom'

export function Header() {
    return (
       <HeaderContainer>
            <Link to={'/'}>
                <CustomLink>Reserva de salas</CustomLink>
                
            </Link>
            <h3>Checkin</h3>
            <h3>Notificações</h3>
            <IconNotifica />
       </HeaderContainer>
    )
}