import { AppBar, Box, Card, Grid, Rating, Typography } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useOutletContext } from 'react-router-dom'
import { addbooks, removeTask } from '../../redux/slice/BookSlice'
import ReactPaginate from 'react-paginate'

const Dashboard = () => {
  const [data] = useOutletContext()
 
  const navigate = useNavigate()
 
  const dispatch = useDispatch()
  const [itemOffset, setItemOffSet] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 5;

  
  useEffect(() => {
    const endOffSet = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffSet));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handleClick = (e) => {
    const newOffSet = (e.selected * itemsPerPage) % data.length;
    setItemOffSet(newOffSet);
  };


  const handleItem = (e,item) =>{
    dispatch(addbooks(item))
    navigate('/mybooks')
  }
 
  return (
    <Box sx={{display:"flex",paddingTop:"6rem",flexDirection:"column",height:"100%",width:"100%",px:3,gap:3,alignItems:"center"}}>
       <Typography variant='h5' color={grey[900]}>Book List</Typography>
       <Box sx={{pl:1,display:"flex",flexDirection:"column",gap:3}}>
       {currentItems?.map((item,index) =>{
        return(
          <Box key={item.id} sx={{display:"flex",justifyContent:"space-between",gap:3,alignItems:"center"}}>
            <div style={{display:"flex",gap:"18px"}}>
              <div style={{width:20}}>{item.id}</div>
              <div className='book'>
               <img src={`${item.cover_image}`} alt="noimage" /> 
            </div>
            <Box sx={{display:"flex",flexDirection:"column"}}>
             
                <NavLink to={`/home/book/${item.id}`} style={{textTransform:"none",textDecoration:"none",color:"black" }}>
                 <Typography variant='subtitle1' sx={{fontWeight:"bold",
              color:grey[800],cursor:"pointer",
             }}>
                {item.title}
                </Typography>
                </NavLink>
                
              <Typography variant='caption'>{item.author}</Typography>
              <Rating name="half-rating" defaultValue={item.ratings} precision={0.5} readOnly />
            </Box>
            </div>
            <Box>
              <button 
              style={{background:"#409D69",color:"white",borderRadius:5,padding:6,fontSize:14,border:"none"}} 
              onClick={(e) => handleItem(e,item)}>Want to Read</button>
            </Box>
          </Box>
        )
       })}
     
       </Box>
       <div className="self-end">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handleClick}
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pages"
          activeLinkClassName="active"
          pageLinkClassName="pages-num"
          previousLinkClassName="pages-num"
          nextLinkClassName="pages-num"
          breakLinkClassName="pages-num"
        />
      </div>
    </Box>
  )
}

export default Dashboard