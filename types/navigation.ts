export interface NavigationItem {
  name: string;
  href: string;
  icon: string | null;
  current: Boolean;
  children: NavigationItem[] | null;
}
