import React from 'react';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

type ButtonProps = {
  variant: 'outlined';
  size: 'large';
  color?: string;
  onClick: () => void;
};

const StyledButton = styled.button<Partial<ButtonProps>>`
  background-color: transparent;
  color: ${(p) => p.color ?? p.theme.colors.primary};

  padding: ${(p) => p.theme.tokens.spacing.md};

  font-family: ${(p) => p.theme.tokens.fonts.heading4};

  border: 1px solid ${(p) => p.color};
  border-radius: 8px;

  cursor: pointer;

  ${({ variant }) =>
    variant === 'outlined' &&
    css`
      outline: none;
    `}

  &:hover {
    background-color: ${(p) =>
      p.color ? rgba(p.color, 0.2) : rgba(p.theme.colors.primary, 0.2)};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, color, onClick }) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
