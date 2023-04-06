
import React, { useRef, useEffect, useCallback } from 'react';
import { 
  Background, 
  ModalWrapper,
  ModalContent, 
  CloseModalButton,
} from './styled'

const Modal = ({ 
  openModal,
  setOpenModal,
  product,
}) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && openModal) {
        setOpenModal(false);
      }
    },
    [setOpenModal, openModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <div>
      {openModal ? (
        <Background onClick={closeModal} ref={modalRef}>
            <ModalWrapper>
              <ModalContent>
              <img src={product.imageUrl} alt="product"/>
              <div>
                <h2>{product.name}</h2> 
                <p>{product.description}</p>
                <h6>
                  <strong>Categoria:</strong> {product.category}
                </h6>
                <h3>R$ {product.value.toFixed(2).replace(".", ",")}</h3>
                <h5>
                  <strong>
                  Ou em 12x de{" "}
                  {(product.value / 3).toFixed(2).replace(".", ",")}
                  </strong> 
                </h5>
              </div>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setOpenModal(prev => !prev)}
              />
            </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
};

export default Modal

