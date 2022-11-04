import styled from 'styled-components'


export const HeaderContainer = styled.main`
    display: flex;
    position: fixed;
    // background: rgb(13, 98, 138);
    background-image: linear-gradient(to right, rgb(13, 98, 138) , rgb(130, 98, 138) , rgb(13, 98, 138));
    border: 2px solid rgb(102, 202, 248);
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(102, 202, 248);
    border-bottom-left-radius : 30px;
    border-bottom-right-radius : 30px;
    height: 70px;
    width: 100%;
    z-index: 1;

::before {
    content: " ";
    position: fixed;
    // top: 0;
    // left: 0;
    // bottom: 0;
    // right: 0;
    height: 70px;
    width: 100%;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    border-bottom-left-radius : 30px;
    border-bottom-right-radius : 30px;
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }
  @keyframes flicker {
    0% {
    opacity: 0.27861;
    }
    5% {
    opacity: 0.34769;
    }
    10% {
    opacity: 0.23604;
    }
    15% {
    opacity: 0.90626;
    }
    20% {
    opacity: 0.18128;
    }
    25% {
    opacity: 0.83891;
    }
    30% {
    opacity: 0.65583;
    }
    35% {
    opacity: 0.67807;
    }
    40% {
    opacity: 0.26559;
    }
    45% {
    opacity: 0.84693;
    }
    50% {
    opacity: 0.96019;
    }
    55% {
    opacity: 0.08594;
    }
    60% {
    opacity: 0.20313;
    }
    65% {
    opacity: 0.71988;
    }
    70% {
    opacity: 0.53455;
    }
    75% {
    opacity: 0.37288;
    }
    80% {
    opacity: 0.71428;
    }
    85% {
    opacity: 0.70419;
    }
    90% {
    opacity: 0.7003;
    }
    95% {
    opacity: 0.36108;
    }
    100% {
    opacity: 0.24387;
    }
  }
  
  ::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: flicker 0.15s infinite;
  }

  @keyframes textShadow {
    0% {
      text-shadow: 0.5px 0 1px rgba(0,30,255,0.5), -0.5px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    5% {
      text-shadow: 2.8px 0 1px rgba(0,30,255,0.5), -2.8px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    10% {
      text-shadow: 0.03px 0 1px rgba(0,30,255,0.5), -0.03px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    15% {
      text-shadow: 0.4px 0 1px rgba(0,30,255,0.5), -0.4px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    20% {
      text-shadow: 3.48px 0 1px rgba(0,30,255,0.5), -3.48px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    25% {
      text-shadow: 1.6px 0 1px rgba(0,30,255,0.5), -1.6px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    30% {
      text-shadow: 0.7px 0 1px rgba(0,30,255,0.5), -0.7px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    35% {
      text-shadow: 3.9px 0 1px rgba(0,30,255,0.5), -3.9px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    40% {
      text-shadow: 3.87px 0 1px rgba(0,30,255,0.5), -3.87px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    45% {
      text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    50% {
      text-shadow: 0.08px 0 1px rgba(0,30,255,0.5), -0.08px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    55% {
      text-shadow: 2.37px 0 1px rgba(0,30,255,0.5), -2.37px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    60% {
      text-shadow: 2.2px 0 1px rgba(0,30,255,0.5), -2.2px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    65% {
      text-shadow: 2.86px 0 1px rgba(0,30,255,0.5), -2.86px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    70% {
      text-shadow: 0.5px 0 1px rgba(0,30,255,0.5), -0.5px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    75% {
      text-shadow: 1.9px 0 1px rgba(0,30,255,0.5), -1.9px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    80% {
      text-shadow: 0.08px 0 1px rgba(0,30,255,0.5), -0.08px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    85% {
      text-shadow: 0.1px 0 1px rgba(0,30,255,0.5), -0.1px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    90% {
      text-shadow: 3.44px 0 1px rgba(0,30,255,0.5), -3.44px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    95% {
      text-shadow: 2.2px 0 1px rgba(0,30,255,0.5), -2.2px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    100% {
      text-shadow: 2.62px 0 1px rgba(0,30,255,0.5), -2.62px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
  }

    animation: textShadow 1.6s infinite;

  `