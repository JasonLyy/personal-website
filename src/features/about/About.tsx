import { Heading, Paragraph } from '@components/Typography';
import React from 'react';
import styled from 'styled-components';
import ProfilePic from '@root/public/profile_pic.jpg';
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

const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutText = styled.div`
  width: 65%;
  color: ${(p) => p.theme.colors.onBackground};
`;

const ProfileImageContainer = styled.div`
  padding: ${(p) => p.theme.tokens.spacing.md};

  align-self: flex-start;
  justify-self: center;

  @media (max-width: 768px) {
    align-self: center;
    justify-self: flex-start;
  }
`;

const PofileImage = styled(NextImage)`
  max-width: 300px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 16px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const List = styled.ul`
  margin: 0;
`;

const ListItem = styled.li`
  word-wrap: break-word;
  font-size: ${(p) => p.theme.tokens.fonts.paragraphLarge.fontSize};
  font-family: ${(p) => p.theme.tokens.fonts.paragraphLarge.fontFamily};
  font-weight: ${(p) => p.theme.tokens.fonts.paragraphLarge.fontWeight};
  line-height: ${(p) => p.theme.tokens.fonts.paragraphLarge.lineHeight};
  letter-spacing: ${(p) => p.theme.tokens.fonts.paragraphLarge.letterSpacing};
`;

export const About: React.VFC = () => {
  return (
    <Container>
      <Heading level={1}>About Me</Heading>

      <AboutContent>
        <ProfileImageContainer>
          <PofileImage src={ProfilePic} />
        </ProfileImageContainer>
        <AboutText>
          <Paragraph variant="large">
            Hi there! I&apos;m{' '}
            <span style={{ textDecoration: 'line-through' }}>JSON</span> Jason
            and I enjoy building high impact applications. My software
            engineering career began just before COVID-19 where I had the
            opportunity to work at SEEK and also at a SaaS scale-up which
            allowed me to build a wealth of experience in all stages of software
            development.
          </Paragraph>

          <Paragraph variant="large">
            Today, I&apos;m currently a Software Engineer at Zeller; the next
            generation of banking for small Merchants. I primarily work on the
            backend building out secure and highly scalable features.
          </Paragraph>

          <Paragraph variant="large">
            These are some of the technologies I have worked with recently:
          </Paragraph>

          <ListContainer>
            <div>
              <Paragraph variant="large">Frontend</Paragraph>
              <List>
                <ListItem>React Typescript</ListItem>
                <ListItem>Webpack</ListItem>
                <ListItem>SCSS</ListItem>
                <ListItem>Apollo GraphQL</ListItem>
                <ListItem>Jest/Enzyme</ListItem>
                <ListItem>Storybook</ListItem>
              </List>
            </div>
            <div>
              <Paragraph variant="large">Backend</Paragraph>
              <List>
                <ListItem>Typescript - node.js/next.js</ListItem>
                <ListItem>PHP - Symfony</ListItem>
                <ListItem>graphQL</ListItem>
                <ListItem>SQL - Postgres</ListItem>
                <ListItem>NoSQL - DynamoDB (Single table design)</ListItem>
                <ListItem>AWS</ListItem>
                <ListItem>CQRS/Event driven design</ListItem>
              </List>
            </div>
          </ListContainer>
          <Paragraph variant="large">
            I&apos;m passionate about building things that last (think Clean
            Architecture) and the best way to do that is to experiment and
            build. In my spare time I also enjoy building things and testing out
            different technologies. Right now, I&apos;m also working with a
            bunch of friends to build out a social platform which aims to
            connect young and like minded peers together.
          </Paragraph>

          <Paragraph variant="large">
            Technologies I have a particular interest in and worked with outside
            of work include:
          </Paragraph>
          <List>
            <ListItem>Flutter - riverpod</ListItem>
            <ListItem>Golang - gorm, echo, gqlgen</ListItem>
          </List>
        </AboutText>
      </AboutContent>
    </Container>
  );
};

export default About;
