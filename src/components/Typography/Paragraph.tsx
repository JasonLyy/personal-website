import React from 'react';
import styled from 'styled-components';

const variantMapping = {
  large: 'paragraphLarge',
  body: 'paragraphBody',
  s: 'paragraphSmall',
  xs: 'paragraphExtraSmall',
} as const;

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
type CustomParagraphProps = {
  variant: keyof typeof variantMapping;
};
type StyledParagraph = CustomParagraphProps & ParagraphProps;

const StyledParagraph = styled['p']<StyledParagraph>`
  font-family: ${(t) =>
    t.theme.tokens.fonts[variantMapping[t.variant]].fontFamily};
  font-weight: ${(t) =>
    t.theme.tokens.fonts[variantMapping[t.variant]].fontWeight};
  font-size: ${(t) => t.theme.tokens.fonts[variantMapping[t.variant]].fontSize};
  line-height: ${(t) =>
    t.theme.tokens.fonts[variantMapping[t.variant]].lineHeight};
  letter-spacing: ${(t) =>
    t.theme.tokens.fonts[variantMapping[t.variant]].letterSpacing};
`;
export const Paragraph: React.VFC<
  Partial<CustomParagraphProps> & {
    className?: string;
    props?: ParagraphProps;
    children: ParagraphProps['children'];
  }
> = ({ variant = 'body', props, children, className }) => {
  return (
    <StyledParagraph variant={variant} className={className} {...props}>
      {children}
    </StyledParagraph>
  );
};
