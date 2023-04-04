import classes from "./_Spinner.module.scss"

const Spinner = () => (
  <div className={classes.WrapperLoader}>
    <div className={classes.Loader}>Loading...</div>
  </div>
)

export default Spinner
