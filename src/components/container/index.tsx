import React from 'react';

import StyledContainer from './styles';

interface Props {
  children: object
}

const Container = ({ children }: Props) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
