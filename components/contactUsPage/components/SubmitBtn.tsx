import { Box, Button, useTheme } from "@mui/material";
import { postContactUsForm } from "services";
import { emailValidator } from "utils";
import { FieldsPropsTypes } from "./types";

export function SubmitBtn(props: FieldsPropsTypes) {
  const { error, setError, formData } = props;
  const theme = useTheme();

  const errorHandler = () => {
    let state = false;

    const errorObj = { email: "", recaptcha: "" };
    if (!formData.email) {
      errorObj.email = "Please enter your email address";
      state = true;
    } else if (!emailValidator(formData.email)) {
      errorObj.email = "Please enter a valid email address";
      state = true;
    }

    if (!formData.recaptcha) {
      errorObj.recaptcha = "Please check the recaptcha box";
      state = true;
    }

    if (setError) {
      setError(errorObj);
    }
    return state;
  };

  const submitHandler = () => {
    const errorState = errorHandler();

    if (!errorState) {
      postContactUsForm(formData);
    }
  };

  return (
    <Box sx={{ margin: "0 auto", maxWidth: { xs: "500px", md: "100%" } }}>
      <Button
        variant="contained"
        sx={{
          mt: 5,
          bgcolor: theme.palette.lincoBlue.dark,
          borderRadius: 0,
          width: { xs: "100%", sm: 136 },
        }}
        onClick={submitHandler}
      >
        Submit
      </Button>
    </Box>
  );
}
