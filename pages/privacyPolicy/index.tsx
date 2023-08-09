import { ConditionPages } from "components/conditionPages";
import { LincoNews } from "components/generalComponents";
import { LincoDivider } from "shared";

export default function PrivacyPolicy() {
  return (
    <>
      <ConditionPages title="Privacy Policy" pageType={"privacyPolicy"} />
      <LincoDivider sx={{ my: { xs: 20, md: 30 } }} />
      <LincoNews />
    </>
  );
}
