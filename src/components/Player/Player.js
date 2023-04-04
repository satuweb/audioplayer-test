import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import DisplayTrack from "./DisplayTrack"
import Controls from "./Controls"
import ProgressBar from "./ProgressBar"
import classes from "./_Player.module.scss"

const Player = () => {
  const { track } = useSelector((state) => state.playReducer.track)
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [end, setEnd] = useState(false)

  const audioRef = useRef()
  const progressBarRef = useRef()
  return (
    <>
      {track && (
        <div className={classes.AudioPlayer}>
          <DisplayTrack
            {...{ track, audioRef, setDuration, progressBarRef, setEnd }}
          />
          <div className={classes.Controls}>
            <ProgressBar
              {...{
                progressBarRef,
                audioRef,
                timeProgress,
                duration,
                setTimeProgress,
                end
              }}
            />
            <Controls
              {...{ audioRef, progressBarRef, duration, setTimeProgress, end }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Player
