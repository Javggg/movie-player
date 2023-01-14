import styled from 'styled-components'

// Hooks
import { useCallback, useEffect, useState } from 'react'

const Subtitles = ({
    currentTime,
    justChangedTime,
    setJustChangedTime,
    subtitles
}) => {
    const [currentText, setCurrentText] = useState('')
    const [textIndex, setTextIndex] = useState(0)
    const [prevLang, setPrevLang] = useState(subtitles)

    const resetSubtitlesIndex = useCallback(() => {
        let newIndex = subtitles.findIndex((st) => st.end >= currentTime)
        setTextIndex(newIndex)
        setCurrentText('')
    }, [currentTime, subtitles])

    useEffect(() => {
        if (subtitles) {
            if (!subtitles[textIndex]) {
                return
            }

            if (subtitles[textIndex].start <= currentTime) {
                if (!currentText) {
                    setCurrentText(subtitles[textIndex].text)
                }
            }

            if (subtitles !== prevLang) {
                resetSubtitlesIndex()
                setPrevLang(subtitles)
            }

            if (justChangedTime) {
                resetSubtitlesIndex()
                setJustChangedTime(false)
            } else {
                if (
                    subtitles[textIndex].end <= currentTime &&
                    subtitles[textIndex].start <= currentTime
                ) {
                    setTextIndex((prev) => prev + 1)
                    setCurrentText('')
                    console.log(textIndex)
                }
            }
        }
    }, [
        currentTime,
        subtitles,
        currentText,
        textIndex,
        justChangedTime,
        setJustChangedTime,
        prevLang,
        resetSubtitlesIndex
    ])

    return (
        <Container>
            <p dangerouslySetInnerHTML={{ __html: currentText }}></p>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100vw;
    z-index: 1;
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
        bottom: 70px;
    }

    @media (min-width: 1024px) {
        bottom: 100px;
    }

    @media (min-width: 1366px) {
        bottom: 120px;
    }

    p {
        text-align: center;
        font-size: 2rem;
        color: #fff;
        font-weight: 500;
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 1);
    }
`

export default Subtitles
