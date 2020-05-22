import React from 'react';

import StyledButton from './styles';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: string,
}

const Button = ({ children, onClick }: Props) => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
