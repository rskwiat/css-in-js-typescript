/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: string,
}

const Button = ({ children, onClick }: Props) => (
  <button
    css={(theme) => ({
      background: 'none',
      fontSize: '1.5rem',
      color: theme.text,
      border: `1px solid ${theme.text}`,
      padding: '1.3rem 1.4rem',
      borderRadius: '.4rem',
      cursor: 'pointer',
      transition: 'color 250ms ease-in-out, background 250ms ease-in-out',
      focus: 'none',
      '&:hover': {
        background: theme.text,
        color: theme.bg,
      },
      '&:focus': {
        outline: 'none',
      },
    })}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);


export default Button;
