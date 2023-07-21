export interface BrandDetailTypes {
  name: string;
  imageSrc: string;
  description: string;
  bgColor: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  brandDetail: BrandDetailTypes;
}
