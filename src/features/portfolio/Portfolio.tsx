import { Heading, Paragraph } from '@components/Typography';
import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import Image from 'next/future/image';
import VerbPic from '@root/public/verb.png';
import AirbnbClonePic from '@root/public/airbnb_clone.png';
import GitHubPic from '@root/public/github.svg';
import NextImage from '@components/NextImage/NextImage';

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const PortfolioItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-self: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PortfolioItem = styled.a<{ imageUrl?: string }>`
  width: 400px;
  height: 400px;
  background: ${(p) => (p.imageUrl ? `url(${p.imageUrl})` : `white`)};
  background-size: cover;
  background-repeat: no-repeat;
  margin: ${(p) => p.theme.tokens.spacing.md};
  border-radius: 16px;
  transition: 0.5s;
  color: ${(p) => p.theme.colors.onSurface};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background: none;
    background-color: ${(p) => p.color ?? rgba(p.theme.colors.primary, 0.2)};
    cursor: pointer;
  }

  &:hover * {
    display: block;
  }
`;

const PortfolioItemContent = styled.div`
  display: none;
  margin: ${(p) => p.theme.tokens.spacing.md};
`;

const List = styled.ul`
  margin: 0;
`;

const GithubImage = styled(NextImage)`
  width: 80%;
  height: 80%;
  object-fit: contain;
  object-position: center;
  border-radius: 16px;
`;

const ListItem = styled.li`
  font-size: ${(p) => p.theme.tokens.fonts.paragraphSmall.fontSize};
  font-family: ${(p) => p.theme.tokens.fonts.paragraphSmall.fontFamily};
  font-weight: ${(p) => p.theme.tokens.fonts.paragraphSmall.fontWeight};
  line-height: ${(p) => p.theme.tokens.fonts.paragraphSmall.lineHeight};
  letter-spacing: ${(p) => p.theme.tokens.fonts.paragraphSmall.letterSpacing};
`;

export const Portfolio: React.VFC = () => {
  return (
    <Container>
      <Heading level={1}>Portfolio</Heading>
      <PortfolioItems>
        <PortfolioItem
          imageUrl={VerbPic.src}
          href="https://verbconnect.webflow.io/"
        >
          <PortfolioItemContent>
            <Heading level={2}>Verb Connect</Heading>

            <Heading level={4}>Summary</Heading>
            <Paragraph variant="body">
              Verb Connect is a social networking application designed to
              connect like minded university age students together.
              <br />
              <br />
              As one of the first developers, I mainly work across the mobile
              app, strategy and product development.
            </Paragraph>

            <Heading level={4}>Tech Stack</Heading>
            <List>
              <ListItem>Flutter</ListItem>
              <ListItem>AWS / Firebase</ListItem>
            </List>
          </PortfolioItemContent>
        </PortfolioItem>
        <PortfolioItem
          imageUrl={AirbnbClonePic.src}
          href="https://github.com/JasonLyy/airbnb-clone"
        >
          <PortfolioItemContent>
            <Heading level={2}>Airbnb Clone</Heading>

            <Heading level={4}>Summary</Heading>
            <Paragraph variant="body">
              A clone of Airbnb to play around with different technologies. It
              features a GraphQL backend, JWT authentication (with credential
              invalidation), a basic frontend all deployable on AWS via CDK.
            </Paragraph>

            <Heading level={4}>Tech Stack</Heading>
            <List>
              <ListItem>
                Backend (go, echo, gqlgen, gorm, Postgres, Docker, Redis)
              </ListItem>
              <ListItem>
                Frontend (React, TypeScript, Styled Components, React Query,
                Webpack)
              </ListItem>
              <ListItem>
                Cloud: CDK - App deployed in a 2-AZ VPC behind a private subnet
                connected to Fargate, ElasiCache and RDS
              </ListItem>
            </List>
          </PortfolioItemContent>
        </PortfolioItem>
        <PortfolioItem href="https://github.com/JasonLyy/">
          <GithubImage src={GitHubPic} />
        </PortfolioItem>
      </PortfolioItems>
    </Container>
  );
};
