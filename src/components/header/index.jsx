import { AppBar, Box, IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { StyledLink, StyledTool, StyledTypo } from './css/header'
import { useNavigate } from 'react-router-dom'

const Header = ({filterBySearch}) => {

    const navigate = useNavigate()
    const item = JSON.parse(sessionStorage.getItem("user"));
  
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        if (!item?.[0]) {
          alert("Please Login");
          navigate("/login");
        } else {
          setAnchorElUser(event.currentTarget);
        }
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    const handleLogout =() =>{
        sessionStorage.clear()
        navigate('/')
      }

     
  return (
    
      <AppBar>
      <StyledTool>
          <StyledTypo variant="h5">
            <Box sx={{fontSize:25}}>Book Seller</Box>
            <Box>
              <StyledLink to="/home">Home</StyledLink>
            </Box>
            <Box>
              <StyledLink to="/mybooks">My Books</StyledLink>
            </Box>
          </StyledTypo>
          {/* <Box>
            <button className="bt" onClick={handleOut}>
              Log Out
            </button>
          </Box> */}
          <Box>
          <input
            type="search"
            name="search"
            className="boxsearch"
            placeholder="search..."
            onChange={filterBySearch}
          />
                <IconButton
                  className="nav"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                >
                  <img
                    src={`${item ? item[0].img : "noUser.jpg"}`}
                    alt="download"
                  />
                </IconButton>
                {anchorElUser && (
                  <Menu
                    sx={{ mt: "40px" }}
                    disableScrollLock
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                    {/* <MenuItem onClick={handleCloseUserMenu}>
                      My account
                    </MenuItem> */}
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                )}
              </Box>
        </StyledTool>    
      </AppBar>
    
  )
}

export default Header