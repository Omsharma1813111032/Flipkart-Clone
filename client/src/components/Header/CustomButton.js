import {Box, Button, Typography, styled} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const Wrapper = styled(Box)`
    display:flex;
    margin:0 3% 0 auto;
    & > button, & > p, & > div{
        margin-right:40px;
        font-size:14px;
        align-items:center
    }
`

const CartWrapper = styled(Box)`
    display:flex;
    & > svg, &>p{
        font-size:14px;
    }
`


const LoginButton = styled(Button)`
    background-color:white;
    color:#2874f0;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
    &:hover {
        background-color: #fff;
        color:#2874f0;
    }
` 

const CustomButton = () => {
  return (
    <Wrapper>
        <LoginButton  variant="contained">Login</LoginButton>
        <Typography style={{marginTop:3,width:120}} >Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More..</Typography>

        <CartWrapper>
            <ShoppingCartIcon/>
            <Typography style={{ marginLeft: 10 }}>Cart</Typography>
        </CartWrapper>
    
    
    </Wrapper>
  )
}

export default CustomButton