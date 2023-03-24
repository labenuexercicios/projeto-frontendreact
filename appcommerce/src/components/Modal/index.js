
import React, { useRef, useEffect, useCallback } from 'react';
import { 
  Background, 
  ModalWrapper,
  ModalImg,
  ModalContent, 
  CloseModalButton
} from './styled'

const Modal = ({ 
  showModal, 
  setShowModal,
  productModal,

 }) => {

  /* console.log(productModal.imageUrl) */
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
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
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
            <ModalWrapper showModal={showModal}>
              <ModalImg  />
              <ModalContent>
              <h2>{productModal.name}</h2>
              <p>{productModal.description}</p>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
};

export default Modal

