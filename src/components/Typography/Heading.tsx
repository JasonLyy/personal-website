import React from 'react';
import styled from 'styled-components';

const levelMapping = {
  0: 'heading0',
  1: 'heading1',
  2: 'heading2',
  3: 'heading3',
  4: 'heading4',
  5: 'heading5',
  6: 'heading6',
} as const;

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type CustomHeadingProps = {
  level: keyof typeof levelMapping;
};
type StyledHeadingProps = CustomHeadingProps & HeadingProps;

const StyledHeading = styled['h1']<StyledHeadingProps>`
  font-family: ${(t) => t.theme.tokens.fonts[levelMapping[t.level]].fontFamily};
  font-weight: ${(t) => t.theme.tokens.fonts[levelMapping[t.level]].fontWeight};
  font-size: ${(t) => t.theme.tokens.fonts[levelMapping[t.level]].fontSize};
  line-height: ${(t) => t.theme.tokens.fonts[levelMapping[t.level]].lineHeight};
  letter-spacing: ${(t) =>
    t.theme.tokens.fonts[levelMapping[t.level]].letterSpacing};
  color: ${(t) => t.theme.colors.primary};
  margin: 0;
`;
export const Heading: React.VFC<
  CustomHeadingProps & {
    className?: string;
    props?: HeadingProps;
    children: HeadingProps['children'];
  }
> = ({ level = 1, props, children, className }) => {
  return (
    <StyledHeading
      level={level}
      as={`h${level}` as React.ElementType}
      className={className}
      {...props}
    >
      {children}
    </StyledHeading>
  );
};
