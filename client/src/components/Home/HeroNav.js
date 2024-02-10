import {Box, styled, Typography} from "@mui/material"
import { navData } from "../../constants/data"

const Components = styled(Box)`
    background-color:#fff;
    display:flex;
    margin: 5px 40px 5px 40px;
    justify-content:space-between;
`

const Container = styled(Box)`
    padding:12px 8px;
    text-align:center;
`

const Texted = styled(Typography)`
    font-sixe:14px;
    font-weight:600;
    font-family:inherit;
`

const HeroNav = () => {
  return (
    <Components>
        {
            navData.map(data=>(
                <Container>
                    <img src={data.url} alt={data.text} style={{width:"64px"}} />
                    <Texted>{data.text}</Texted>
                </Container>
            ))
        }
    </Components>
  )
}

export default HeroNav