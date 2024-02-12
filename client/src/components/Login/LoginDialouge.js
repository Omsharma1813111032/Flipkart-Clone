import {Dialog, TextField, Grid, Typography, Button, ThemeProvider, styled} from '@mui/material'
import { Theme } from '../../theme/Theme'
import { useState } from 'react'
import { loginApi, registerApi } from '../../services/Apis'
import { ToastContainer, toast } from 'react-toastify';

const Component = styled(Grid)`
    height:71vh; 
`

const ImageGrid = styled(Grid)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85% ;
    height:100%;
    padding:45px 35px;
    color:#fff;
`

const Wrapper = styled(Grid)`
    display:flex;
    flex-direction:column;
    padding:45px 35px;
    flex:1;
    & > div , & > button, &> p {
        margin-top:16px;
    }
`

const LoginButton = styled(Button)`

    background:#FB641B;
    color:#fff;
    height:48px;

`
const RequestOtpButton = styled(Button)`

    background:#fff;
    color:#2874f0;
    height:48px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/20%)

`

const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`

const CreateAccountText = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
`

const HideLeftGrdi = {
    display:{
        xxs:'none',
        sx:'none',
        sm:'block',
        md:'block',     
        lg:'block',     
        xl:'block',           
    }
}

const  RightGridd = {
    maxWidth:{
        xxs:'100%',
        sx:'100%',
        sm:'58.33333%',
        md:'58.33333%',     
        lg:'58.33333%',     
        xl:'58.33333%',  
    },flexBasis:{
        xxs:'100%',
        sx:'100%',
        sm:'58.33333%',
        md:'58.33333%',     
        lg:'58.33333%',     
        xl:'58.33333%',
    }

}

const LoginDialouge = ({open,setOpen}) => {

    const [login,setLogin] = useState(true);

    const [data,setData] = useState({
        name:'',
        email:'',
        phone:'',
        password:''
    })

    const handleClose = () => {
        setOpen(false);
        setLogin(true);
    }

    const toggleData = (val) =>{
        setLogin(val)
        setData({...data,
            name:'',
            email:'',
            phone:'',
            password:''
        })
    }

    const handleRegister = async(req,res) =>{
        const {name,phone,email,password} = data;

        if(!name || !phone || !email || !password){
            toast.error("All input are neccessary!!")
        }else{
            const response  = await registerApi(data);
            if(response.status===200){
                toast.success("user registered!!")
                toggleData(true)
            }else{
                toast.error(response.response.data.msg)
            }
        }
    }   


    const handleLogin = async(req,res) =>{

        const {email,password} = data

        if(!email || !password){
            toast.error("All input are neccessary!!")
        }else{
            const response  = await  loginApi(data);
            if(response.status===200){
                sessionStorage.setItem('accessToke',response.data.token)
                handleClose()
                alert("user loggedin!!")
            }else{
                toast.error(response.response.data.msg)
            }
        }

    }


  return (
    <Dialog open={open} onClose={()=>{handleClose()}} PaperProps={{sx:{maxWidth:'unsert', maxHeight:'unsert'}}} >
        <ThemeProvider theme={Theme}>

            {
                login ? 
                    <Component container>
                        <ImageGrid item xs={5} sx={HideLeftGrdi} >
                            <Typography variant="h5">Login</Typography>
                            <Typography style={{marginTop:20}} >Get access to your Orders. Whishlist and Reccomendations</Typography>
                        </ImageGrid>
                        <Wrapper item xs={7} sx={RightGridd} >
                            <TextField variant="standard" label="Enter your email address" name="email" type="email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
                            <TextField variant="standard" label="Enter your password" name="password" type="password" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} />
                            <Text>By continuing, you agree to flipkart's Term of use and privacy policy. </Text>
                            <LoginButton onClick={(e)=>{handleLogin()}} > Login </LoginButton>
                            <Typography style={{textAlign:'center'}} >OR</Typography>
                            <RequestOtpButton> Request OTP </RequestOtpButton>
                            <CreateAccountText onClick={()=>{toggleData(false)}} >New to Flipkart? create an account</CreateAccountText>
                        </Wrapper>
                    </Component>
                :
                <Component container style={{overflow:'scroll',scrollbarWidth:'none'}} >
                    <ImageGrid item xs={5} sx={HideLeftGrdi}>
                        <Typography variant="h5">Looks like you'r new here!</Typography>
                        <Typography style={{marginTop:20}} >Sign up with your mobile no to get started</Typography>
                    </ImageGrid>
                    <Wrapper item xs={7} sx={RightGridd} >
                        <Typography variant="h5" style={{textAlign:'center'}}>Sign up</Typography>
                        <TextField variant="standard" label="Enter your Name" type="text" name="name" value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}} />
                        <TextField variant="standard" label="Enter your Phone" type="text" name='phone' value={data.phone} onChange={(e)=>{setData({...data,phone:e.target.value})}} />
                        <TextField variant="standard" label="Enter your Email" type="email" name="email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
                        <TextField variant="standard" label="Enter your password" type="password" name="password" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}/>
                        <LoginButton onClick={()=>{handleRegister()}} > Sign Up </LoginButton>
                        <CreateAccountText  onClick={()=>{toggleData(true)}} >Already have an account?</CreateAccountText>
                    </Wrapper>
                </Component>
            }
        
        </ThemeProvider>
        <ToastContainer
            autoClose={1500}
        />
    </Dialog>
  )
}

export default LoginDialouge