import React from 'react'

import One from '../Card/One'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

export default function Gallery() {
  return (
    <>
    <CardWrapper>
      <One />
      <One />
      <One />
    </CardWrapper>
    <CardWrapper>
      <One />
      <One />
      <One />
    </CardWrapper>
  </>
  )
}

