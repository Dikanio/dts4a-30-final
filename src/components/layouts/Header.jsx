import React, { useState } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../auth/firebase";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import LogoutIcon from '@mui/icons-material/LogoutRounded';
import { Link } from "react-router-dom";
//displayname
import { auth } from "../../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth"

// zustand
import useMovie, {
  // selectMovies,
  selectGetMovieByKeyword
} from "../../stores/Movie";

const Search = styled('div')(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '30%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export default function Header({ props }) {

  const [user, loading] = useAuthState(auth);
  const buttonLogoutOnClickHandler = async () => {
    await logOut();
    navigate("/login");
  };
  const navigate = useNavigate();

  const movieByKeyword = useMovie(selectGetMovieByKeyword);
  // const movies = useMovie(selectMovies);

  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (evt) => {
    setKeyword(evt.target.value);
  };
  const searchMovie = async (evt) => {
    evt.preventDefault();
    await movieByKeyword(keyword)
    navigate(`/find`);
  };
  return (
    // <Box sx={{ backgroundColor: "#141414" }}>
    //   <AppBar position="static" sx={{ backgroundColor: "#141414" }}>
    //     <Toolbar>
    //       <Typography variant="h6" component="div">
    //         Welcome
    //       </Typography>

    //       <Button
    //         color="inherit" onClick={buttonLogoutOnClickHandler}>
    //         Logout
    //       </Button>
    //       <Search>
    //         <SearchIconWrapper>
    //           <SearchIcon />
    //         </SearchIconWrapper>
    //         <StyledInputBase
    //           placeholder="Search…"
    //           inputProps={{ 'aria-label': 'search' }}
    //         />
    //       </Search>

    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <Box sx={{ flexGrow: 1, backgroundColor: "#141414" }}>
      <AppBar position="static" sx={{ backgroundColor: "#141414" }}>
        <Toolbar>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link style={{textDecoration: 'none',color:"white"}}  to="/" relative="path">
            Welcome {user.displayName}

            </Link>
           
          </Typography>


          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <form onSubmit={searchMovie}>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={onChangeKeyword}
              />
            </form>
          </Search>
          <Button sx={{ opacity: 0.5, marginLeft: 1, borderRadius: 0.5, minWidth: '100px', textTransform: 'none', backgroundColor: '#141414', color: 'white', ":hover": { backgroundColor: 'grey' } }} onClick={buttonLogoutOnClickHandler}>
            <LogoutIcon /> Logout
          </Button>
          {/* <Button
            color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box >

  );
}
