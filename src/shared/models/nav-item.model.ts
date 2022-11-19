export interface INavigationItem {
  display: string;
  id: string;
  path: string[];
  icon: any;
}

export class NavigationItem {
  constructor(public display: string, public id: string, public url: string[], public icon: any) {
  }
}

export interface LeftNavProps {
  open: boolean;
}

export interface TopNavProps {
  open: boolean;
  onNavOpen: (openState: boolean) => void;
}

export interface LeftNavHeaderProps {
  closeDrawerHandler: (openState: boolean) => void;
}