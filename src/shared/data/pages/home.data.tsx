import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FeaturesProps,
  HeroProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import arypack from '~/assets/images/arypack.png';
import hdd from '~/assets/images/hdd.png';
import prym from '~/assets/images/prym.png';
import coats from '~/assets/images/Coats.png';
import Dpants from '~/assets/images/darkpants.png';
import Pants from '~/assets/images/pants.png';
import PreventsTN from '~/assets/images/prevents.png';
import ea from '~/assets/images/eatn.png';
import gerber from '~/assets/images/gerber.png';
import ykk from '~/assets/images/ykk.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {

  callToAction: {
    text: 'Contact US',
    href: '/contact',
    icon: IconMail,
    targetBlank: true,
  },
  callToAction2: {
    text: 'About',
    href: '/about',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://preventis.com.tn/',
      src: ykk,
      alt: 'YKK LOGO',
    },
    {
      link: 'https://preventis.com.tn/',
      src: PreventsTN,
      alt: 'PreventsTN',
    },

    {
      link: 'https://nextjs.org/',
      src: gerber,
      alt: 'Gerber LOGO',
    },

    {
      link: 'https://react.dev/',
      src: coats,
      alt: 'Coats LOGO',
    },
    {
      link: 'https://tailwindcss.com/',
      src: prym,
      alt: 'Prym LOGO',
    },
    {
      link: 'http://www.e-a.com.tn/',
      src: ea,
      alt: 'E & A LOGO',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What you get with BIG DJINS
      </>
    ),
    subtitle:
      "Elevating Your Digital Presence: Discover the Synergies Unleashed in Our Platform's Core Strengths, from Seamless Integration to Open Collaboration.",
    tagline: 'Features',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description:
        'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Ready-to-use Components',
      description:
        'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
      icon: IconComponents,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Best Practices',
      description:
        'By prioritizing maintainability and scalability through coding standards and design principles, your website stays robust and efficient.',
      icon: IconListCheck,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Excellent Page Speed',
      description:
        'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        "Boost online visibility with our SEO-friendly website. Effective strategies and practices enhance your website's search engine ranking, making it easier for users to find your content.",
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Open to new ideas and contributions',
      description:
        'We welcome new ideas and contributions to our platform. Whether you have feature suggestions, want to contribute code, or share insights, our platform is open for collaboration.',
      icon: IconBulb,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'What do we offer?\n',
    subtitle: 'At BIG DJINS:0, we offer a comprehensive range of work jeans and casual jeans, designed to meet the diverse needs of our B2B clients.',
    tagline: 'Offers',
  },
  content:
    'Tous nos produits sont fabriqués à partir de jeans recyclés issus\n' +
    'd\'\n' +
    'une économie circulaire, contribuant ainsi à une production\n' +
    'plus durable et respectueuse de l\'\n' +
    'environnement.',
  items: [
    {
      title: 'Work Jeans',
      description:
        'Designed with professionals in mind, our work jeans combine durability, comfort, and functionality—perfectly suited for the most demanding environments.',
    },
    {
      title: 'Urban Jeans',
      description:
        'Stylish and long-lasting, our urban jeans are ideal for everyday wear, blending superior quality with modern style.',
    },

  ],
  image: {
    src: Dpants,
    alt: 'Dark Pants',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Moreover, each item can be customized to meet the specific needs of our partners, ensuring a truly tailored textile solution.',
  items: [
    {
      title: 'Denim Overalls',
      description:
        'Comfortable and durable, our overalls provide a versatile solution for both work and leisure.',
    },
    {
      title: 'Denim Jackets',
      description:
        'Timeless and on-trend, our denim jackets combine style with everyday practicality.',
    },
    {
      title: 'Denim Bags',
      description:
        'Crafted from durable denim, our bags offer an eco-friendly and stylish alternative to traditional materials.',
    },

  ],
  image: {
    src: Pants,
    alt: 'Colorful Pants',
  },
  isReversed: true,
  isAfterContent: true,
};




// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Youssef Timoumi',
      occupation: 'Full STACK DEV',
      image: {
        src: 'https://i.imgur.com/IeIXKpz.jpeg',
        alt: 'Youssef Timoumi',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: 'https://x.com/unknowndeaduser',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/youssef-timoumi-45a003318/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'mailto:youssef1timoumi@hotmail.com',
        },
      ],
    },
    {
      name: 'Reiner',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://i.imgur.com/IeIXKpz.jpeg',
        alt: 'Cloud Engineer',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: 'https://x.com/unknowndeaduser',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/youssef-timoumi-45a003318/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'mailto:youssef1timoumi@hotmail.com',
        },
      ],
    },

  ],
};
