import { ModalContainer } from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal(props) {
  return (
    <ModalContainer className={props.active === false ? "inactive": null}>
      <div className="text-box">
        <button onClick={props.close}><FontAwesomeIcon icon="fa-solid fa-xmark" /></button>
        {/* <img src="./images/hey.svg" /> */}
        <h2>Atenção!</h2>
        <div className="text">
          <p>Calma lá Cosmonauta, esta não é uma loja de verdade!</p>
          <p>Algumas coisas são apenas decoração, mas quem sabe um dia?</p>
        </div>
      </div>
    </ModalContainer>
  );
}

export default Modal;
