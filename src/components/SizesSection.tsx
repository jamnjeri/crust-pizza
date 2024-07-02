import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

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
          <Box
            key={size}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: activeSize === size ? "#000000" : "none",
              color: activeSize === size ? "#FFFFFF" : "#000000",
              fontSize: "24px",
              textAlign: "center",
              lineHeight: "50px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: '2px solid #000000',
              cursor: "pointer",
              "@media (max-width: 600px)": {
                width: "30px",
                height: "30px",
                fontSize: "16px",
                lineHeight: "30px",
              },
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              },
            }}
            onClick={() => setActiveSize(size)}
          >
            {size}
          </Box>
        ))}
      </div>
    </div>
  );
}

export default SizesSection;
