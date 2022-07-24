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
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(164deg)
    brightness(104%) contrast(101%); // #FFFFFF;
`;

export const SocialLinks: React.VFC = () => {
  return (
    <Container>
      <a href="https://www.linkedin.com/in/jason-lyy/">
        <Icon src={LinkedinPic} />
      </a>
      <a href="https://github.com/JasonLyy">
        <Icon src={GitHubPic} />
      </a>
    </Container>
  );
};
