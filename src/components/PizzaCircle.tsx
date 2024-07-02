import { useEffect, useState } from "react";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import margherita from "../assets/margherita1.svg";
import italian from "../assets/Italian.svg";
import pepperoni from "../assets/Pepperoni.svg";
import cheese from "../assets/4-Cheese.svg";
import veggie from "../assets/Veggie.svg";
import perriperri from "../assets/Perri-perri.svg";
import { useTheme } from "@mui/material/styles";

const pizzaImages = [
  { src: margherita, name: "Margherita" },
  { src: italian, name: "Italian" },
  { src: pepperoni, name: "Pepperoni" },
  { src: cheese, name: "4-Cheese" },
  { src: veggie, name: "Veggie" },
  { src: perriperri, name: "Perri-perri" },
];

const PizzaCircle = () => {
  const theme = useTheme();
  const [semiCircleWidth, setSemiCircleWidth] = useState<number>(0);
  const [innerCircleWidth, setInnerCircleWidth] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const updateDimensions = () => {
      setSemiCircleWidth(window.innerWidth * 0.6);
      setInnerCircleWidth(window.innerWidth * 0.55);
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const navigateImage = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? pizzaImages.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === pizzaImages.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const semiCircleStyle: React.CSSProperties = {
    width: `${semiCircleWidth}px`,
    height: `${semiCircleWidth / 2}px`,
    borderRadius: `${semiCircleWidth}px ${semiCircleWidth}px 0 0`,
    backgroundColor: "none",
    position: "absolute",
    border: "2px solid #000000",
    bottom: 0,
    left: `calc(50% - ${semiCircleWidth / 2}px)`,
  };

  const innerCircleStyle: React.CSSProperties = {
    width: `${innerCircleWidth}px`,
    height: `${innerCircleWidth / 2}px`,
    borderRadius: `${innerCircleWidth}px ${innerCircleWidth}px 0 0`,
    backgroundColor: "none",
    position: "absolute",
    border: "2px solid #CCCCCC",
    bottom: 0,
    left: `calc(50% - ${innerCircleWidth / 2}px)`,
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "40px" }}>
        <IconButton onClick={() => navigateImage("prev")}>
          <ChevronLeftIcon />
        </IconButton>
        <p
          style={{
            color: theme.palette.black.main,
            fontSize: "1.5rem",
            margin: "10px",
            textTransform: "uppercase",
          }}
        >
          {pizzaImages[currentImageIndex].name}
        </p>
        <IconButton onClick={() => navigateImage("next")}>
            <ChevronRightIcon />
        </IconButton>
      </div>
      <div style={semiCircleStyle}>
        <div style={innerCircleStyle}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={pizzaImages[currentImageIndex].src}
              alt="Pizza"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: `${innerCircleWidth}px`,
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaCircle;
