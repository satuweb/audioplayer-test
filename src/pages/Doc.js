import classes from "./_Pages.module.scss"
const Doc = () => (
  <section>
    <h1 className={classes.Title}>Project info</h1>
    <div className={classes.Content}>
      For this project I used the following libraries:
      <ul>
        <li>Axios for HTTP requests</li>
        <li> Redux as state manager </li>
        <li> Redux Saga as middleware for asynchronous calls</li>
        <li>React Router for application routing</li>
      </ul>
      <p>
        For server error handling I built a custom hook that is used by the
        withErrorHandle HOC, which wraps the List component to intercept server
        errors. For the Pagination component I used the react-paginate package
        (https://github.com/AdeleD/react-paginate)
      </p>
    </div>
  </section>
)

export default Doc
