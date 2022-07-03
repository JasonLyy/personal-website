import React from 'react';
import LandingContent from './LandingContent/LandingContent';

type LandingProps = {
  onPromptClick: () => void;
};

export const Landing: React.VFC<LandingProps> = ({ onPromptClick }) => (
  <LandingContent onPromptClick={onPromptClick} />
);

export default Landing;
