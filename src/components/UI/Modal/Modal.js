import React from "react"
import Backdrop from "../Backdrop/Backdrop"

import classes from "./_Modal.module.scss"

const Modal = ({ show, modalClosed, children }) => (
  <>
    <Backdrop show={show} clicked={modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? "translateY(0)" : "translateY(-100vh)",
        opacity: show ? "1" : "0"
      }}
    >
      {children}
    </div>
  </>
)

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
)
