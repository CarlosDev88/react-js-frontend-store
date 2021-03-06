import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--ligthBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--ligthBlue)"};
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--ligthBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainYellow);
    color: var(--mainWhite);
    border: 0.05rem solid var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
