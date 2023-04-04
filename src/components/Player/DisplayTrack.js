import classes from "./_Player.module.scss"
const DisplayTrack = ({
  track,
  audioRef,
  setDuration,
  progressBarRef,
  setEnd
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration
    setDuration(seconds)
    progressBarRef.current.max = seconds
    setEnd(false)
  }

  const handleOnEnded = () => {
    setEnd(true)
  }
  return (
    <>
      <audio
        src={track.previews["preview-lq-mp3"]}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleOnEnded}
      />
      <div className={classes.TrackInfo}>
        <p>
          Author: <span>{track.username}</span>
        </p>
        <p>
          Title: <span>{track.name}</span>
        </p>
      </div>
    </>
  )
}
export default DisplayTrack
