import * as React from "react";
import "./Nav.css";
import Modal from "./Column/Modal";
import useModal from "./UseModal";

export default function Nav({ addColumn }) {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <nav>
        <div className="menu board-menu">
          <span></span>
          <button className="new-column" onClick={toggle}>
            New column
          </button>
        </div>
      </nav>
      <Modal isShowing={isShowing} hide={toggle} addColumn={addColumn} />
    </>
  );
}
