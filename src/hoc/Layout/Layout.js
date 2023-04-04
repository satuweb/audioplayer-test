import Header from "../../components/Header/Header"
import classes from "./_Layout.module.scss"

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={classes.Main}>{props.children}</main>
    </>
  )
}

export default Layout
