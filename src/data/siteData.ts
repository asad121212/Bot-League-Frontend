import type {
  BracketRound,
  Category,
  Discipline,
  FeatureHighlight,
  JourneyStepData,
  LiveBroadcast,
  NavLink,
  PastResult,
  RegisterPerk,
  UpcomingEvent,
  EcosystemCard,
  FooterLinkGroup,
  Sponsor,
  SocialLink
} from "@/types";

import lineFollowerUrl from "@/assets/disciplines/line-follower.jpg";
import roboRaceUrl from "@/assets/disciplines/robo-race.jpg";
import rcRacingUrl from "@/assets/disciplines/rc-racing.jpg";
import roboHockeyUrl from "@/assets/disciplines/robo-hockey.jpg";
import aeromodelingUrl from "@/assets/disciplines/aeromodeling.jpg";

import nitDelhiLogo from "@/assets/sponsors/nit-delhi.png";
import indianBitLogo from "@/assets/sponsors/indian-bit.png";
import nitSilcharLogo from "@/assets/sponsors/nit-silchar.png";
import roboCompanyLogo from "@/assets/sponsors/robo-company.png";
import roboCompany2Logo from "@/assets/sponsors/robo-company-2.png";
import iitBombayLogo from "@/assets/sponsors/iit-bombay.png";

export const navLinks: NavLink[] = [
  { id: "events", label: "Events", href: "#events" },
  { id: "programs", label: "Programs", href: "#programs" },
  { id: "community", label: "Community", href: "#community" },
  { id: "ranks", label: "Ranks", href: "#ranks" },
  { id: "disciplines", label: "Disciplines", href: "#disciplines" },
];

