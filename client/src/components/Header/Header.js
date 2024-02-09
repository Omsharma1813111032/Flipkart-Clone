import {AppBar, Box, Toolbar, styled, Typography} from "@mui/material"
import Search from "./Search"
import CustomButton from "./CustomButton"

const StyleHeader = styled(AppBar)`
    background-color:#2874f0;
    height:55px;
`

const Component = styled(Box)`
    margin-left:9%;
    line-height:0;
`

const SubHeading = styled(Typography)`
    font-size:10px;
    font-syle:italic;
`

const PlusImage = styled('img')({
    width:'10px',
    height:'10px',
    marginLeft:'4px'
})

const CustomButtonWrapper = styled(Box)`
    margin:0 5% 0 auto;
`

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';  
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    
    return (
    <StyleHeader>
        <Toolbar style={{minHeight:"55px"}} >
            <Component>
                <img src={logoURL} alt="icon" style={{width:'75px'}} />
                <Box style={{display:'flex'}} > 
                    <SubHeading>  Explore 
                        <Box component="span" style={{color:"#ffe500"}} > Plus  </Box> 
                    </SubHeading>
                    <PlusImage src={subURL} alt="subicon" />
                </Box>
            </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButton/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyleHeader>
)
}

export default Header