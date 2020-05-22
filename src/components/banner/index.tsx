import React from 'react';

import StyledBanner from './styles';

interface Props {
  text: string
}

const Banner = ({ text }: Props) => (
  <StyledBanner>
    <p>
      Using the
      <span>{text}</span>
      Theme
    </p>
  </StyledBanner>
);

export default Banner;
