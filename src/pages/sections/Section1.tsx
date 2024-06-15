import * as React from 'react';
import background from '../../assets/background1.png';
import Box from '@mui/material/Box';
import Navbar from "../../components/Navbar";

function Section1() {
    return (
        <Box
         style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            height: "100vh",
            color: "#f5f5f5"
         }}
        >
            <Navbar />
        </Box>
    );
}

export default Section1;