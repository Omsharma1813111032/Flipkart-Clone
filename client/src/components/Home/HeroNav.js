import {Box, styled, Typography, ThemeProvider} from "@mui/material"
import Carousel from "react-multi-carousel"
import { navData } from "../../constants/data";
import { Theme } from "../../theme/Theme";



// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xxs: 0, // small phone
//       xs: 300, // phone
//       sm: 600, // tablets
//       md: 900, // small laptop
//       lg: 1200, // desktop
//       xl: 1536 // large screens
//     }
//   }
// });



const HeroNavData = {
  margin:{
    xxs:0,
    sx:0,
    sm:0,
    md:'5px 60px 5px 60px',     
    lg:'5px 60px 5px 60px',     
    xl:'5px 60px 5px 60px',     

  }
}

const Container = styled(Box)`
    padding:12px 8px;
    text-align:center;
`

const Texted = styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;
`




const HeroNav = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 9,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


  return (
    <ThemeProvider theme={Theme} >
      <Box sx={HeroNavData} >
          <Carousel
              responsive={responsive}
              autoPlay={false}
              removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
          >

          {
              navData.map((data,index)=>(
                  <Container key={index} >
                      <img src={data.url} alt={data.text} style={{width:"64px"}} />
                      <Texted>{data.text}</Texted>
                  </Container>
              ))
          }
          
          </Carousel>        
      </Box>
    </ThemeProvider>
  )
}

export default HeroNav