import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import useResponsive from "../Hooks/useResponsive";

export const ContactSection = () => {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box>
                    <Typography
                        variant="body1"
                        style={{
                            fontFamily: "Roboto",
                            fontSize: "45px",
                            fontWeight: 300,
                            lineHeight: "48px",
                            letterSpacing: "0.9599999785423279px",
                            textAlign: "center",
                        }}
                    >
                        Interested in delving deeper into the project?
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", p: 6 }}>
                <Typography
                    style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 300,
                        fontSize: smUp ? "28px" : "20px",
                        lineHeight: "32.81px",
                        width: smUp ? "60%" : "100%",
                        textAlign: "center",
                    }}
                >
                    If you'd like to explore further details about our
                    initiatives or any of our affiliated brands, don't hesitate
                    to connect. You can reach out to us via email at
                    hello@abc.com or give us a call at +91 480 20802730.
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
                <Stack direction={mdUp ? "row" : "column"} spacing={2}>
                    <Button
                        sx={{
                            backgroundColor: "black",
                            width: "372.51px",
                            height: "60px",
                            color: "white",
                            borderRadius: 0,
                            border: "1px solid white",
                            boxShadow: "0 0 0 2px white",
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            fontWeight: 500,
                            lineHeight: "27px",
                            letterSpacing: "0.96px",
                            textAlign: "center",

                            "&:hover": {
                                backgroundColor: "black",
                                color: "white",
                                textDecoration: "none",
                            },
                        }}
                    >
                        Ring us on Skype
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: "white",
                            width: "372.51px",
                            height: "60px",
                            color: "black",
                            borderRadius: 0,
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            fontWeight: 500,
                            lineHeight: "27px",
                            letterSpacing: "0.96px",
                            textAlign: "center",
                            "&:hover": {
                                backgroundColor: "white",
                                color: "black",
                                textDecoration: "none",
                            },
                        }}
                    >
                        Contact Us
                    </Button>
                </Stack>
            </Box>
        </div>
    );
};
