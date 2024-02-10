import {Box, styled} from "@mui/material"
import HeroNav from "./HeroNav"
import Banner from "./Banner"

const BannerStyle = styled(Box)`
    padding:10px;
    background:#f2f2f2;
`

const Home = () => {
  return (

    <Box style={{marginTop:'54px',padding:'10px 0 10px 0'}}>

        <HeroNav/>
        <BannerStyle>
            <Banner/>
        </BannerStyle>
    </Box>
  )
}

export default Home