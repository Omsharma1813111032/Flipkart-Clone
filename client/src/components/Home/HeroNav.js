import {Box, styled, Typography} from "@mui/material"
import Carousel from "react-multi-carousel"
import { navData } from "../../constants/data";



const Components = styled(Box)`
    margin: 5px 60px 5px 60px;
`

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
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


  return (
    <Components>
        <Carousel
            responsive={responsive}
            autoPlay={false}
            removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
        >
        

        {
            navData.map(data=>(
                <Container>
                    <img src={data.url} alt={data.text} style={{width:"64px"}} />
                    <Texted>{data.text}</Texted>
                </Container>
            ))
        }
        
        </Carousel>        
    </Components>
  )
}

export default HeroNav