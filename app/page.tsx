import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  contentHomeOne,
  contentHomeTwo,
  heroHome,
  socialProofHome,
  teamHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};
export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Team {...teamHome} />
    </>
  );
}
