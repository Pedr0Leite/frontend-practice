import React from 'react';
import * as Styled from './ParallaxComponent.styled';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import backGround from '../assets/background.png';
import jungle1 from '../assets/jungle1.png';
import jungle2 from '../assets/jungle2.png';
import jungle3 from '../assets/jungle3.png';
import jungle4 from '../assets/jungle4.png';
import jungle5 from '../assets/jungle5.png';
import logoAndLand from '../assets/logo_land.png';
import manOnMountain from '../assets/man_on_mountain.png';
import mountains from '../assets/mountains.png';
import TextBlock from './TextBlock';

function ParallaxComponent() {
  return (
<Parallax pages={2} style={{ top: '0', left: '0' }} className='animation'>
      <ParallaxLayer offset={0} speed={0.25}>
        <div className="animation_layer parallax" id=""></div>
        <Styled.AnimationLayer className='parallax' id="artback" image={backGround} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <Styled.AnimationLayer className='parallax' id="mountain" image={mountains} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.1}>
        <Styled.AnimationLayer className='parallax' id="logoland" image={logoAndLand} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <Styled.AnimationLayer className='parallax' id="jungle1" image={jungle1} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <Styled.AnimationLayer className='parallax' id="jungle2" image={jungle2} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <Styled.AnimationLayer className='parallax' id="jungle3" image={jungle3} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.45}>
        <Styled.AnimationLayer className='parallax' id="jungle4" image={jungle4} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <Styled.AnimationLayer className='parallax' id="manonmountain" image={manOnMountain} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <Styled.AnimationLayer className='parallax' id="jungle5" image={jungle5} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.25}>
        <TextBlock />
      </ParallaxLayer>
    </Parallax>

  );
}

export default ParallaxComponent;
