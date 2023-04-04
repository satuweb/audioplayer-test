import { useState, useEffect, useCallback, useRef } from "react"

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  end
}) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const playAnimationRef = useRef()

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime
    setTimeProgress(currentTime)
    progressBarRef.current.value = currentTime
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    )
    playAnimationRef.current = requestAnimationFrame(repeat)
  }, [audioRef, duration, progressBarRef, setTimeProgress])

  useEffect(() => {
    if (isPlaying && !end) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
    playAnimationRef.current = requestAnimationFrame(repeat)
  }, [isPlaying, audioRef, repeat, end])
  return (
    <div className='controls-wrapper'>
      <div className='controls'>
        <button onClick={togglePlayPause}>
          {isPlaying && !end ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  )
}

export default Controls
