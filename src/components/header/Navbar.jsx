import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import USA from "../../assets/flags/usa.png";
import Armenia from "../../assets/flags/armenia.png";



import {
  AccountCircle,
  Favorite,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../../features/users/usersSlice";
import {
  selectCart,
  selectWishlist,
} from "../../features/products/productsSlice";
import logo from "../../assets/logo.jpg";

const countries = [
  {
    code: "AM",
    label: "Armenia",
    src: Armenia,
    link: " ",
    value: "AM"
  },
  {
    code: "EN",
    label: "USA",
    src: USA,
    link: " ",
    value: "EM"
  } 
];

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
   

  },
  formControl: {
    marginLeft: theme.spacing(4),
    minWidth: 60,
    backgroundColor: "transparent",
    
  },
  select: {
    textAlign: "center",
    textDecoration: "none"
  }
}));

const Navbar = ({ changeLanguage, t }) => {

  const classes = useStyles();
  const [country, setCountry] = React.useState(Armenia);
  const [open, setOpen] = React.useState(false);
  

  const handleChange = event => {
    setCountry (event.target.value);
    changeLanguage(event.target.value)
    console.log(event.target)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const user = useSelector(selectUser);
  const cartItems = useSelector(selectCart);
  const wishlistItems = useSelector(selectWishlist);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const pages = [{ page: "products", name: t('description.products') }];
  const settings = user ? [t('description.profile'), t('description.logout')] : [t('description.login'), t('description.signup')];

  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <AppBar
      className="navbar"
      sx={{ backgroundColor: "white", color: "black" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              textDecoration: "none",
              color: "black",
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src={logo} alt="logo" style={{ width: "50px" }} />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={`/${page.page}`}
                >
                  <Typography
                    textAlign="center"
                    style={{ textTransform: "capitalize" }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            {/* LOGO */}
            <img
              src={logo}
              alt="logo"
              className="logo-style"
              style={{ width: "50px" }}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
                component={Link}
                to={`/${page.page}`}
                style={{ textTransform: "capitalize" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton size="large">
              <Search />
            </IconButton>

            <IconButton size="large" component={Link} to="/cart">
              <Badge
                badgeContent={
                  Object.keys(cartItems).length
                    ? Object.keys(cartItems).length
                    : null
                }
                color="error"
              >
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton size="large" component={Link} to="/favorites">
              <Badge
                badgeContent={
                  wishlistItems.length ? wishlistItems.length : null
                }
                color="error"
              >
                <Favorite />
              </Badge>
            </IconButton>

            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                size="large"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                //setting.toLowerCase().replace(/\s/g, '') === 'logout') ?  logoutOfApp() : null;
                <MenuItem
                  key={setting}
                  onClick={() => {
                    handleCloseUserMenu();
                    if (setting === "Log Out" || setting === "Դուրս Գալ") {
                      logoutOfApp();
                    }
                  }}
                  component={Link}
                  to={ `${setting === "Log Out" ? "/"
                          : setting === "Log In" || setting === "Մուտք" ? "/login" 
                          : setting === "Sign Up" || setting === "Գրանցվել" ? "/signup" : "/"}`
    }
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="App-header">

            {/* <button type="button" onClick={() => changeLanguage("am")}>
              AM
            </button>
            <button type="button" onClick={() => changeLanguage("en")}>
              EN
            </button> */}

<form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="open-select" />
        <Select
        
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          name="country"
          onChange ={handleChange}
          inputProps={{
            id: "open-select"
          }}
        >
          {countries.map((option, key) => (
            <MenuItem 
            value={option.code} key={key} >
              <img src={option.src} alt={option.label} />{" "}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
 



          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
