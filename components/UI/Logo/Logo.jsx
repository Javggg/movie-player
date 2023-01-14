import styled from 'styled-components'

const Logo = ({ className, color = '#000' }) => {
    return (
        <Container className={className}>
            <Title color={color}>DaFilme</Title>
        </Container>
    )
}

const Container = styled.div`
    width: fit-content;
    position: relative;
`
const Title = styled.h1`
    font-family: 'Playfair Display', sans-serif;
    font-weight: 900;
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);

    &::after {
        content: 'Beta';
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        font-size: 0.8rem;
        position: absolute;
        color: #b1b1b1;
        top: -5px;
        right: -10px;
    }
`

export default Logo
