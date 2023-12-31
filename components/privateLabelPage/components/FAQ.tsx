import { useState } from "react";

/* ----------------------------- MUI Components ----------------------------- */
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
/* -------------------------------------------------------------------------- */

import HTMLReactParser from "html-react-parser";

/* ---------------------------- Local Components ---------------------------- */
import { Container } from "shared";
import { FaqTypes } from "services/lincoServicesTypes";
import { LoadMoreBtn } from "components/generalComponents";
import { getFaq } from "services";
/* -------------------------------------------------------------------------- */

interface PropsTypes {
  faq: FaqTypes;
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: "1px solid #B1B1B1",
  "&:not(:last-child)": {
    borderTop: 0,
  },
  "&:last-child": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  borderColor: "red",
  backgroundColor: "#FFF",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export function FAQ(props: PropsTypes) {
  const [expanded, setExpanded] = useState<string | number | false>("");
  const [faq, setFaq] = useState(props.faq);
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(!Boolean(props.faq.next));
  const [error, setError] = useState<boolean>(false);

  const handleChange =
    (panel: string | number) =>
    (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const loadMoreHandler = () => {
    if (faq.next) {
      setLoading(true);
      const nextPage = +faq?.next.split("?page=")[1];

      getFaq(nextPage)
        .then((res: FaqTypes) => {
          if (error) setError(false);
          const faqResultsArr = [...faq.results, ...res.results];
          if (!res.next) {
            setDisabled(true);
          }
          setFaq((prev: FaqTypes) => ({
            ...prev,
            next: res.next,
            results: faqResultsArr,
          }));

          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    }
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            mt: "300px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              position: { xs: "relative", md: "absolute" },
              maxWidth: { xs: "100%", md: "300px" },
              bottom: { xs: "unset", md: 0 },
              left: { xs: "unset", md: "50%" },
              transform: { xs: "unset", md: "translate(-100%,0)" },
              order: 2,
              bgcolor: { xs: "#FFF", md: "unset" },
              py: { xs: 6, md: 0 },
              pr: { xs: 0, md: 15 },
            }}
            typography={"h4"}
            textAlign={{ xs: "center", md: "right" }}
            color="lincoBlue.main"
          >
            Didn’t find your answer above?
          </Typography>
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              bottom: { xs: "unset", md: 0 },
              left: { xs: "unset", md: "50%" },
              transform: { xs: "unset", md: "translate(-50%,0)" },
              width: 16,
              height: 16,
              borderRadius: "50%",
              order: 1,
            }}
            bgcolor="lincoBlue.main"
          />
          <Typography
            sx={{
              position: { xs: "relative", md: "absolute" },
              bottom: { xs: "unset", md: 0 },
              left: { xs: "unset", md: "50%" },
              order: 3,
              bgcolor: { xs: "#FFF", md: "unset" },
              pl: { xs: 0, md: 15 },
            }}
            variant="h2"
            textAlign={{ xs: "center", md: "left" }}
          >
            FAQ
          </Typography>
        </Box>
        <Box sx={{ pt: 20, bgcolor: "#FFF", zIndex: 20 }}>
          {faq.results.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
            >
              <AccordionSummary sx={{ bgcolor: "white" }}>
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>{HTMLReactParser(item?.answer || "")}</Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {!disabled ? (
        <>
          {error ? (
            <Typography>
              Something went wrong please try again later!
            </Typography>
          ) : (
            <LoadMoreBtn
              loading={loading}
              disabled={disabled}
              loadMoreHandler={loadMoreHandler}
              sx={{ display: "inline", width: "fit-content", mb: 20, mt: 10 }}
            >
              Load More
            </LoadMoreBtn>
          )}
        </>
      ) : null}
    </>
  );
}
