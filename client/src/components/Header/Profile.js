import {Typography, Box, Menu, MenuItem, styled} from "@mui/material"
import { useState } from "react"
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew"

const Component = styled(Menu)`
    margin-top:5px;
`

const LogoutText = styled(Typography)`
    font-size:14px;
    margin-left:2px;
`

const Profile = ({accountName, setaccount}) => {

    const [open,setOpen] = useState(null)
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(null);
    };

   
    const handleLogout = () =>{
        window.localStorage.removeItem("user")      
        handleClose()
        window.location.assign("/")
    }

  return (
    <>
        <Box onClick={handleClick} id="basic-button" >
            <Typography style={{margin:'2px',cursor:"pointer"}}  >{accountName}</Typography>
            
            <Component
                id="basic-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={()=>handleLogout()}>
                    <PowerSettingsNewIcon color="primary" fontSize="small" />
                    <LogoutText>Logout</LogoutText>
                </MenuItem>
            </Component>


        </Box>
    </>
  )
}

export default Profile