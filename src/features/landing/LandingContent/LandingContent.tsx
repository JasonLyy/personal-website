import React from 'react';
import styled, { useTheme } from 'styled-components';
import Button from '@components/Button/Button';
import { Heading, Paragraph } from '@components/Typography';

type LandingContentProps = {
  onPromptClick: () => void;
};

const Container = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  height: 100%;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

const HeadingName = styled(Heading)`
  color: ${(p) => p.theme.colors.primary};
  text-align: center;
`;
const HeadingTitle = styled(Heading)`
  color: ${(p) => p.theme.colors.onBackground};
  text-align: center;
`;
const Body = styled(Paragraph)`
  color: ${(p) => p.theme.tokens.colors.grey[500]};
  text-align: center;
`;

const LandingContent: React.VFC<LandingContentProps> = ({ onPromptClick }) => {
  const theme = useTheme();

  return (
    <Container>
      <HeadingName level={0}>Jason Ly</HeadingName>
      <HeadingTitle level={1}>Software Engineer</HeadingTitle>
      <Body variant="large">
        I&apos;m a Software Engineer specialising in developing scalable and
        maintainable backend systems. Currently working at Zeller building the
        next generation of banking for small merchants.
      </Body>
      <Button
        size="large"
        variant="outlined"
        onClick={onPromptClick}
        color={theme.colors.secondary}
      >
        Want to learn more?
      </Button>
    </Container>
  );
};

export default LandingContent;
