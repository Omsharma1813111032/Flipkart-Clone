import {Box, Button, Typography, styled} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import LoginDialouge from "../Login/LoginDialouge"
import { useContext, useState } from "react"
import { dataContext } from "../../contextApi/DataProvider"
import Profile from "./Profile"


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

    const [openDialog, setOpenDialog] = useState(false);
    const {account, setAccount} = useContext(dataContext)
    console.log(account)
    
    let query = true
    if(account.name===''){
        query = false
    }else{
        query = true
    }
    // {"name":"","email":"","phone":""}
    return (
        <Wrapper>
            
            {
                query ? <Profile accountName={account.name} accountEmail={account.email} setaccount={setAccount} /> : <LoginButton  variant="contained" onClick={()=>{setOpenDialog(true)}}>Login</LoginButton>
            }
            {/* query ? <Profile accountName={account.name} accountEmail={account.email} setaccount={setAccount} /> : <LoginButton  variant="contained" onClick={()=>{setOpenDialog(true)}}>Login</LoginButton> */}
                     
            <Typography style={{marginTop:3,width:120}} >Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More..</Typography>

            <CartWrapper>
                <ShoppingCartIcon/>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </CartWrapper>

            <LoginDialouge open={openDialog} setOpen = {setOpenDialog} />
        
        </Wrapper>
  )
}

export default CustomButton