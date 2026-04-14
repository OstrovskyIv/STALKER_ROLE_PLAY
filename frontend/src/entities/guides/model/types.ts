export interface GuideItem {
  id: string;
  category: 'anomalies' | 'mutants' | 'artifacts' | 'medicine' | 'roles' | 'blowout' | 'factions';
  title: string;
  description: string;
  effect?: string;
  negative?: string;
  signs?: string;
  location?: string;
  lethality?: string;
  danger?: string;
  trophies?: string;
  features?: string;
  access?: string;
  imageName?: string;
  videoName?: string;
  artifacts?: string[];
}

export interface GuideCategory {
  id: string;
  title: string;
}