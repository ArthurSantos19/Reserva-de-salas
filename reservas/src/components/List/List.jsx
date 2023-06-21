import { CardContainer, Circle } from "./styles"

export function List() {
    const currentDate = new Date();
    return (
        <CardContainer>
            <p>Sala 01</p>
            <p>Reservado</p>
            <p>{currentDate.toLocaleDateString()}</p>
            <Circle />

        </CardContainer>
    )
}