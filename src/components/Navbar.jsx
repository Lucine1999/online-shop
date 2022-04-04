import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import {
    AccountCircle,
    Favorite,
    Search,
    ShoppingCart,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../features/users/usersSlice";

import "./Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
    const user = useSelector(selectUser);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const pages = ["Products"];
    const settings = user ? ["Profile", "Log Out"] : ["Log In", "Sign Up"];

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
                        <img src={logo} alt="logo" className="logo-style" />
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
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    component={Link}
                                    to={`/${page.toLowerCase()}`}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        {/* LOGO */}
                        <img src={logo} alt="logo" className="logo-style" />
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "black", display: "block" }}
                                component={Link}
                                to={`/${page.toLowerCase()}`}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton size="large">
                            <Search />
                        </IconButton>

                        <IconButton size="large" component={Link} to="/cart">
                            <Badge badgeContent={5} color="error">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                        <IconButton
                            size="large"
                            component={Link}
                            to="/favorites"
                        >
                            <Badge badgeContent={10} color="error">
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
                                        if (
                                            setting
                                                .toLowerCase()
                                                .replace(/\s/g, "") === "logout"
                                        ) {
                                            logoutOfApp();
                                        }
                                    }}
                                    component={Link}
                                    to={`${
                                        setting !== "Log Out"
                                            ? "/" +
                                              setting
                                                  .toLowerCase()
                                                  .replace(/\s/g, "")
                                            : "/"
                                    }`}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
