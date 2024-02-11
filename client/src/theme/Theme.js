import {createTheme} from "@mui/material"

export const Theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
  });



//   const HeroNavData = {
//     margin:{
//       xxs:0,
//       sx:0,
//       sm:0,
//       md:'5px 60px 5px 60px',     
//       lg:'5px 60px 5px 60px',     
//       xl:'5px 60px 5px 60px',     
  
//     }
//   }