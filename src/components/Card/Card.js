import { useDispatch } from "react-redux"
import * as actions from "../../store/actions/"
import Button from "../UI/Button/Button"
import classes from "./_Card.module.scss"

const Card = ({ sound }) => {
  const { id, license, name, tags, username } = sound
  const dispatch = useDispatch()
  const onPlaySound = (id) => dispatch(actions.playSound(id))

  return (
    <div className={classes.Card}>
      <div className={classes.Content}>
        <h3>{name}</h3>
        <div>
          <span>Author: {username}</span>
          <span>tags: {tags.join(", ")}</span>
        </div>

        <p>license: {license}</p>
        <Button btnType='Play' clicked={() => onPlaySound(id)}>
          Play
        </Button>
      </div>
    </div>
  )
}

export default Card
