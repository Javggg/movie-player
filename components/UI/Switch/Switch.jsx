import styled from 'styled-components'

const Switch = () => {
    return (
        <Container>
            <input type="checkbox" />
            <span className="slider round"></span>
        </Container>
    )
}

const Container = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .slider {
            background-color: #488bc9;
        }

        &:focus + .slider {
            box-shadow: 0 0 1px #488bc9;
        }

        &:checked + .slider:before {
            -webkit-transform: translateX(21px);
            -ms-transform: translateX(21px);
            transform: translateX(21px);
        }
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;

        &::before {
            position: absolute;
            content: '';
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 50%;
        }
    }
`

export default Switch
