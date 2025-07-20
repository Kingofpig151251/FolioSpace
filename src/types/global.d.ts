interface Position {
  x: number;
  y: number;
  z: number;
  rotate?: number;
  rotateY?: number;
}

interface Link {
  type: string;
  url: string;
  text: string;
}

export interface Project {
  id: string;
  name: string;
  title: string;
  icon: string;
  status: string;
  position: Position;
  description: string;
  tech: string[];
  links: Link[];
  layout: string;
}

interface Impress {
  init: () => void;
  goto: (step: string) => void;
  prev: () => void;
  next: () => void;
}

declare global {
  interface Window {
    impress?: () => Impress;
  }
}
