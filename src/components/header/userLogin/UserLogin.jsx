import loginImg from "../../../Img/General/Login.png";
import { LoginImgStyled } from "./style";
import { LoginContainer } from "./style";
import { LoginButtons } from "./style";
import { ButtonLogin } from "./style";
import { ButtonSingUp } from "./style";

export default function UserLogin() {
  return (
    <LoginContainer>
      <LoginImgStyled src={loginImg} alt=""></LoginImgStyled>

      <LoginButtons>
        <ButtonLogin>Login</ButtonLogin>
        <ButtonSingUp>Sing up</ButtonSingUp>
      </LoginButtons>
    </LoginContainer>
  );
}
