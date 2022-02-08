import React from 'react';
import { Box, Card, Container, Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.3)), url("https://cdn.pixabay.com/photo/2022/01/24/17/04/dish-6964062_960_720.jpg")`,

        '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
            '& fieldset': {            // - The <fieldset> inside the Input-root
                borderColor: 'black',   // - Set the Input border
            },
            '&:hover fieldset': {
                borderColor: 'black', // - Set the Input border when parent has :hover
            },
            '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
                borderColor: 'black',
            }
        },
    },
    typo: {
        flexGrow: 1,
        textAlign: "left",
        fontWeight: "600",
    },
    text: {
        alignItems: "left"
    },
    gridItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    idea: {
        Color: "white",
        backgroundColor: "white",
        width: "20px"


    }
}))

const WelcomePage = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <Container>
            <Grid container align='center'>
                <Grid item xs={12} style={{ height: "15vh" }}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Box>
                        <Card elevation={20} style={{ height: "72vh", maxWidth: "50vw" }}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 120,
                                            width: 200,
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                        }}
                                        alt="The smart kitchen."
                                        src="https://mma.prnewswire.com/media/1007860/Souszen_Logo.jpg?p=facebook" />

                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={10}>
                                            <Grid container
                                                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '250%' }}
                                            >
                                                <Grid item><Typography style={{ fontWeight: "bold" }} variant='h4'>
                                                    Welcome
                                                </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography style={{ fontWeight: "bold" }} variant='subtitle2'>
                                                        Welcome to Souszen Manager,
                                                        your resource to build shopping lists, track costs, experiment with menu items,
                                                        find helpful resources, and grow your business,
                                                        your way.
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Button
                                                        component={Link} to={'/login'}
                                                        variant='contained' color='primary' size="Normal"
                                                        style={{ backgroundColor: 'red', borderRadius: "25px", width: "40%" }} >
                                                        Start
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Container>
    </div>;
};

export default WelcomePage;
