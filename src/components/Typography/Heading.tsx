import React from 'react';
import styled from 'styled-components';
import { theme } from '@root/theme';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type CustomHeadingProps = {
  variant: Extract<
    keyof typeof theme.fonts,
    'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6'
  >;
};
type StyledHeadingProps = CustomHeadingProps & HeadingProps;

const StyledHeading = styled['h1']<StyledHeadingProps>`
  font-family: ${(t) => t.theme.fonts[t.variant].fontFamily};
  font-weight: ${(t) => t.theme.fonts[t.variant].fontWeight};
  font-size: ${(t) => t.theme.fonts[t.variant].fontSize};
  line-height: ${(t) => t.theme.fonts[t.variant].lineHeight};
  letter-spacing: ${(t) => t.theme.fonts[t.variant].letterSpacing};
`;
export const Heading: React.VFC<
  CustomHeadingProps & {
    className?: string;
    props?: HeadingProps;
    children: HeadingProps['children'];
  }
> = ({ variant, props, children, className }) => {
  const level = variant.slice(-1);

  return (
    <StyledHeading
      variant={variant}
      as={`h${level}` as React.ElementType}
      className={className}
      {...props}
    >
      {children}
    </StyledHeading>
  );
};
