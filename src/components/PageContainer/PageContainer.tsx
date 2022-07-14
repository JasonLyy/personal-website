import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background: ${(p) => p.theme.colors.background};
  min-height: 100vh;
  border: 1px solid red;
`;

type PageContainerProps = React.ComponentPropsWithRef<'div'>;

const PageContainer: React.ForwardRefRenderFunction<
  HTMLDivElement,
  PageContainerProps
> = (props, ref) => <Container ref={ref} {...props}></Container>;

export default forwardRef<HTMLDivElement, PageContainerProps>(PageContainer);
