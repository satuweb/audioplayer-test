import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../store/actions/"
import Input from "../UI/Input/Input"
import Button from "../UI/Button/Button"

import classes from "./_SearchBar.module.scss"

const SearchBar = () => {
  const dispatch = useDispatch()
  const params = useSelector((state) => state.searchReducer.params)
  const onParamsChange = (event) =>
    dispatch(actions.updateSearch({ params: event.target.value }))
  const onResetSearch = () => dispatch(actions.initSearch())
  return (
    <div className={classes.SearchBar}>
      <Input
        placeholder='Search'
        value={params}
        onChangeParams={onParamsChange}
      />
      {params && (
        <Button btnType='Close' clicked={onResetSearch}>
          X
        </Button>
      )}
    </div>
  )
}

export default SearchBar
