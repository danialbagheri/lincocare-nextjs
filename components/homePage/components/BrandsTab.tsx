import SwipeableViews from "react-swipeable-views";

import { BRANDS } from "components/constants";
import { BrandDetail } from "components/generalComponents";
import { TabPanelProps } from "./HomePageTypes";

export function BrandsTab(props: TabPanelProps) {
  const { value, setValue, ...other } = props;

  return (
    <SwipeableViews
      axis={"x"}
      index={value}
      onChangeIndex={(value: number) => setValue(value)}
    >
      {BRANDS.map((brand, i) => (
        <div
          role="tabpanel"
          id={`full-width-tabpanel-${value}`}
          aria-labelledby={`full-width-tab-${value}`}
          {...other}
        >
          <BrandDetail
            borderColor={brand.borderColor}
            color={brand.color}
            description={brand.description}
            imageSrc={brand.imageSrc}
            name={brand.name}
            privateLabel={brand.name === "Private label"}
          />
        </div>
      ))}
    </SwipeableViews>
  );
}
