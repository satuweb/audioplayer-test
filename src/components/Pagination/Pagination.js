import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../store/actions/index"
import ReactPaginate from "react-paginate"
import classes from "./_Pagination.module.scss"

const Paginate = () => {
  const sounds = useSelector((state) => state.soundsReducer.sounds)
  const total = useSelector((state) => state.soundsReducer.total)
  const params = useSelector((state) => state.searchReducer.params)

  const dispatch = useDispatch()
  const onChangePage = ({ selected }) => {
    const pageNumber = selected + 1 || 1
    dispatch(actions.fetchSounds(params, pageNumber))
  }

  return (
    sounds.length > 0 && (
      <ReactPaginate
        onPageChange={onChangePage}
        pageCount={Math.ceil(total / sounds.length)}
        previousLabel={"Prev"}
        nextLabel={"Next"}
        containerClassName={classes.Pagination}
        pageLinkClassName={classes.PaginationItem}
        previousLinkClassName={classes.PaginationItem}
        nextLinkClassName={classes.PaginationItem}
        activeLinkClassName={classes.PaginationItemActive}
        renderOnZeroPageCount={() => null}
      />
    )
  )
}

export default Paginate
