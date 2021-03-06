import React from 'react'
import styled, { keyframes } from 'styled-components'

import likeSpriteSrc from '../../../assets/like-sprite.png'

const LikeSprite = () => {
  return (
    <Wrapper>
      <Img src={likeSpriteSrc} />
    </Wrapper>
  )
}

const backgroundAnimation = keyframes`
  to {
    transform: translateX(-4896px);
  }
`

const Wrapper = styled.div`
  width: 144px;
  height: 144px;
  background: white;
  overflow: hidden;
  margin: auto;
`

const Img = styled.img`
  height: 100%;
  animation: ${backgroundAnimation} 1000ms steps(34) infinite;
`

export default LikeSprite
