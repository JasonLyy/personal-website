import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(p) =>
    p.primary ? p.theme.colors.pink[1000] : p.theme.colors.blue[1000]};
`;

interface ButtonProps {
  primary?: boolean;
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary }: ButtonProps) => {
  return <StyledButton primary={primary}>Button</StyledButton>;
};