export const liveBroadcast: LiveBroadcast = {
  isLive: true,
  episodeLabel: "Episode 14",
  eventName: "Bengaluru Regionals",
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "evt-mumbai",
    name: "Event in Mumbai",
    city: "Mumbai",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
  {
    id: "evt-delhi",
    name: "Event in Delhi",
    city: "Delhi",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
];

export const pastResults: PastResult[] = [
  { id: "res-1", name: "Bengaluru Regionals", summary: "Lorem Ipsum" },
  { id: "res-2", name: "Bengaluru Regionals", summary: "Lorem Ipsum" },
  { id: "res-3", name: "Bengaluru Regionals", summary: "Lorem Ipsum" },
];

/**
 * An 8-team single-elimination bracket: 4 quarterfinal matches feed into
 * 2 semifinal matches, which feed into 1 final. Each round has exactly
 * half as many matches as the round before it, which is what lets
 * <BracketDiagram /> line up the connector lines with pure math instead
 * of hand-tuned pixel offsets.
 */
export const bracketRounds: BracketRound[] = [
  {
    id: "quarterfinals",
    label: "Quarterfinals",
    matches: [
      {
        id: "qf-1",
        teams: [
          { id: "vortex", name: "Team Vortex", status: "advancing" },
          { id: "ember", name: "Team Ember", status: "eliminated" },
        ],
      },
      {
        id: "qf-2",
        teams: [
          { id: "ironclad", name: "Team Ironclad", status: "advancing" },
          { id: "nightshade", name: "Team Shade", status: "eliminated" },
        ],
      },
      {
        id: "qf-3",
        teams: [
          { id: "photon", name: "Team Photon", status: "advancing" },
          { id: "ravager", name: "Team Rave", status: "eliminated" },
        ],
      },
      {
        id: "qf-4",
        teams: [
          { id: "solace", name: "Team Solace", status: "eliminated" },
          { id: "titan", name: "Team Titan", status: "advancing" },
        ],
      },
    ],
  },
  {
    id: "semifinals",
    label: "Semifinals",
    matches: [
      {
        id: "sf-1",
        teams: [
          { id: "vortex", name: "Team Vortex", status: "advancing" },
          { id: "ironclad", name: "Team Ironclad", status: "eliminated" },
        ],
      },
      {
        id: "sf-2",
        teams: [
          { id: "photon", name: "Team Photon", status: "pending" },
          { id: "titan", name: "Team Titan", status: "pending" },
        ],
      },
    ],
  },
  {
    id: "final",
    label: "Final",
    matches: [
      {
        id: "final-1",
        teams: [
          { id: "vortex", name: "Team Vortex", status: "pending" },
          { id: "tbd", name: "TBD", status: "pending" },
        ],
      },
    ],
  },
];

export const journeySteps: JourneyStepData[] = [
  { id: "build", step: 1, icon: "build", title: "Build your team" },
  { id: "compete", step: 2, icon: "compete", title: "Compete across India" },
  { id: "rank", step: 3, icon: "rank", title: "Earn national ranking & value" },
  { id: "join", step: 4, icon: "join", title: "Join the league" },
];

export const featureHighlights: FeatureHighlight[] = [
  {
    id: "structured-events",
    number: "1.",
    title: "Structured events",
    description: "From one-off events to a year-round competitive season.",
  },
  {
    id: "digital-identity",
    number: "2.",
    title: "Digital identity",
    description: "Your professional robotics legacy, tracked and verified.",
  },
  {
    id: "national-ranking",
    number: "3.",
    title: "National ranking",
    description: "Benchmark your skills against the best engineers in India.",
  },
  {
    id: "career-pathway",
    number: "4.",
    title: "Career pathway",
    description: "Turning arena victories into real-world industry opportunities.",
  },
];

export const disciplines: Discipline[] = [
  { id: "robo-race", title: "Robo Race", image: roboRaceUrl },
  { id: "line-follower", title: "Line Follower", image: lineFollowerUrl },
  { id: "rc-racing", title: "RC Racing", image: rcRacingUrl },
  { id: "fpv-aeromodelling", title: "FPV Drone Racing & Aeromodelling", image: aeromodelingUrl },
  { id: "robo-hockey", title: "Robo Hockey", image: roboHockeyUrl },
];

export const registerPerks: RegisterPerk[] = [
  {
    id: "national-recognition",
    icon: "recognition",
    title: "National recognition",
    description: "Benchmark your skills on India's official robotics leaderboard.",
  },
  {
    id: "fair-judging",
    icon: "judging",
    title: "Fair judging",
    description: "Compete with confidence under standardized, expert-led evaluation.",
  },
  {
    id: "career-ops",
    icon: "career",
    title: "Career ops",
    description: "Bridge the gap between arena victories and top-tier tech placements.",
  },
  {
    id: "high-energy-eco",
    icon: "energy",
    title: "High-energy eco",
    description: "Join a nationwide community of elite innovators and robotics athletes.",
  },
];

export const categories: Category[] = [
  {
    id: "mini-makers",
    icon: "landmark",
    title: "Mini Makers",
    description: "Where creativity meets logic.",
    featured: true,
  },
  {
    id: "junior-innovators",
    icon: "lightbulb",
    title: "Junior Innovators",
    description: "Engineering and strategy fundamentals.",
  },
  {
    id: "engineers",
    icon: "engineer",
    title: "Young Engineers",
    description: "Advanced wireless and autonomous control.",
  },
  {
    id: "robo-minds",
    icon: "brain",
    title: "Robo Minds",
    description: "Elite professional sports and robotics.",
  },
];

export const ecosystemCards: EcosystemCard[] = [
  {
    id: "judge",
    title: "Become in Judge",
    buttonLabel: "Sign Up",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    buttonLabel: "Sign Up",
  },
  {
    id: "community",
    title: "Community Member",
    buttonLabel: "Sign Up",
  },
];

export const sponsors: Sponsor[] = [
  {
    id: "nit-delhi",
    name: "NIT Delhi",
    logo: nitDelhiLogo,
  },
  {
    id: "indian-bit",
    name: "Indian BIT",
    logo: indianBitLogo,
  },
  {
    id: "nit-silchar",
    name: "NIT Silchar",
    logo: nitSilcharLogo,
  },
  {
    id: "robo-company",
    name: "Robo Company",
    logo: roboCompanyLogo,
  },
  {
    id: "iit-bombay",
    name: "IIT Bombay",
    logo: iitBombayLogo,
  },
  {
    id: "robo-company-2",
    name: "Robo Company",
    logo: roboCompany2Logo,
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    id: "quick-links",
    title: "Quick Links",
    links: [
      {
        id: "arena",
        label: "The Arena",
        href: "#",
      },
      {
        id: "episodes",
        label: "Episodes",
        href: "#",
      },
      {
        id: "national_rankings",
        label: "National Rankings",
        href: "#",
      },
      {
        id: "programs",
        label: "Programs",
        href: "#",
      },
      {
        id: "rulebook",
        label: "Rulebooks",
        href: "#",
      },
    ],
  },
  {
    id: "support",
    title: "",
    links: [
      {
        id: "join",
        label: "Join The Team",
        href: "#",
      },
      {
        id: "sponsor",
        label: "Sponsorships",
        href: "#",
      },
      {
        id: "help",
        label: "Help Center",
        href: "#",
      },
      {
        id: "contact",
        label: "Contact Us",
        href: "#",
      },
      {
        id: "legal",
        label: "Legal",
        href: "#",
      },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: "youtube",
    platform: "youtube",
    href: "#",
  },
  {
    id: "instagram",
    platform: "instagram",
    href: "#",
  },
  {
    id: "facebook",
    platform: "facebook",
    href: "#",
  },
  {
    id: "twitter",
    platform: "twitter",
    href: "#",
  },
];