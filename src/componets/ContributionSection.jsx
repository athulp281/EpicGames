import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import useResponsive from "../Hooks/useResponsive";

const data = [
    { key: "5M", value: "Daily User Engagements" },
    { key: "$500K", value: "Revenue Surge for anPlatform" },
    { key: "10X", value: "ROAS on all our marketing campaign" },
];
export const ContributionSection = () => {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    return (
        <div>
            <Box>
                <Box>
                    <Typography
                        style={{
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: 200,
                            fontStyle: "normal",
                            fontSize: 42,
                            textAlign: "center",
                        }}
                    >
                        Our Contribution
                    </Typography>
                </Box>
                <Box
                    sx={{
                        pt: 4,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="body1"
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            fontWeight: 400,
                            lineHeight: "27px",
                            letterSpacing: "0em",
                            textAlign: "center",
                            width: "70%",
                        }}
                    >
                        Our core offering extends beyond mere profit generation;
                        we emphasize the growth and active involvement of our
                        user community. Collaborating with us represents an
                        investment, rather than a mere expenditure. Our
                        dedication to providing distinctive digital interactions
                        guarantees unparalleled benefits for our clientele.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: smUp ? 25 : 1,
                        paddingTop: smUp ? null : 10,
                    }}
                >
                    <Grid
                        container
                        spacing={{ xs: 2, md: 1 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {data.map((item, index) => {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={4}
                                    lg={4}
                                    xl={4}
                                    key={index}
                                >
                                    <Box>
                                        <Typography
                                            style={{
                                                fontFamily: "Roboto",
                                                fontSize: "80px",
                                                fontWeight: 200,
                                                lineHeight: "18px",
                                                letterSpacing: "0em",
                                                textAlign: "left",
                                                textAlign: "center",
                                                pb: 3,
                                            }}
                                        >
                                            {item.key}
                                        </Typography>
                                        <Box sx={{ p: 8 }}>
                                            <Typography
                                                variant="body1"
                                                style={{
                                                    fontFamily:
                                                        "Roboto, sans-serif",
                                                    fontWeight: 300,
                                                    fontSize: "25px",
                                                    lineHeight: "29.3px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {item.value}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};
