import { Box, Grid } from "@mui/material";
import React from "react";
import img1 from "../assets/img/img1.jpeg";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.jpeg";
import { Card } from "./Card";
import useResponsive from "../Hooks/useResponsive";

const data = [
    {
        img: img1,
        about: "Explore large, destructible environments where no two games are ever the same.",
    },
    {
        img: img2,
        about: "Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale",
    },
    {
        img: img3,
        about: "Discover even more ways to play across thousands of creator-made game genres",
    },
];

export const CardSection = () => {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <div>
            <Box
                sx={{
                    padding: smUp ? 22 : 1,
                    paddingTop: smUp ? null : 5,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 2, md: 1 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {data.map((item, index) => {
                        return (
                            <Grid item xs={12} sm={12} md={4} key={index}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Card img={item.img} about={item.about} />
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </div>
    );
};
