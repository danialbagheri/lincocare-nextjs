import { Box, Typography } from "@mui/material";
import { Container } from "shared";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";

const DATA = [
  {
    id: "1",
    title: "Collapsible Group Item #1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsumdolor sit amet, consectetur adipiscing elit. Suspendisse malesuadalacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "2",
    title: "Collapsible Group Item #2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsumdolor sit amet, consectetur adipiscing elit. Suspendisse malesuadalacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "3",
    title: "Collapsible Group Item #3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsumdolor sit amet, consectetur adipiscing elit. Suspendisse malesuadalacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "4",
    title: "Collapsible Group Item #4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsumdolor sit amet, consectetur adipiscing elit. Suspendisse malesuadalacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "5",
    title: "Collapsible Group Item #5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsumdolor sit amet, consectetur adipiscing elit. Suspendisse malesuadalacus ex, sit amet blandit leo lobortis eget.",
  },
];

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

export function FAQTitle() {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
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
      <Box mt={20}>
        {DATA.map((d) => (
          <Accordion
            key={d.id}
            expanded={expanded === d.id}
            onChange={handleChange(d.id)}
          >
            <AccordionSummary sx={{ bgcolor: "white" }}>
              <Typography>{d.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{d.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
