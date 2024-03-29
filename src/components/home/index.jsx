import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { FormButton } from './css/home'
import {FaAmazon} from "react-icons/fa"
import {AiFillApple} from "react-icons/ai"
import { grey } from '@mui/material/colors'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='read'>
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
        <Box sx={{background:"white",display:"flex",flexDirection:'column',gap:3,padding:2,border:"1px solid #d8d8d8",borderRadius:2,alignItems:"center"}}>
        <Typography sx={{fontWeight:"bold"}} variant='h5'>Discover & read more</Typography>
        <FormButton>
            <FaAmazon size={20} style={{ marginRight: 10, }} color='black' /> Continue with
            Amazon
        </FormButton>
        <FormButton>
            <AiFillApple fill="black" size={20} style={{ marginRight: 10 }} />
            Continue with Apple
        </FormButton>
        <FormButton>
        <NavLink to={"/register"} style={{ cursor: "pointer",textTransform:"none",textDecoration:"none" ,color:'black'}}>  Sign up with email</NavLink>
        </FormButton>
        <Button variant='text' sx={{textTransform:"none",color:grey[800]}}>
            Already a member? &nbsp;  <NavLink to={"/login"} style={{ cursor: "pointer",color:"#00635D",textTransform:"none",textDecoration:"none" }}> Sign In</NavLink>
        </Button>
        </Box>

    </Box>
    </div>
  )
}

export default Home