import type { NextPage } from 'next';
import { Navbar } from '@components/Navbar';
import styled from 'styled-components';
import { useRef } from 'react';
import PageContainer from '@components/PageContainer/PageContainer';
import { NavbarItem } from '@components/Navbar/NavbarItem';
import { Landing } from '@root/features/landing';
import { About } from '@root/features/about';
import { Portfolio } from '@root/features/portfolio';

const IndexPage = styled(PageContainer)`
  scroll-margin-top: 56px;
`;
const AboutPage = styled(PageContainer)`
  scroll-margin-top: 56px;
`;
const PortfolioPage = styled(PageContainer)`
  scroll-margin-top: 56px;
`;
const ContactPage = styled(PageContainer)`
  scroll-margin-top: 56px;
`;

const Home: NextPage = () => {
  const indexRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
      <NavbarItem
        onClick={() =>
          contactRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
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
      <AboutPage ref={aboutRef}>
        <About />
      </AboutPage>
      <PortfolioPage ref={portfolioRef}>
        <Portfolio />
      </PortfolioPage>
      <ContactPage />
    </>
  );
};

export default Home;
