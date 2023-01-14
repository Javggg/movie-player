import styled from 'styled-components'

// Hooks
import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// Icons
import {
    ArrowBackOutline,
    PlayOutline,
    PauseOutline,
    PlayBackOutline,
    PlayForwardOutline,
    VolumeHighOutline,
    VolumeMediumOutline,
    VolumeLowOutline,
    VolumeMuteOutline,
    OptionsOutline,
    ExpandOutline,
    ContractOutline
} from 'react-ionicons'

const Controls = ({
    name,
    year,
    videoRef,
    isPlaying,
    isLoaded,
    playPauseHandler,
    duration,
    currentTime,
    changeMovieTimeHandler,
    fullscreenHandler,
    isFullscreen,
    subtitles,
    videos,
    selectedSubtitlesLang,
    selectedVideoLang,
    setSelectedSubtitlesLang,
    setSelectedVideoLang
}) => {
    const formatTimeHandler = (time) => {
        let sec_num = parseInt(time, 10)
        let hours = Math.floor(sec_num / 3600)
        let minutes = Math.floor((sec_num - hours * 3600) / 60)
        let seconds = sec_num - hours * 3600 - minutes * 60

        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        return hours + ':' + minutes + ':' + seconds
    }

    // Controls showing
    const container = useRef(null)

    const [isShowing, setIsShowing] = useState(true)
    const [isShowingSetToBeFalse, setIsShowingSetToBeFalse] = useState(false)
    const [isUsingControls, setIsUsingControls] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const mouseMoveHandler = useCallback(() => {
        if (isMobile) {
            return
        }

        if (isPlaying && !isUsingControls) {
            setIsShowing(true)

            if (!isShowingSetToBeFalse) {
                setTimeout(() => {
                    setIsShowing(false)
                }, 3000)

                setIsShowingSetToBeFalse(true)
            }
        } else {
            setIsShowing(true)
        }
    }, [isPlaying, isShowingSetToBeFalse, isUsingControls, isMobile])

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [mouseMoveHandler])

    useEffect(() => {
        if (isMobile && isShowing && !isShowingSetToBeFalse && isPlaying) {
            setTimeout(() => {
                setIsShowing(false)
            }, 3000)

            setIsShowingSetToBeFalse(true)
        }
    }, [isMobile, isShowing, isPlaying, isShowingSetToBeFalse])

    useEffect(() => {
        if (isShowing) {
            container.current.style.opacity = 1
            container.current.style.visibility = 'visible'
            document.body.style.cursor = 'auto'
        } else if (!isUsingControls) {
            container.current.style.opacity = 0
            container.current.style.visibility = 'hidden'
            document.body.style.cursor = 'none'

            setIsShowingSetToBeFalse(false)

            hideVolumeControlHandler()
            hideOptionsControlHandler()
        }
    }, [isShowing, isUsingControls])

    useEffect(() => {
        if (isUsingControls) {
            setIsShowing(true)
        } else {
            setIsShowingSetToBeFalse(false)
        }
    }, [isUsingControls])

    const onClickedOutHandler = () => {
        hideVolumeControlHandler()
        hideOptionsControlHandler()
        setIsUsingControls(false)
    }

    // Volume control
    const volumeControl = useRef(null)
    const [isVolumeControlShowing, setIsVolumeControlShowing] = useState(false)
    const [volume, setVolume] = useState(1)

    const showVolumeControlHandler = () => {
        volumeControl.current.style.display = 'block'
        setIsVolumeControlShowing(true)
    }

    const hideVolumeControlHandler = () => {
        volumeControl.current.style.display = 'none'
        setIsVolumeControlShowing(false)
    }

    useEffect(() => {
        if (isLoaded) {
            videoRef.volume = volume
        }
    }, [volume, isLoaded, videoRef])

    // Options control
    const optionsControl = useRef(null)
    const [isOptionsControlShowing, setIsOptionsControlShowing] =
        useState(false)

    const showOptionsControlHandler = () => {
        optionsControl.current.style.display = 'grid'
        setIsOptionsControlShowing(true)
    }

    const hideOptionsControlHandler = () => {
        optionsControl.current.style.display = 'none'
        setIsOptionsControlShowing(false)
    }

    // useEffect(() => {
    //     console.log(isUsingControls)
    // }, [isUsingControls])

    return (
        <Container ref={container}>
            <Wrapper>
                <TopShadow
                    onClick={onClickedOutHandler}
                    onTouchEnd={() => {
                        setIsMobile(true)
                        setIsShowing((prev) => {
                            if (!isPlaying) {
                                return true
                            } else {
                                return !prev
                            }
                        })
                    }}
                />
                <Top>
                    <Link href="/">
                        <a>
                            <ArrowBackOutline title="Volver a la pagina principal" />
                        </a>
                    </Link>
                    <h2>
                        {name} ({year})
                    </h2>
                </Top>
                <Timeline>
                    <p>{formatTimeHandler(currentTime)}</p>
                    <input
                        type="range"
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={(e) => {
                            changeMovieTimeHandler(e.target.value)
                        }}
                        onMouseEnter={(e) => {
                            setIsUsingControls(true)
                        }}
                        onMouseLeave={() => {
                            setIsUsingControls(false)
                        }}
                    />
                </Timeline>
                <Bottom>
                    <div className="playing">
                        {/* Rewind */}
                        <button
                            type="button"
                            onClick={() => {
                                changeMovieTimeHandler(currentTime - 15)
                            }}
                            onMouseEnter={() => {
                                setIsUsingControls(true)
                            }}
                            onMouseLeave={() => {
                                setIsUsingControls(false)
                            }}
                        >
                            <PlayBackOutline title="Retroceder 15 segundos" />
                        </button>
                        {/* Play / Pause */}
                        <button
                            type="button"
                            onClick={playPauseHandler}
                            onMouseEnter={() => {
                                setIsUsingControls(true)
                            }}
                            onMouseLeave={() => {
                                setIsUsingControls(false)
                            }}
                        >
                            {isPlaying ? (
                                <PauseOutline title="Pausar" />
                            ) : (
                                <PlayOutline title="Reproducir" />
                            )}
                        </button>
                        {/* Forward */}
                        <button
                            type="button"
                            onClick={() => {
                                changeMovieTimeHandler(currentTime + 15)
                            }}
                            onMouseEnter={() => {
                                setIsUsingControls(true)
                            }}
                            onMouseLeave={() => {
                                setIsUsingControls(false)
                            }}
                        >
                            <PlayForwardOutline title="Adelantar 15 segundos" />
                        </button>
                    </div>
                    <div className="settings">
                        <button
                            type="button"
                            onMouseEnter={() => {
                                setIsUsingControls(true)
                            }}
                            onMouseLeave={() => {
                                setIsUsingControls(false)
                            }}
                        >
                            <div className="volume-popup" ref={volumeControl}>
                                <div className="slider-wrapper">
                                    <input
                                        type="range"
                                        min={0}
                                        max={1}
                                        step={0.05}
                                        onChange={(e) => {
                                            setVolume(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                onClick={() => {
                                    if (isVolumeControlShowing) {
                                        hideVolumeControlHandler()
                                    } else {
                                        showVolumeControlHandler()
                                    }
                                }}
                            >
                                {parseFloat(volume) === 0 ? (
                                    <VolumeMuteOutline title="Ajustar volumen" />
                                ) : (
                                    ''
                                )}
                                {parseFloat(volume) > 0 &&
                                parseFloat(volume) <= 0.3 ? (
                                    <VolumeLowOutline title="Ajustar volumen" />
                                ) : (
                                    ''
                                )}
                                {parseFloat(volume) > 0.3 &&
                                parseFloat(volume) <= 0.7 ? (
                                    <VolumeMediumOutline title="Ajustar volumen" />
                                ) : (
                                    ''
                                )}
                                {parseFloat(volume) > 0.7 ? (
                                    <VolumeHighOutline title="Ajustar volumen" />
                                ) : (
                                    ''
                                )}
                            </div>
                        </button>
                        <button
                            type="button"
                            onMouseEnter={() => {
                                setIsUsingControls(true)
                            }}
                            onMouseLeave={() => {
                                setIsUsingControls(false)
                            }}
                        >
                            <div className="options-popup" ref={optionsControl}>
                                <div className="audio-options">
                                    <h3>Audio</h3>
                                    {videos.map((item, i) => {
                                        return (
                                            <p
                                                className={
                                                    selectedVideoLang ===
                                                    item.id
                                                        ? 'selected'
                                                        : ''
                                                }
                                                onClick={() => {
                                                    setSelectedVideoLang(
                                                        item.id
                                                    )
                                                }}
                                                key={i}
                                            >
                                                {item.name}
                                            </p>
                                        )
                                    })}
                                </div>
                                <div className="subtitle-options">
                                    <h3>Subtítulos</h3>
                                    {subtitles.map((item, i) => {
                                        return (
                                            <p
                                                className={
                                                    selectedSubtitlesLang ===
                                                    item.id
                                                        ? 'selected'
                                                        : ''
                                                }
                                                onClick={() => {
                                                    setSelectedSubtitlesLang(
                                                        item.id
                                                    )
                                                }}
                                                key={i}
                                            >
                                                {item.name}
                                            </p>
                                        )
                                    })}
                                    <p
                                        className={
                                            selectedSubtitlesLang ===
                                            'no-subtitles'
                                                ? 'selected'
                                                : ''
                                        }
                                        onClick={() => {
                                            setSelectedSubtitlesLang(
                                                'no-subtitles'
                                            )
                                        }}
                                    >
                                        Desactivados
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => {
                                    if (isOptionsControlShowing) {
                                        hideOptionsControlHandler()
                                    } else {
                                        showOptionsControlHandler()
                                    }
                                }}
                            >
                                <OptionsOutline title="Ajustes" />
                            </div>
                        </button>
                        <button
                            type="button"
                            onClick={fullscreenHandler}
                            onMouseEnter={() => {
                                setIsUsingControls(true)
                            }}
                            onMouseLeave={() => {
                                setIsUsingControls(false)
                            }}
                        >
                            {!isFullscreen ? (
                                <ExpandOutline title="Entrar en pantalla completa" />
                            ) : (
                                <ContractOutline title="Salir de pantalla completa" />
                            )}
                        </button>
                    </div>
                </Bottom>
                <BottomShadow
                    onClick={onClickedOutHandler}
                    onTouchEnd={() => {
                        setIsMobile(true)
                        setIsShowing((prev) => {
                            if (!isPlaying) {
                                return true
                            } else {
                                return !prev
                            }
                        })
                    }}
                />
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.4s;
    z-index: 1;

    button,
    a {
        background-color: transparent;
        border: none;
        outline: none;
        display: flex;
        align-items: center;

        &:hover {
            cursor: pointer;

            svg {
                fill: #fff;
                color: #fff;
            }
        }

        span {
            svg {
                fill: #c0c0c0;
                color: #c0c0c0;
                transition: all ease 0.1s;
                display: flex;
                width: 26px;
                height: 26px;

                @media (min-width: 768px) {
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
`
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`
const Top = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;

    > a {
        padding-right: 10px;

        @media (min-width: 768px) {
            padding-right: 15px;
        }
    }

    h2 {
        color: #fff;
        font-weight: 300;
        font-size: 1.2rem;

        @media (min-width: 768px) {
            font-size: 1.5rem;
        }
    }
`
const Timeline = styled.div`
    position: absolute;
    bottom: 70px;
    width: 100%;
    z-index: 20;

    @media (min-width: 768px) {
        bottom: 95px;
    }

    p {
        color: #fff;
        padding-left: 25px;
        font-size: 1.2rem;
        font-weight: 300;

        @media (min-width: 768px) {
            font-size: 1.5rem;
            padding-left: 35px;
        }
    }

    input {
        -webkit-appearance: none;
        width: 100%;
        background: transparent;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 16px;
            width: 16px;
            border-radius: 11px;
            background: #ffffff;
            cursor: pointer;
            margin-top: -7px;
        }

        &::-moz-range-thumb {
            height: 16px;
            width: 16px;
            border-radius: 11px;
            background: #ffffff;
            cursor: pointer;
        }

        &::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            cursor: pointer;
            background: #c0c0c0;
            border-radius: 1.3px;
        }

        &::-moz-range-track {
            width: 100%;
            height: 4px;
            cursor: pointer;
            background: #c0c0c0;
        }

        &:focus {
            outline: none;
        }
    }
`
const Bottom = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    padding: 20px;
    z-index: 20;

    @media (min-width: 768px) {
        padding: 25px;
    }

    .playing {
        display: flex;
        justify-content: flex-start;

        button {
            padding: 5px;
            margin-right: 5px;

            @media (min-width: 768px) {
                margin-right: 20px;
            }
        }
    }

    .settings {
        display: flex;
        justify-content: flex-end;

        button {
            padding: 5px;
            margin-left: 5px;
            position: relative;

            @media (min-width: 768px) {
                margin-left: 20px;
            }
        }

        .volume-popup {
            display: none;
            background-color: #232323;
            width: 100%;
            position: absolute;
            bottom: 40px;
            left: 0;
            -webkit-box-shadow: 0px 0px 10px 0px rgba(35, 35, 35, 0.5);
            -moz-box-shadow: 0px 0px 10px 0px rgba(35, 35, 35, 0.5);
            box-shadow: 0px 0px 10px 0px rgba(35, 35, 35, 0.5);

            @media (min-width: 768px) {
                bottom: 60px;
            }

            &::after {
                content: '';
                position: absolute;
                bottom: -8px;
                right: 10px;
                border-top: 8px solid #232323;
                border-right: 8px solid transparent;
                border-left: 8px solid transparent;

                @media (min-width: 768px) {
                    right: 17px;
                }
            }

            .slider-wrapper {
                display: inline-block;
                width: 20px;
                height: 170px;
                padding: 0;
                overflow: hidden;

                input {
                    width: 150px;
                    height: 20px;
                    margin: 0;
                    transform-origin: 80px 80px;
                    transform: rotate(-90deg);

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        .options-popup {
            display: none;
            background-color: #232323;
            position: absolute;
            bottom: 40px;
            right: -40px;
            grid-template-columns: 1fr 1fr;
            padding: 10px 0;
            -webkit-box-shadow: 0px 0px 10px 0px rgba(35, 35, 35, 0.5);
            -moz-box-shadow: 0px 0px 10px 0px rgba(35, 35, 35, 0.5);
            box-shadow: 0px 0px 10px 0px rgba(35, 35, 35, 0.5);

            &:hover {
                cursor: auto;
            }

            &::after {
                content: '';
                position: absolute;
                bottom: -8px;
                right: 50px;
                border-top: 8px solid #232323;
                border-right: 8px solid transparent;
                border-left: 8px solid transparent;

                @media (min-width: 768px) {
                    right: 57px;
                }
            }

            @media (min-width: 768px) {
                bottom: 60px;
            }

            > div {
                padding: 0 15px;

                h3 {
                    color: #fff;
                    font-weight: 400;
                    text-align: left;
                    padding: 10px 5px;
                    font-size: 1.2rem;
                }

                p {
                    color: #f0f0f0;
                    font-weight: 300;
                    text-align: left;
                    padding: 3px 5px;
                    margin: 2px 0;
                    font-size: 1rem;

                    &:hover {
                        background-color: #2e2e2e;
                        cursor: pointer;
                    }
                }

                p.selected {
                    background-color: #2e2e2e;
                }

                @media (min-width: 768px) {
                    h3 {
                        font-size: 1.4rem;
                    }

                    p {
                        font-size: 1.3rem;
                        padding: 5px 10px;
                    }
                }
            }

            .audio-options {
                border-right: 1px solid #474747;
            }

            .subtitle-options {
            }
        }
    }
`
const TopShadow = styled.div`
    background: rgba(0, 0, 0, 1);
    background: -moz-linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.3) 100%
    );
    background: -webkit-linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.3) 100%
    );
    background: -o-linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.3) 100%
    );
    background: -ms-linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.3) 100%
    );
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.3) 100%
    );

    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50vh;
    z-index: 10;
    visibility: visible !important;
`
const BottomShadow = styled.div`
    background: rgba(0, 0, 0, 1);
    background: -moz-linear-gradient(
        270deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.3) 100%
    );
    background: -webkit-linear-gradient(
        270deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.3) 100%
    );
    background: -o-linear-gradient(
        270deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.3) 100%
    );
    background: -ms-linear-gradient(
        270deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.3) 100%
    );
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.3) 100%
    );
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 50vh;
    z-index: 10;
    visibility: visible !important;
`

export default Controls
