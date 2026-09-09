export enum PropertyCategory {
  BEACH = 'Beach',
  ADVENTURE = 'Adventure',
  CITY = 'City',
  HANOI = 'Hanoi',
  BANGKOK = 'Bangkok',
  MANILA = 'Manila',
  KAMPOT = 'Kampot',
  BOAT_PARTY = 'Boat Party'
}

export interface ThemeConfig {
  primary: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface Property {
  id: string;
  name: string;
  country: string;
  category: PropertyCategory;
  handle: string;
  slug: string;
  whatsappUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  checkinUrl?: string;
  ticketsUrl?: string;
  displayHandle?: string; // overrides the @madmonkey... header handle
  logoUrl?: string; // overrides the default Mad Monkey logo
  whatsappDisabled?: boolean; // show WhatsApp button without a link
  wifi?: {
    ssid: string;
    password: string;
    mobileconfig?: string; // path to .mobileconfig file for iOS
  };
}
