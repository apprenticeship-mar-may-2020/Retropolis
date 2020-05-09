import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ isShowing, hide, addColumn }) {
  const [newColumnName, setNewColumnName] = useState("");

  function handleChange(e) {
    setNewColumnName(e.target.value);
  }

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">New column</div>
              <div className="modal-content">
                <input
                  className="modal-input"
                  placeholder="enter column name"
                  onChange={handleChange}
                />
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="modal-open-button"
                  data-dismiss="modal"
                  aria-label="Save"
                  onClick={() => {
                    addColumn(newColumnName);
                    hide();
                  }}
                >
                  OK
                </button>

                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
}
