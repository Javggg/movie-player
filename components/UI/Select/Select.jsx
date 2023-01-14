import styled from 'styled-components'

const Select = ({ children, id, onChange, value }) => {
    return (
        <Container htmlFor={id}>
            <select value={value} onChange={onChange} id={id}>
                {children}
            </select>
        </Container>
    )
}

const Container = styled.label`
    position: relative;
    width: fit-content;
    display: block;

    select {
        background-color: transparent;
        color: #fff;
        border: solid 1px #fff;
        padding: 5px 45px 5px 10px;
        font-size: 1rem;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        font-weight: 300;
    }

    &::after {
        content: '';
        position: absolute;
        border-right: solid 10px transparent;
        border-left: solid 10px transparent;
        border-top: solid 10px #fff;
        top: 12px;
        right: 8px;
        z-index: 1;
    }
`

export default Select
