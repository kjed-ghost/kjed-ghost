import { Github, Briefcase, MessageSquare, LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  link: string;
  description: string;
  hoverColor: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    icon: Github,
    link: 'https://github.com/kjed-ghost',
    description: 'Review my code & contributions',
    hoverColor: 'group-hover:text-white',
  },
  {
    name: 'Upwork',
    icon: Briefcase,
    link: 'https://www.upwork.com/freelancers/~016973166e4ead86f4?mp_source=share',
    description: 'Hire me for fixed/hourly projects',
    hoverColor: 'group-hover:text-green-400',
  },
  {
    name: 'Freelancer',
    icon: Briefcase,
    link: 'https://www.freelancer.com/u/kjed8l',
    description: 'Find me on Freelancer.com',
    hoverColor: 'group-hover:text-blue-400',
  },
  {
    name: 'Reddit',
    icon: MessageSquare,
    link: 'https://www.reddit.com/user/kjed-ghost',
    description: 'Technical discussions',
    hoverColor: 'group-hover:text-orange-400',
  },
];
