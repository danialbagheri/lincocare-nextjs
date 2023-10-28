import * as React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert, Snackbar } from "@mui/material";

interface PropsTypes {}

export function SubmitButton(props: PropsTypes) {
  const [loading, setLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [response, setResponse] = React.useState({ status: 200 });

  const submitHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Stack alignItems={"center"} mb={30} mt={16} spacing={4}>
      {response?.status == 400 && (
        <Typography color="red" variant="body2">
          {/* Following products SKU were incorrect
          <br />
          {response.invalid_sku_list?.map((item) => (
            <>
              {item}
              <br />
            </>
          ))} */}
        </Typography>
      )}
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
          severity={response?.status == 200 ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          Your request has been sent successfully! Please check your email.
          <br />
          {JSON.stringify(response, null, 2)}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
