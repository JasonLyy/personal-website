import type { NextPage } from 'next';
import { Navbar } from '@components/Navbar';
import styled from 'styled-components';
import { useRef } from 'react';
import PageContainer from '@components/PageContainer/PageContainer';
import { NavbarItem } from '@components/Navbar/NavbarItem';
import { Landing } from '@root/features/landing';
import { About } from '@root/features/about';
import { Portfolio } from '@root/features/portfolio';
import { SocialLinks } from '@components/SocialLinks';

const IndexPage = styled(PageContainer)`
  scroll-margin-top: 56px;
`;
const AboutPage = styled(PageContainer)`
  scroll-margin-top: 56px;
`;
const PortfolioPage = styled(PageContainer)`
  scroll-margin-top: 56px;
`;

const Home: NextPage = () => {
  const indexRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const navBar = (
    <Navbar>
      <NavbarItem
        onClick={() =>
          indexRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        Home
      </NavbarItem>
      <NavbarItem
        onClick={() =>
          aboutRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        About Me
      </NavbarItem>
      <NavbarItem
        onClick={() =>
          portfolioRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        Portfolio
      </NavbarItem>
      <NavbarItem onClick={() => window.open('mailto:ly.jason.1999@gmail.com')}>
        Contact
      </NavbarItem>
    </Navbar>
  );

  return (
    <>
      <IndexPage ref={indexRef}>
        <Landing
          onPromptClick={() =>
            aboutRef.current?.scrollIntoView({
              behavior: 'smooth',
            })
          }
        />
      </IndexPage>
      {navBar}
      <SocialLinks />
      <AboutPage ref={aboutRef}>
        <About />
      </AboutPage>
      <PortfolioPage ref={portfolioRef}>
        <Portfolio />
      </PortfolioPage>
    </>
  );
};

export default Home;
