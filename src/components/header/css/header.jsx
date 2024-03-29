import { Box, Toolbar, Typography, styled } from "@mui/material"
import { NavLink } from "react-router-dom"

export const StyledLink = styled(NavLink)({
    textDecoration:'none',
    color: 'dimgray',
    fontSize: 15,
    "&.active":{
         color: 'aliceblue'
    },
    ":hover":{
         color: 'aliceblue'
    }
})

export const StyledTool =styled(Toolbar)({
    backgroundColor:'rgb(51, 48, 48)',
    color:'white',
    paddingLeft:'10px',
    display:'flex',
    justifyContent:'space-between',
})

export const StyledTypo = styled(Box)({
    display:'flex',
    gap:'30px',
    alignItems:"center"

})
