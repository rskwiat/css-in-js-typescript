/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import { jsx } from '@emotion/core';

interface Props {
  text: string
}

const Banner = ({ text }: Props) => (
  <div css={(theme) => ({
    background: theme.banner,
    color: '#fff',
    fontFamily: 'sans-serif',
    padding: '.5rem 1.8rem',
    zIndex: 5,
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    margin: '0 0 2rem',
    p: {
      margin: 0,
      fontSize: '1.4rem',
      span: {
        textTransform: 'capitalize',
      },
    },
  })}
  >
    <p>
      Using the <span>{text}</span> Theme
    </p>
  </div>
);

export default Banner;
