export interface HeaderProps {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  menu: Array<{
    label: string;
    href?: string;
    submenu?: Array<{
      title: string;
      description: string;
      href: string;
    }>;
  }>;
  mobileMenu: Array<{
    label: string;
    href: string;
  }>;
  rightContent: React.ReactNode;
  faqOpen?: boolean;
  onFaqOpen?: (open: boolean) => void;
}
