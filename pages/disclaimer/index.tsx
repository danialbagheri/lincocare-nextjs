import { ConditionPages } from "components/conditionPages";
import { LincoNews } from "components/generalComponents";
import { LincoDivider } from "shared";

export default function Disclaimer() {
  return (
    <>
      <ConditionPages title="Disclaimer" pageType={"disclaimer"} />
      <LincoDivider sx={{ my: { xs: 20, md: 30 } }} />
      <LincoNews />
    </>
  );
}
