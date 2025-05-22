import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';

import Features from '~/components/widgets/Features';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import Team2 from '~/components/widgets/Team2';
import {
  featuresFourAbout,
  featuresFourAboutTwo,
  hero2About,
  statsAbout,
  statsAbout1,
  stepsAbout,
  featuresAbout,
  teamAbout,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      <Stats {...statsAbout} />
      <Stats {...statsAbout1} />
      <Features4 {...featuresFourAbout} />
      <Features4 {...featuresFourAboutTwo} />
      <Steps {...stepsAbout} />
      <Features {...featuresAbout} />
      <Team2 {...teamAbout} />
    </>
  );
};

export default Page;
