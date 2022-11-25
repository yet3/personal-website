import type { ReactNode } from "react";

export interface IProject {
  key: string

  name: ReactNode;
  description: string;

  image: string;

  appHref?: string;
  githubRepo: string;

  technologies: string[]
}
