import * as React from "react";
import logo from "../assets/crustPizzaLogo.svg";
import bikeIcon from "../assets/deliverbikeIcon.svg";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const pages = [
  "Our Menu",
  "Catering",
  "Press",
  "Careers",
  "Rewards",
  "Franchise",
];

function Navbar() {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div
      id="navbar"
      style={{
        position: "static",
        backgroundColor: "transparent",
        boxShadow: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: isSmallDevice ? "space-between" : "center",
        padding: isSmallDevice ? "10px" : "12px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton sx={{ display: { xs: "flex", md: "flex" }, mr: 10 }}>
          <img src={logo} alt="logo" style={{ height: isSmallDevice ? "auto" : "130px" }} />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Button
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: theme.palette.black.main,
              display: "flex",
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" fontSize="1.5rem">
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            variant="contained"
            endIcon={<img src={bikeIcon} alt="bike" style={{ height: "35px", paddingLeft: "5px", paddingRight: "8px"}} />}
            sx={{
              my: 2,
              color: theme.palette.white.main,
              backgroundColor: theme.palette.orange.main,
              fontSize: "1.4rem",
              borderRadius: "40px",
            }}
          >
            Order Online
          </Button>
        </Box>
      </div>
      <div style={{ color: "black", display: "flex", alignItems: "center" }}>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ color: theme.palette.black.main }}
          >
            <MenuIcon sx={{ color: theme.palette.black.main }} />
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
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
