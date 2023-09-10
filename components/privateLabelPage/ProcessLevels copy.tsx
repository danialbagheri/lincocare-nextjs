// import { Box, Stack, Typography, useTheme } from "@mui/material";
// import { useEffect, useRef, useState } from "react";

// import { Container } from "shared";
// import { FAQTitle, ProcessLevelItem, PROCESS_ITEMS } from "./components";
// import { ItemsScrollSpecsTypes } from "./components/types";

// export function ProcessLevels() {
//   const theme = useTheme();
//   const [itemsScrollSpecs, setItemsScrollSpecs] =
//     useState<ItemsScrollSpecsTypes>({
//       top: 0,
//       activeIndex: 0,
//       specifics: [{}],
//     });
//   const [titleEleSpecs, setTitleEleSpecs] = useState<{
//     position: "fixed" | "static";
//     top: number;
//   }>({ position: "static", top: 0 });
//   const titleEle = useRef<HTMLInputElement>(null);

//   const scrollHandler = (e: any) => {
//     console.log("YOFFSET::", window.pageYOffset);

//     if (window.pageYOffset < 600) {
//       setItemsScrollSpecs((prev) => ({
//         ...prev,
//         top: titleEleSpecs.top - window.pageYOffset,
//         activeIndex: 0,
//       }));
//     }
//     if (window.pageYOffset > 1660 && window.pageYOffset < 2950) {
//       setItemsScrollSpecs((prev) => ({
//         ...prev,
//         top: 1761 - window.pageYOffset,
//         activeIndex: 1,
//       }));
//     }
//     if (window.pageYOffset > 4000 && window.pageYOffset < 4834) {
//       setItemsScrollSpecs((prev) => ({
//         ...prev,
//         top: 2818 - window.pageYOffset,
//         activeIndex: 2,
//       }));
//     } else if (window.pageYOffset > 6348 && window.pageYOffset < 7225) {
//       setItemsScrollSpecs((prev) => ({
//         ...prev,
//         top: 4333 - window.pageYOffset,
//         activeIndex: 3,
//       }));
//     }
//     if (window.pageYOffset > 8533 && window.pageYOffset < 9420) {
//       setItemsScrollSpecs((prev) => ({
//         ...prev,
//         top: 5643.5 - window.pageYOffset,
//         activeIndex: 4,
//       }));
//     }
//     if (window.pageYOffset > 10000 && window.pageYOffset < 10900) {
//       setItemsScrollSpecs((prev) => ({
//         ...prev,
//         top: 6235.5 - window.pageYOffset,
//         activeIndex: 5,
//       }));
//     }
//     if (window.pageYOffset > 12000) {
//       setItemsScrollSpecs((prev) => ({
//         ...prev,
//         top: 7336.5 - window.pageYOffset,
//         activeIndex: 6,
//       }));
//     }
//   };

//   useEffect(() => {
//     if (titleEle.current) {
//       const titleEleTop = titleEle.current?.getBoundingClientRect().top;

//       setItemsScrollSpecs((prev) => ({ ...prev, top: titleEleTop }));
//       setTitleEleSpecs({ position: "fixed", top: titleEleTop });
//     }
//   }, []);

//   useEffect(() => {
//     if (titleEleSpecs.top) window.addEventListener("scroll", scrollHandler);
//   }, [titleEleSpecs.top]);

//   return (
//     <>
//       <Box
//         ref={titleEle}
//         sx={{
//           bgcolor: { xs: "#F4F4F4", md: "#FFF" },
//           width: "100%",
//           margin: "0 auto",
//           px: { xs: 9, md: 0 },
//           py: { xs: 9, md: 22 },
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//           zIndex: 13,
//         }}
//         style={{ top: itemsScrollSpecs.top, position: titleEleSpecs.position }}
//       >
//         <Typography
//           textAlign="center"
//           sx={{
//             typography: { xs: "h3", md: "h4" },
//             bgcolor: { xs: "#F4F4F4", md: "unset" },
//           }}
//         >
//           We are expert in “Private Label”
//         </Typography>
//       </Box>

//       <Box>
//         <Box
//           sx={{
//             width: "2px",
//             minHeight: "100%",
//             position: "fixed",
//             left: "50%",
//             transform: "translate(-50%)",
//             backgroundImage: `linear-gradient(${theme.palette.lincoBlue.main} 33%, rgba(255,255,255,0) 0%)`,
//             backgroundPosition: "right",
//             backgroundSize: "2px 20px",
//             backgroundRepeat: "repeat-y",
//             zIndex: 14,
//           }}
//           style={{ top: itemsScrollSpecs.top + 320 }}
//         />
//         <Stack
//           alignItems="center"
//           pb={50}
//           style={{ top: itemsScrollSpecs.top + 215 }}
//           sx={{
//             width: "100%",
//             bgcolor: "#FFF",
//             zIndex: 13,
//             left: "50%",
//             transform: "translate(-50%,0)",
//             position: "fixed",
//           }}
//         >
//           <Typography
//             textAlign="center"
//             pt={{ xs: 6, md: 10 }}
//             pb={5}
//             variant="h3"
//             color="lincoBlue.main"
//             zIndex={12}
//           >
//             Start
//           </Typography>
//           <Box
//             sx={{ width: 16, height: 16, borderRadius: "50%", zIndex: 12 }}
//             bgcolor="lincoBlue.main"
//           />
//         </Stack>

//         <Box position="relative">
//           {PROCESS_ITEMS.map((item, i) => (
//             <ProcessLevelItem
//               key={item.title}
//               index={i}
//               imgSrc={item.imgSrc}
//               title={item.title}
//               description={item.description}
//               link={item.link}
//               data={item.data}
//               itemsScrollSpecs={itemsScrollSpecs}
//             />
//           ))}
//         </Box>

//         <FAQTitle />
//       </Box>
//     </>
//   );
// }

export function ProcessLevel() {
  return <></>;
}
