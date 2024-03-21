import { Box, Typography } from "@mui/material";
import React from "react";
import useResponsive from "../Hooks/useResponsive";

export const Footer = () => {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    pt: 31,
                    pb: 6,
                }}
            >
                <Typography
                    variant="body1"
                    style={{
                        fontFamily: "Roboto",
                        fontSize: smUp ? "19px" : "10px",
                        fontWeight: 300,
                        lineHeight: "26px",
                        letterSpacing: "0em",
                        textAlign: "left",
                    }}
                >
                    © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights
                    Reserved
                </Typography>
            </Box>
        </div>
    );
};
