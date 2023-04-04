// import axios from '../fetchData/axios-records'
// import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler'
import List from "../components/List/List"
import SearchBar from "../components/SearchBar/SearchBar"
import Pagination from "../components/Pagination/Pagination"
import Player from "../components/Player/Player"

const Sounds = () => {
  return (
    <section>
      <SearchBar />
      <div className='inset-container'>
        <List />
        <Pagination />
      </div>
      <Player />
    </section>
  )
}

export default Sounds
