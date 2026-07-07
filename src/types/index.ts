export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface UpcomingEvent {
  id: string;
  name: string;
  city: string;
  date: string;
  location: string;
  category: string;
}

export interface PastResult {
  id: string;
  name: string;
  summary: string;
}

/**
 * "pending"  – slot not yet decided (waiting on an earlier match)
 * "advancing" – this team won its match and moves to the next round
 * "eliminated" – this team lost its match
 */
export type SlotStatus = "pending" | "advancing" | "eliminated";

export interface BracketTeamSlot {
  id: string;
  name: string;
  status: SlotStatus;
}

export interface BracketMatch {
  id: string;
  /** Two team slots facing off in this match. */
  teams: [BracketTeamSlot, BracketTeamSlot];
}

export interface BracketRound {
  id: string;
  label: string;
  matches: BracketMatch[];
}

export interface LiveBroadcast {
  isLive: boolean;
  episodeLabel: string;
  eventName: string;
}

export type JourneyIcon = "build" | "compete" | "rank" | "join";

export interface JourneyStepData {
  id: string;
  step: number;
  icon: JourneyIcon;
  title: string;
}

export interface FeatureHighlight {
  id: string;
  number: string;
  title: string;
  description: string;
}

export type CategoryIcon = "landmark" | "lightbulb" | "engineer" | "brain";

export interface Category {
  id: string;
  icon: CategoryIcon;
  title: string;
  description: string;
  featured?: boolean;
}

export interface Discipline {
  id: string;
  title: string;
  /** Imported image URL. Omitted for disciplines without a supplied photo. */
  image?: string;
}

export type RegisterPerkIcon = "recognition" | "judging" | "career" | "energy";

export interface RegisterPerk {
  id: string;
  icon: RegisterPerkIcon;
  title: string;
  description: string;
}

export interface EcosystemCard {
  id: string;
  title: string;
  buttonLabel: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  id: string;
  title: string;
  links: FooterLink[];
}

export type SocialPlatform =
  | "youtube"
  | "instagram"
  | "facebook"
  | "twitter";

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  href: string;
}
