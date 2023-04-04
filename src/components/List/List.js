import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../store/actions/index"
import axios from "../../fetchData/axios-records"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"
import Card from "../Card/Card"
import Spinner from "../UI/Spinner/Spinner"
import classes from "./_List.module.scss"

const List = () => {
  const dispatch = useDispatch()
  const sounds = useSelector((state) => state.soundsReducer.sounds)
  const params = useSelector((state) => state.searchReducer.params)
  const loading = useSelector((state) => state.soundsReducer.loading)

  useEffect(() => {
    dispatch(actions.fetchSounds(params))
  }, [dispatch, params])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      {sounds.length > 0 && (
        <ul className={classes.List}>
          {sounds.map((sound) => (
            <li key={sound.id}>
              <Card {...{ sound }} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default withErrorHandler(List, axios)
