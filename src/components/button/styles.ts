import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  padding: 1.3rem 1.4rem;
  border-radius: .4rem;
  cursor: pointer;
  transition: color 250ms ease-in-out, background 250ms ease-in-out;
  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.bg};
  }
`;

export default StyledButton;
