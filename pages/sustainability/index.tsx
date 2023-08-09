import { LincoNews } from "components/generalComponents";
import { Head, Body } from "components/sustainabilityPage";
import { LincoDivider } from "shared";

export default function Sustainability() {
  return (
    <>
      <Head />
      <Body />

      <LincoDivider fullWidth={true} sx={{ mb: { xs: 16, md: 34 } }} />
      <LincoNews />
    </>
  );
}
