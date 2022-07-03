import type { NextPage } from 'next';
import { Navbar } from '@components/Navbar';
import styled from 'styled-components';
import { useRef } from 'react';
import PageContainer from '@components/PageContainer/PageContainer';
import { NavbarItem } from '@components/Navbar/NavbarItem';
import { Landing } from '@root/features/landing';

const IndexPage = styled(PageContainer)``;
const AboutPage = styled(PageContainer)``;
const PortfolioPage = styled(PageContainer)``;
const ContactPage = styled(PageContainer)``;

const Home: NextPage = () => {
  const indexRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const navBar = (
    <Navbar>
      <NavbarItem onClick={() => indexRef.current?.scrollIntoView()}>
        Home
      </NavbarItem>
      <NavbarItem onClick={() => aboutRef.current?.scrollIntoView()}>
        About Me
      </NavbarItem>
      <NavbarItem onClick={() => portfolioRef.current?.scrollIntoView()}>
        Portfolio
      </NavbarItem>
      <NavbarItem onClick={() => contactRef.current?.scrollIntoView()}>
        Contact
      </NavbarItem>
    </Navbar>
  );

  return (
    <>
      <IndexPage ref={indexRef}>
        <Landing onPromptClick={() => aboutRef.current?.scrollIntoView()} />
      </IndexPage>
      {navBar}
      <AboutPage ref={aboutRef}></AboutPage>
      <PortfolioPage ref={portfolioRef}></PortfolioPage>
      <ContactPage />
    </>
  );
};

export default Home;
