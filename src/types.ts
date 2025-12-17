export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface StatItem {
  label: string;
  value: string;
  subValue?: string;
  icon?: string;
}