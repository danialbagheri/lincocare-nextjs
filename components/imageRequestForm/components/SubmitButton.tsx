import * as React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert, Snackbar } from "@mui/material";
import { BrandTypes, ErrorTypes, RequestDataTypes } from "../RequestForm";
import { emailValidator } from "utils";

interface PropsTypes {
  brand: BrandTypes[];
  requestData: RequestDataTypes;
  setError: React.Dispatch<React.SetStateAction<ErrorTypes>>;
}

interface AlertDataTypes {
  severity: "success" | "error";
  text: React.ReactNode;
}

export function SubmitButton(props: PropsTypes) {
  const { brand, requestData, setError } = props;
  const [loading, setLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [alertData, setAlertData] = React.useState<AlertDataTypes>({
    severity: "success",
    text: <></>,
  });
  const [invalidSku, setInvalidSku] = React.useState<string[]>([]);

  const errorConduct = () => {
    const errorObj: ErrorTypes = {
      email: "",
      sku: "",
      recaptcha: "",
    };

    let hasError = false;
    let alertText = <></>;

    if (!requestData.email) {
      errorObj.email = "Please enter an Email address.";
      alertText = <p>Please enter an Email address.</p>;
      hasError = true;
    } else if (!emailValidator(requestData.email)) {
      errorObj.email = "Please enter a valid Email address.";
      alertText = <p>Please enter a valid Email address.</p>;
      hasError = true;
    }

    if (!requestData.recaptcha) {
      errorObj.recaptcha = "Please check the checkbox.";
      alertText = (
        <>
          {alertText}
          <p>Please check the Captcha checkbox.</p>
        </>
      );
      hasError = true;
    }

    if (!requestData.sku_list.length) {
      errorObj.sku = "Please enter sku";
      alertText = (
        <>
          {alertText}
          <p>Please enter sku.</p>
        </>
      );
      hasError = true;
    }

    setError(errorObj);
    if (hasError) {
      setAlertData({ severity: "error", text: alertText });
      setOpenSnackbar(true);
    }
    return hasError;
  };

  const submitHandler = async () => {
    const hasError = errorConduct();

    if (hasError) {
      setOpenSnackbar(true);
      return;
    }

    if (!hasError) {
      setLoading(true);
      const endPoint = brand.filter((_b) => _b.selected === true)[0].endpoint;
      const response = await window.fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const res = await response.json();

      if (response.status === 400) {
        setOpenSnackbar(true);
        const emailError = res.email;
        const captchaError = res.non_field_errors;
        const errorText = (
          <>
            {Object.keys(res).map((key) => (
              <p key={key}>
                {key} : {res[key]}
              </p>
            ))}
          </>
        );
        setAlertData({ severity: "error", text: errorText });
        setError((prev) => ({
          ...prev,
          email: emailError || "",
          recaptcha: captchaError || "",
        }));
        setLoading(false);
      }

      if (response.status === 201) {
        setOpenSnackbar(true);
        setAlertData({
          severity: "success",
          text: (
            <p>
              Your request has been sent successfully! Please check your email.
            </p>
          ),
        });
        setError({ email: "", sku: "", recaptcha: "" });
        if (res.invalid_sku_list?.length) {
          setInvalidSku(res.invalid_sku_list);
        }
        setLoading(false);
      }
    }
  };

  return (
    <Stack alignItems={"center"} mb={30} mt={16} spacing={4}>
      {invalidSku.length ? (
        <Typography color="#d32f2f" variant="body2">
          Following products SKU were incorrect:
          <br />
          {invalidSku?.map((item) => (
            <>
              {item}
              <br />
            </>
          ))}
        </Typography>
      ) : null}

      <Button
        disabled={loading}
        onClick={submitHandler}
        sx={{
          width: 350,
          height: 58,
          padding: "16px 80px",
          borderRadius: 15,
        }}
        variant={"contained"}
      >
        {loading ? (
          <CircularProgress size={30} sx={{ color: "white" }} thickness={6} />
        ) : (
          <Typography fontWeight={500}>SUBMIT THE REQUEST</Typography>
        )}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={10000}
        key={"bottom" + "center"}
        onClose={() => setOpenSnackbar(false)}
        open={openSnackbar}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={alertData.severity}
          sx={{ width: "100%" }}
        >
          {/* Your request has been sent successfully! Please check your email. */}
          {/* <br /> */}
          {/* {JSON.stringify(response, null, 2)} */}
          {alertData.text}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
