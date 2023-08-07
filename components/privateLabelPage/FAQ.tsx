import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Container } from "shared";

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

export function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Container py={{ xs: 10, md: 25 }}>
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
    </Container>
  );
}
