import { Box, Divider, Rating, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const BookShow = () => {
    const {id} = useParams()

    const [data] = useOutletContext()
    const selected =data.find((user) => user.id === Number(id));
   

  return (
     <Box sx={{display:"flex",paddingTop:"6rem",height:"100%",width:"100%",px:3,gap:3}}>
       
        <div className='show'>
            <img src={`${selected?.cover_image}`} alt="no image" />
        </div>
        <Box sx={{display:"flex",flexDirection:"column",gap:5}}>
            <Box sx={{width:600}}>
                <Typography variant='h3' sx={{fontWeight:"bold"}}>{selected?.title}</Typography>
                <Typography sx={{mb:2,pl:1}}>{selected?.author}</Typography>
                <Rating name="half-rating" defaultValue={selected?.ratings} precision={0.5} readOnly style={{paddingLeft:6}}/>
                <Box sx={{mt:1,pl:"10px"}}>{selected?.description}</Box>
            </Box>
            <Divider/>
            <div style={{paddingLeft:8}}>
            <Typography variant='h5' sx={{mb:3}}>Reviews</Typography>
            {selected?.user_reviews?.map((item) =>{
                return (
                    <Box sx={{display:"flex",gap:3,mb:2}}>
                       <Typography > {item.user}</Typography>
                       <Box sx={{color:grey[600]}}>{item.review}</Box>
                    </Box>
                )
            })}
            </div>
        </Box>
    </Box>
  )
}

export default BookShow