import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: ${(t) => t.theme.tokens.spacing.md} 0;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.primary};

  :hover {
    cursor: pointer;
    color: ${(t) => t.theme.colors.secondary};
  }
`;

type NavbarItemProps = {
  onClick: () => void;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({
  onClick,
  children,
}) => {
  return (
    <Container>
      <Anchor onClick={onClick}>{children}</Anchor>
    </Container>
  );
};
