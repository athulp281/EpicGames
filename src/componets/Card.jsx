import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export const Card = ({ img, about }) => {
    return (
        <div>
            <Box
                sx={{
                    height: "450px",
                    width: "347px",
                }}
            >
                <Paper
                    sx={{
                        height: "347px",
                        width: "347px",
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></Paper>
                <Box sx={{ padding: 3 }}>
                    <Typography
                        sx={{
                            fontFamily: "Roboto",
                            fontWeight: 300,
                            fontSize: "19px",
                            lineHeight: "22.27px",
                            textAlign: "center",
                            letterSpacing: "2%",
                        }}
                    >
                        {about}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};
