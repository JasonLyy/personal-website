import type { NextPage } from 'next';
import { Heading } from '@components/Typography/Heading';
import { Paragraph } from '@components/Typography';
const Home: NextPage = () => {
  return (
    <>
      <Heading level={1}>Jason Website</Heading>
      <Paragraph>Varaint</Paragraph>
    </>
  );
};

export default Home;
