import { NavLink } from "react-router-dom"
import classes from "./_Navigation.module.scss"
const Navigation = () => {
  return (
    <nav>
      <ul className={classes.Navigation}>
        <li className={classes.NavigationItem}>
          <NavLink to='/doc' activeClassName='is-active'>
            Doc
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
