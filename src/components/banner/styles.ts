import styled from 'styled-components';

const StyledBanner = styled.div`
  background: ${(props) => props.theme.banner};
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
  }
`;

export default StyledBanner;
