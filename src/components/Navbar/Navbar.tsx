import useScrollPosition from '@root/hooks/useScrollPosition';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ isScrolled: boolean }>`
  height: 56px;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: ${(p) =>
    p.isScrolled ? '0 4px 4px rgba(0, 0, 0, 0.1)' : undefined};

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: 0.25s ease-out 0s 1 slideInFromTop;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: ${(t) => t.theme.tokens.spacing.lg};
  font: ${(t) => t.theme.tokens.fonts.heading4};
  width: 90%;
  margin: 0 auto;
`;

export const Navbar: React.FC = ({ children }) => {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;

  if (!isScrolled) {
    return <></>;
  }

  return (
    <>
      <Container isScrolled={isScrolled}>
        <ItemContainer>{children}</ItemContainer>
      </Container>
    </>
  );
};
