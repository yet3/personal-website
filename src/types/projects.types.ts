export interface IProject {
	id: string;
	images: { webp: string; avif: string; png: string }[];

	blurHash: string;
	title: string;
	skills: string[];
	appHref?: string;
	repoHref?: string;
	showInFooter?: boolean;
  showInCv?: boolean
	imageFit?: "contain" | "cover";
  imagePosition?: string

	html: string;
	totalBlocks: number;
}
