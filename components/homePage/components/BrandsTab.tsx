import { BRANDS } from "components/constants";
import { BrandDetail } from "components/generalComponents";
import SwipeableViews from "react-swipeable-views";
import { TabPanelProps } from "./HomePageTypes";

export function BrandsTab(props: TabPanelProps) {
  const { value, setValue, index, ...other } = props;

  return (
    <SwipeableViews
      axis={"x"}
      index={value}
      onChangeIndex={(value: number) => setValue(value)}
    >
      {BRANDS.map((brand, i) => (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
        >
          {value === index && (
            <BrandDetail
              borderColor={brand.borderColor}
              color={brand.color}
              description={brand.description}
              imageSrc={brand.imageSrc}
              name={brand.name}
              privateLabel={brand.name === "Private label"}
            />
          )}
        </div>
      ))}
    </SwipeableViews>
  );
}
