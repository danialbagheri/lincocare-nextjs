export interface ProcessItemTypes {
  index: number;
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  data: { title: string; unit: string; description: string; active: boolean }[];
  itemSpecs: EachItemsSpecsTypes;
}

export interface SpecificsTypes {
  top: number | undefined | null;
  active: boolean;
  windowHeight: number | undefined;
  photoBottom: number;
}

export interface ItemsSpecsTypes {
  [key: number]: EachItemsSpecsTypes;
}

export interface EachItemsSpecsTypes {
  top: number;
  active: boolean;
  respectiveScroll: number;
}
