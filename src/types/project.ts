interface Position {
  x: number;
  y: number;
  z: number;
  rotate?: number;
  rotateY?: number;
}

export interface Link {
  type: string;
  url: string;
  text: string;
}

export interface Project {
  id: string;
  name: string;
  title: string;
  preview: string;
  position: Position;
  description: string;
  tech: string[];
  links: Link[];
  layout: string;
}
