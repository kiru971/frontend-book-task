import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledTab, StyledUser } from './css/book';
import TableBook from './table';
import { grey } from '@mui/material/colors';
import { removeBook, updateTask } from '../../redux/slice/BookSlice';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';

const MyBook = () => {
    const mybook = useSelector((state) => state.book.books)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDel=(uses)=>{
        const id=uses.id
        dispatch(removeBook({id}))
        navigate("/home")
    }

    

  return (
    <Box sx={{display:"flex",paddingTop:"6rem",flexDirection:"column",height:"100%",width:"100%",px:3,gap:3,alignItems:"center"}}>
       <Typography variant='h5' color={grey[900]}> MyBook</Typography>
        <TableContainer sx={{ maxWidth: 800, maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTab align="center">Cover</StyledTab>
              <StyledTab>
               Title
              </StyledTab>
              <StyledTab>Author</StyledTab>
              <StyledTab>Avg Rating</StyledTab>
              <StyledTab align="center">Actions</StyledTab>
            </TableRow>
          </TableHead>
          <TableBody>
            {mybook.map((uses) => (
              <tr key={uses.id}>
                <TableCell align="center">
        <img src={`${uses.cover_image}`} alt="user" className="img" />
      </TableCell>
      <StyledUser>{uses.title}</StyledUser>
      <StyledUser sx={{ fontSize: 15 }}>{uses.author}</StyledUser>
      <StyledUser sx={{ fontSize: 15 }}>{uses.ratings}</StyledUser>
      <StyledUser align="center">
        <AiOutlineDelete
                      style={{ marginLeft: 15,cursor:"pointer" }}
                      color="black"
                      size={"30px"}
                      onClick={() => handleDel(uses)}
                    />
      </StyledUser>
              </tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default MyBook