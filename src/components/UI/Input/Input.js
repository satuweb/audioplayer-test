import classes from "./_Input.module.scss"

const Input = ({ value, placeholder, onChangeParams }) => (
  <div className={classes.Input}>
    <input
      className={classes.InputElement}
      value={value}
      placeholder={placeholder}
      onChange={onChangeParams}
    />
  </div>
)

export default Input
