export interface BrandDetailTypes {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  color: string;
  borderColor: string;
  knowMoreLink: string;
  brandWebsiteLink: string;
}

export interface TabPanelProps {
  dir?: string;
  index: number;
  value: number;
  setValue: (value: number) => void;
}
