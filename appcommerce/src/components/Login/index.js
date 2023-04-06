
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { 
  Background, 
  ModalWrapper,
  ModalContent, 
  CloseModalButton,
  EyeIcon,
  EyeInvisibleIcon,
  FormLogin,
  Input,
  Label,
  Link,
  Button,
} from './styled'

const LoginModal = ({ 
  openLoginModal,
  setOpenLoginModal,
  handleScreen,
}) => {
  const modalRef = useRef();

  const closeLoginModal = e => {
    if (modalRef.current === e.target) {
      setOpenLoginModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && openLoginModal) {
        setOpenLoginModal(false);
        console.log("esc")
      }
    },
    [setOpenLoginModal, openLoginModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handleInputPassword = (event) => {
    setInputPassword(event.target.value);
  };

  const [showPassword, SetShowPassword] = useState("password");
  const handleShowPassword = (type) => {
    SetShowPassword(type);
  };

  return (
    <div>
      {openLoginModal ? (
        <Background onClick={closeLoginModal} ref={modalRef} handleScreen={handleScreen}>
            <ModalWrapper>
                <ModalContent>
                    <h1>Login</h1>
                    <FormLogin>
                        <Label htmlFor="email">
                            <p>Email:</p>
                            <Input
                                type="email"
                                placeholder="seunome@email.com.br"
                                id="email"
                                required
                                value={inputEmail}
                                onChange={handleInputEmail}
                            />
                        </Label>
                        <Label htmlFor="password">
                            <p>Senha:</p>
                            {showPassword === "password" ? (
                                <EyeIcon onClick={() => handleShowPassword("text")} />
                            ) : (
                                <EyeInvisibleIcon
                                onClick={() => handleShowPassword("password")}
                                />
                            )}
                            <Input
                                type={showPassword}
                                id="password"
                                value={inputPassword}
                                onChange={handleInputPassword}
                                required
                            />
                        </Label>
                        <Link href="#">Esqueceu a senha?</Link>
                        <Button type="submit">Iniciar sessão</Button>
                        <h4> Não possui uma conta ainda?{" "}
                            <Link href="#" onClick={() => handleScreen(5)}>
                                Cadastre-se
                            </Link>
                        </h4>
                    </FormLogin>
                </ModalContent>
                <CloseModalButton
                    aria-label='Close modal'
                    onClick={() => setOpenLoginModal(prev => !prev)}
                />
            </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
};

export default LoginModal

