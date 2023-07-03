import React from 'react';
import { TopImageContainer, SiteTitle, AstronautContainer } from './HeaderStyle';
import wallpaperImage from '../img/Wallpaper.jpg';
import astronaut from '../img/astronaut.svg';

export default function Header() {
  return (
    <div>
      <TopImageContainer style={{ backgroundImage: `url(${wallpaperImage})` }}>
        <AstronautContainer>
          <img src={astronaut} alt='astronaut' />
        </AstronautContainer>
      </TopImageContainer>
      <SiteTitle>Camisetas Outer Space</SiteTitle>
    </div>
  );
}
