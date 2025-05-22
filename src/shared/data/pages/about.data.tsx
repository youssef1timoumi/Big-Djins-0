import {
  ContactProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
import BIGD from '~/assets/images/djinss.png';
import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'Your source for seamless clothing production.',
  tagline: 'About Us',
  callToAction: {
    text: 'View Linkedin',
    href: 'https://www.linkedin.com/company/big-djins-0',
    targetBlank: true,
  },
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: BIGD,
    alt: 'Djins',
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    {
      title: 2020,
      description: 'Année de fondation',
    },
    {
      title: 100,
      description: 'Employés',
    },
    {
      title: 2,
      description: 'Membres associés',
    },
    {
      title: 100000,
      description: 'Pièces en 2025\n',
    },
  ],
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'Our Identity',
    subtitle:
      'BIG DJINS:0 is a textile manufacturer specializing in work and casual jeans, recognized as a key player in the industry. With over 30 years of expertise, the company combines craftsmanship and industrial innovation to meet client needs. Based in Tunisia with strong roots in France, BIG DJINS:0 offers fast, high-quality production tailored to the European market. Our core values—innovation, sustainability, quality, and transparency—ensure products that meet both customer expectations and environmental standards.',
    tagline: 'Identity and Values',
  },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: false,
  header: {
    title: 'Our values',
    subtitle: 'At BIG DJINS:0, we are committed to delivering an outstanding customer experience through',
  },
  isAfterContent: true,
  columns: 2,
  items: [
    {
      title: '🚚 Fast Delivery',
      description: 'With factories based in Tunisia, we benefit from a strategic geographic location that allows us to ensure short lead times for our European clients.',
    },
    {
      title: '🏅 Excellence in Quality',
      description: 'With over 30 years of expertise, BIG DJINS:0’s skilled team consistently delivers garments meeting the highest standards. In 2024, our quality commitment was reflected in a remarkably low 0.71% second-choice product rate.',
    },
    {
      title: '🏭 High Production Capacity',
      description: 'Producing up to 5,000 pairs of jeans per week, we efficiently handle large-scale orders, supported by a skilled workforce and high-performance equipment.',
    },
    {
      title: '💡 Innovation',
      description:
        'To maintain top-tier quality, we completely renew our machinery every five years, ensuring cutting-edge production capabilities',
    },
    {
      title: '🤝 Ethical Partnerships',
      description: 'Integrity guides us. We build honest, respectful, and responsible relationships with clients and partners, staying true to our core values.',
    }

  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: false,
  header: {
    title: 'of Your Pants with BIG DJINS:0!',
    tagline: 'Discover the Journey',
  },
  items: [
    {
      title: 'Project Intake 📬',
      description:
        'We begin with a detailed consultation to fully understand your expectations and preferences, ensuring every aspect of the pants aligns with your creative vision.',
      icon: IconNumber1,
    },
    {
      title: 'Project Review 🔍',
      description:
        'Our team of designers and technicians carefully analyzes your project to confirm it’s both technically feasible and economically sound, planning every step of the production process.',
      icon: IconNumber2,
    },
    {
      title: 'Prototyping & Validation 🎨',
      description:
        'We craft prototypes that match your specifications. You review the initial samples and share feedback, allowing us to fine-tune the design before full-scale production begins.',
      icon: IconNumber3,
    },
    {
      title: 'Product Manufacturing 🏭',
      description:
        'Your pants are manufactured in our high-tech facilities, where we follow strict quality standards at every stage — from fabric cutting to final stitching — ensuring flawless results.',
      icon: IconNumber4,
    },
    {
      title: 'Worldwide Delivery 🌍',
      description:
        'Once production is complete, your pants are carefully packed and shipped using fast, reliable methods, ensuring they arrive on time and in perfect condition, no matter where you are.',
      icon: IconNumber5,
    },
  ],
};


// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: true,
  header: {
    title: 'Processes and Sustainability',
    tagline: 'Achievements',
  },
  columns: 1,
  items: [
    {
      title: 'Global recognition',
      description:
        'BIG DJINS:0 is pursuing ISO 9001 and SA 8000 certifications, aligning with world-class standards in quality and social responsibility.',
      icon: IconNumber1,
    },
    {
      title: 'Quality of Work Life',
      description:
        'We value our employees and are committed to providing a positive work environment. We believe that a fulfilling workplace is key to achieving exceptional results.',
      icon: IconNumber2,
    },
    {
      title: 'Sustainability in Action',
      description:
        'Honored for our eco-conscious practices, from using recycled materials to reducing energy use across all production stages.',
      icon: IconNumber3,
    },
  ],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: false,
  header: {
    title: 'Meet the team behind BIG DJINS:0',
    subtitle:
      'Driven by passion, precision, and purpose — our executive team leads with innovation, quality, and social responsibility at the heart of everything we do.',
    tagline: 'team',
  },
  teams: [
    {
      name: "Youssef Timoumi",
      occupation: 'Founder & CEO',
      image: {
        src: 'https://i.imgur.com/IeIXKpz.jpeg',
        alt: 'DEVS',
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
      name: 'Youssef',
      occupation: 'Chief Creative Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Youssef',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },

  ],
};

