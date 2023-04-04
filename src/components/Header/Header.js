import Navigation from "../Navigation/Navigation"
import classes from "./_Header.module.scss"

const Header = () => {
  return (
    <header className={classes.Header}>
      <h1 className={classes.Logo}>FreeSound</h1>
      <Navigation />
    </header>
  )
}

export default Header
