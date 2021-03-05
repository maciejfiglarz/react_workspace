import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { ReactComponent as Scene } from '../../../assets/scene.svg';
import './style.css';

const StyledWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Animation = () => {
  const myRef = useRef(null);
  useEffect(() => {
    const [elements] = myRef.current.children;

    const sun = elements.getElementById('sun');
    const trees = elements.getElementById('trees');
    gsap.set([sun, trees.children], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { easy: 'power3.in' } });

    tl.to(sun, { autoAlpha: 1 }).to(trees.children, { duration: 3, autoAlpha:1, stagger: 0.7 });
  });

  return (
    <StyledWrapper>
      <div ref={myRef} className="element">
        <Scene />
      </div>
    </StyledWrapper>
  );
};

export default Animation;
