import styled from 'styled-components';

export const TopImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SiteTitle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font-size: 50px;
  text-align: right;
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  margin-right: 50px;
`;

export const AstronautContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 120px;
  transform: scale(2);
`;