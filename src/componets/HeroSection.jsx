import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import "../css/header.css";
import header from "../assets/img/header.jpg";
import useResponsive from "../Hooks/useResponsive";
import { Icon } from "@iconify/react";

export const HeroSection = () => {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "flex-end", m: 1 }}>
                <Button>
                    <Icon
                        height="27.42px"
                        width="27.42px"
                        icon="system-uicons:cross"
                        style={{ color: "white" }}
                    />
                </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        paddingTop: 10,
                        width: "80%",
                    }}
                >
                    <Typography
                        style={{
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: 200,
                            fontStyle: "normal",
                            fontSize: smUp ? 40 : 20,
                            textAlign: "center",
                        }}
                    >
                        Epic Games : An American video game and software
                        developer and publisher based in Cary, North Carolina.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
                <Box
                    sx={{
                        backgroundImage: `url(${header})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: smUp ? 500 : 300,
                        width: smUp ? "80%" : "95%",
                    }}
                ></Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
                <Box
                    sx={{
                        width: "70%",
                        fontFamily: "Poppins",
                        lineHeight: "27px",
                        fontWeight: 400,
                    }}
                >
                    <Typography sx={{ textAlign: "center", fontSize: "18px" }}>
                        Create, play, and battle with friends for free in
                        Fortnite. Be the last player standing in Battle Royale
                        and Zero Build, experience a concert or live event, or
                        discover over a million creator made games, including
                        racing, parkour, zombie survival, and more. Each
                        Fortnite island has an individual age rating so you can
                        find the one that's right for you and your friends. Find
                        it all in Fortnite ... Drop In.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", pt: 6 }}>
                <Button
                    sx={{
                        backgroundColor: "white",
                        width: "416px",
                        height: "60px",
                        color: "black",
                        borderRadius: 0,
                        "&:hover": {
                            backgroundColor: "white",
                            color: "black",
                            textDecoration: "none",
                        },
                    }}
                >
                    Visit Website
                </Button>
            </Box>
        </div>
    );
};
