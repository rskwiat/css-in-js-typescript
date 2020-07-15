/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const styles = css`
  margin: 2rem auto;
  max-width: 800px;
  padding: 0 2rem;
`;

interface Props {
  children: object
}

const Container = ({ children }: Props) => (
  <div css={styles}>{children}</div>
);

export default Container;
