import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <button type="button" className="modal-btn" onClick={handleClose}>X</button>
      <div className="modal-main">
        {children}
      </div>
    </div>
  )
}

export default Modal