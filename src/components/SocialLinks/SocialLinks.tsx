import React from 'react';
import styled from 'styled-components';

import LinkedinPic from '@root/public/linkedin.svg';
import GitHubPic from '@root/public/github.svg';
import NextImage from '@components/NextImage/NextImage';

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
`;

const Icon = styled(NextImage)`
  width: 48px;
  height: 48px;
  object-position: center;
  filter: invert(78%) sepia(0%) saturate(1222%) hue-rotate(146deg)
    brightness(79%) contrast(91%); /* #999999 */
`;

export const SocialLinks: React.VFC = () => {
  return (
    <Container>
      <a
        href="https://www.linkedin.com/in/jason-lyy/"
        aria-label="Linkedin link"
      >
        <Icon src={LinkedinPic} alt="Linkedin icon" />
      </a>
      <a href="https://github.com/JasonLyy" aria-label="Github link">
        <Icon src={GitHubPic} alt="Github icon" />
      </a>
    </Container>
  );
};
