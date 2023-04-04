import classes from "./_Backdrop.module.scss"

const Backdrop = ({ show, clicked }) =>
  show ? <div className={classes.Backdrop} onClick={clicked}></div> : null

export default Backdrop
