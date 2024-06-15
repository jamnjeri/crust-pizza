import * as React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function SizesSection() {
  const sizes = ["S", "M", "L", "XL"];
  const theme = useTheme();
  const [activeSize, setActiveSize] = React.useState<string>("L");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          color: theme.palette.black.main,
          fontSize: "1.5rem",
          margin: "10px",
          textTransform: "uppercase",
        }}
      >
        Select Size
      </p>
      <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
        {sizes.map((size) => (
          <Button
            variant="outlined"
            key={size}
            style={{
              border: `2px solid ${theme.palette.black.main}`,
              backgroundColor:
                activeSize === size ? theme.palette.black.main : "transparent",
              color:
                activeSize === size
                  ? theme.palette.white.main
                  : theme.palette.black.main,
            }}
            sx={{
              width: {
                xs: "40px",
                sm: "50px",
                md: "60px",
                lg: "70px",
                xl: "80px",
              },
              height: {
                xs: "40px",
                sm: "50px",
                md: "60px",
                lg: "70px",
                xl: "80px",
              },
              padding: 0,
              borderRadius: "50%",
            }}
            onClick={() => setActiveSize(size)}
          >
            <Typography
              textAlign="center"
              fontSize={{
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
                xl: "1.8rem",
              }}
              padding="0"
            >
              {size}
            </Typography>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default SizesSection;
