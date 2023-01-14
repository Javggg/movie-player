import styled from 'styled-components'
import { useRouter } from 'next/router'

// Hooks
import { useRef, useEffect, useState, useCallback } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

// Components
import Controls from './Controls'
import Subtitles from './Subtitles'
import { AnimatePresence, motion } from 'framer-motion'

// Icons
import { SyncOutline } from 'react-ionicons'

const Player = ({ videos, name, year, subtitles, history }) => {
    const isMoreThan320 = useMediaQuery('(min-width: 320px)')

    const [selectedVideoLang, setSelectedVideoLang] = useState(1)
    const [selectedSubtitlesLang, setSelectedSubtitlesLang] = useState(1)
    const [parts, setParts] = useState([])
    const [subtitlesData, setSubtitlesData] = useState([])

    useEffect(() => {
        setParts(videos.find((v) => v.id === selectedVideoLang).parts)
    }, [selectedVideoLang, videos])

    useEffect(() => {
        if (selectedSubtitlesLang !== 'no-subtitles') {
            setSubtitlesData(
                subtitles.find((s) => s.id === selectedSubtitlesLang).data
            )
        }
    }, [selectedSubtitlesLang, subtitles])

    // Ref Config
    const players = useRef([])
    const container = useRef(null)
    useEffect(() => {
        players.current = players.current.slice(0, parts.length)
    }, [parts])

    // Movie Data
    const [partsLoaded, setPartsLoaded] = useState(0)
    const [partsDuration, setPartsDuration] = useState([])
    const [realPartsDuration, setRealPartsDuration] = useState([])
    const [currentPart, setCurrentPart] = useState(0)
    const [movieDuration, setMovieDuration] = useState(0)
    const [movieCurrentTime, setMovieCurrentTime] = useState(0)
    const [isMovieLoaded, setIsMovieLoaded] = useState(false)
    const [isMoviePlaying, setIsMoviePlaying] = useState(false)
    const [isNaturalTime, setIsNaturalTime] = useState(true)
    const [justChangedTime, setJustChangedTime] = useState(false)

    useEffect(() => {
        if (partsLoaded === parts.length && parts.length >= 1) {
            setIsMovieLoaded(true)
        }
    }, [partsLoaded, parts.length, partsDuration])

    // Changing 'partsDuration' to a simple Array and sorting
    useEffect(() => {
        if (partsDuration.length === parts.length) {
            let finalArray = []

            for (let i = 0; i < parts.length; i++) {
                finalArray.push(
                    partsDuration.find((part) => part.index === i).duration
                )
            }

            setRealPartsDuration(finalArray)
        }
    }, [partsDuration, parts.length])

    // Functions
    const playPauseHandler = () => {
        if (isMovieLoaded) {
            setIsMoviePlaying((prev) => {
                if (prev === true) {
                    players.current[currentPart].pause()
                    return false
                } else {
                    players.current[currentPart].play()
                    return true
                }
            })
        }
    }

    const sumPreviousPartsTime = useCallback(
        (partIndex) => {
            let prevPartsSum = 0
            for (let i = 0; i < partIndex; i++) {
                prevPartsSum += realPartsDuration[i]
            }

            return prevPartsSum
        },
        [realPartsDuration]
    )

    const addPartTimeToTotalHandler = (partIndex, time) => {
        setMovieCurrentTime(sumPreviousPartsTime(partIndex) + time)
    }

    const changeMovieTimeHandler = (movieTimeChange) => {
        if (isMovieLoaded) {
            if (movieTimeChange < 0) {
                movieTimeChange = 0
            } else if (movieTimeChange > movieDuration) {
                movieTimeChange = movieDuration
            }

            let durationSum = 0
            let newPart
            for (let i = 0; i < parts.length; i++) {
                durationSum += realPartsDuration[i]

                if (durationSum >= movieTimeChange) {
                    setIsNaturalTime(false)
                    setCurrentPart(i)
                    newPart = i
                    durationSum -= realPartsDuration[i]
                    break
                }
            }

            players.current[newPart].currentTime = movieTimeChange - durationSum
            setJustChangedTime(true)
            setMovieCurrentTime(movieTimeChange)
        }
    }

    useEffect(() => {
        if (isMovieLoaded) {
            if (!players.current[currentPart].id) {
                players.current
                    .find((player) => player.id === 'now-playing')
                    .pause()
                players.current.find(
                    (player) => player.id === 'now-playing'
                ).id = ''

                if (isNaturalTime) {
                    players.current[currentPart].currentTime = 0
                }

                players.current[currentPart].id = 'now-playing'
                if (isMoviePlaying) {
                    players.current[currentPart].play()
                }
            }
        }
    }, [currentPart, isMovieLoaded, isNaturalTime, isMoviePlaying])

    useEffect(() => {
        if (isMovieLoaded) {
            let prevPartsTime = sumPreviousPartsTime(currentPart)

            // console.log(
            //     Math.fround(movieCurrentTime - prevPartsTime),
            //     Math.fround(realPartsDuration[currentPart])
            // )
            if (
                Math.fround(movieCurrentTime - prevPartsTime) >=
                Math.fround(realPartsDuration[currentPart])
            ) {
                setIsNaturalTime(true)
                if (parts.length > currentPart + 1) {
                    setCurrentPart((prev) => prev + 1)
                } else {
                    // Movie Ended
                }
            }
        }
    }, [
        movieCurrentTime,
        currentPart,
        isMovieLoaded,
        realPartsDuration,
        sumPreviousPartsTime,
        parts.length
    ])

    // Fullscreen

    const [isFullscreen, setIsFullscreen] = useState(false)

    useEffect(() => {
        function onFullscreenChange() {
            setIsFullscreen(Boolean(document.fullscreenElement))
        }

        document.addEventListener('fullscreenchange', onFullscreenChange)

        return () =>
            document.removeEventListener('fullscreenchange', onFullscreenChange)
    }, [])

    const fullscreenHandler = () => {
        if (!isFullscreen) {
            if (container.current.requestFullscreen) {
                container.current.requestFullscreen()
            } else if (container.current.mozRequestFullScreen) {
                container.current.mozRequestFullScreen()
            } else if (container.current.webkitRequestFullscreen) {
                container.current.webkitRequestFullscreen(
                    Element.ALLOW_KEYBOARD_INPUT
                )
            } else if (container.current.msRequestFullscreen) {
                container.current.msRequestFullscreen()
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
        }
    }

    // Autoplay
    // useEffect(() => {
    //     if (isMovieLoaded && history.length > 1) {
    //         playPauseHandler()
    //     }
    // }, [isMovieLoaded])

    return (
        <Container ref={container}>
            <AnimatePresence>
                {!isMovieLoaded && (
                    <LoadingScreen
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div>
                            <div className="icon-wrapper">
                                <SyncOutline color="#ffffff5b" rotate={true} />
                            </div>
                            <p>Cargando</p>
                        </div>
                    </LoadingScreen>
                )}
            </AnimatePresence>
            {isMoreThan320 ? (
                <>
                    {selectedSubtitlesLang !== 'no-subtitles' ? (
                        <Subtitles
                            currentTime={movieCurrentTime}
                            justChangedTime={justChangedTime}
                            setJustChangedTime={setJustChangedTime}
                            subtitles={subtitlesData}
                        />
                    ) : (
                        ''
                    )}
                    <Controls
                        name={name}
                        year={year}
                        videoRef={players.current[currentPart]}
                        isPlaying={isMoviePlaying}
                        isLoaded={isMovieLoaded}
                        duration={movieDuration}
                        currentTime={movieCurrentTime}
                        playPauseHandler={playPauseHandler}
                        changeMovieTimeHandler={changeMovieTimeHandler}
                        fullscreenHandler={fullscreenHandler}
                        isFullscreen={isFullscreen}
                        subtitles={subtitles}
                        videos={videos}
                        selectedSubtitlesLang={selectedSubtitlesLang}
                        selectedVideoLang={selectedVideoLang}
                        setSelectedSubtitlesLang={setSelectedSubtitlesLang}
                        setSelectedVideoLang={setSelectedVideoLang}
                    />
                    {parts.map((src, i) => {
                        return (
                            <video
                                key={i}
                                id={i === 0 ? 'now-playing' : undefined}
                                ref={(a) => (players.current[i] = a)}
                                disablePictureInPicture
                                onLoadedMetadata={(e) => {
                                    setMovieDuration(
                                        (prev) => prev + e.target.duration
                                    )

                                    setPartsDuration((prev) => {
                                        if (
                                            prev.find(
                                                (part) => part.index === i
                                            )
                                        ) {
                                            return prev
                                        }

                                        return [
                                            ...prev,
                                            {
                                                index: i,
                                                duration: e.target.duration
                                            }
                                        ]
                                    })
                                }}
                                onLoadedData={() => {
                                    setPartsLoaded((prev) => {
                                        return prev + 1
                                    })
                                }}
                                onTimeUpdate={(e) => {
                                    if (e.target.id === 'now-playing') {
                                        addPartTimeToTotalHandler(
                                            i,
                                            e.target.currentTime
                                        )
                                    }
                                }}
                            >
                                <source src={src} type="video/mp4" />
                            </video>
                        )
                    })}
                </>
            ) : (
                <p className="no-compatible">
                    El tamaño de pantalla de tu dispositivo es demasiado pequeño
                </p>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;

    &:-webkit-full-screen {
        background-color: #000 !important;
    }

    video {
        width: 100%;
        max-height: 100%;
        display: none;

        &::-webkit-media-controls {
            display: none !important;
        }

        &::-webkit-media-controls-enclosure {
            display: none !important;
        }
    }

    #now-playing {
        display: block;
        z-index: 0;
    }

    .no-compatible {
        color: #fff;
        font-size: 1.5rem;
        padding: 10px;
    }
`
const LoadingScreen = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #09131d;
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        .icon-wrapper {
            display: flex;
            justify-content: center;

            svg {
                width: 50px;
                height: 50px;
            }
        }

        p {
            color: #ffffff5b;
            font-size: 1.5rem;

            &::after {
                content: '...';
                position: absolute;
            }
        }
    }
`

export default Player
