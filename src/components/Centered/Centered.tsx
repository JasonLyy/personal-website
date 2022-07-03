import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Centered: React.FC = ({ children }) => <Container>{children}</Container>;

export default Centered;
