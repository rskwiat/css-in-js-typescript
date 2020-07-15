/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

interface Props {
  text: string
}

const styles = css`
  font-family: sans-serif;
  color: #fff;
  padding: .5rem 1.8rem;
  position: relative;
  z-index: 5;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  margin: 0 0 2rem;
  p {
    margin: 0;
    font-size: 1.4rem;
    span {
      text-transform: capitalize;
    }
`;

const Banner = ({ text }: Props) => (
  <div css={styles}>
    <p>
      Using the <span>{text}</span> Theme
    </p>
  </div>
);

export default Banner;
