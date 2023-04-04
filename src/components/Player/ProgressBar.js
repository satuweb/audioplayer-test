import { useCallback, useEffect } from "react"
import { formatTime } from "../../utils"
import classes from "./_Player.module.scss"
const ProgressBar = ({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
  end
}) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value
  }

  const resetProgress = useCallback(() => {
    audioRef.current.currentTime = 0
  }, [audioRef])

  useEffect(() => {
    if (end) {
      resetProgress()
    }
  }, [end, resetProgress])

  return (
    <div className={classes.ProgressBar}>
      <span>{formatTime(timeProgress)}</span>
      <input
        type='range'
        ref={progressBarRef}
        defaultValue='0'
        onChange={handleProgressChange}
      />
      <span>{formatTime(duration)}</span>
    </div>
  )
}

export default ProgressBar
