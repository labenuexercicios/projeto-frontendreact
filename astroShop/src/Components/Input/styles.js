import styled from "styled-components";

export const Container = styled.div`
height: 48px;
position: relative;
display: flex;
align-items: center;

background: rgba(255, 255, 255, 0.02);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 8px;
padding: 0 15px;

color: var(--color-text);

/* :focus-within {
  border: 1px solid var(--color-primary);
} */
input {
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 12px;
}
label {
  display: flex;
  align-items: center;
  height: 100%;

  position: absolute;
  top: 0;
  left: 12px;

  transition: top 0.5s, left 0.3s;
}
input:focus + label,
input:not(:placeholder-shown) + label {
  top: -12px;
  left: 10px;

  height: fit-content;
  background: var(--color-primary);

  padding: 3px 10px;
  border-radius: 14px;

  color: #000;
  font-size: 14px;
}

svg {
  width: 18px;
  height: 18px;
}

& + & {
  margin-top: 12px;
}
`;