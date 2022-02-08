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

const Holiday = () => {
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
                                            <Grid container style={{ marginBottom: "3%" }}>
                                                <Grid item xs={12}>
                                                    <Typography style={{ fontWeight: "bold" }} variant='h4'>You're In!</Typography>
                                                </Grid>
                                            </Grid>

                                            <Grid container style={{ marginBottom: "3%" }}>
                                                <Grid item xs={12}>
                                                    <Typography style={{ fontWeight: "bold" }} variant='subtitle2'>Welcome to souszen Manager, your resource to build shopping lists, track costs,experiment with menu items, find helpful resources, and grow your business, your way.</Typography>
                                                </Grid>
                                            </Grid>

                                            <Grid container style={{ marginBottom: "3%" }} >
                                                <Grid item xs={12}>
                                                    <Typography style={{ fontWeight: "bold" }} variant='subtitle2'>It all started by entering each of your menu items, including specialties and extras. we'll use the information you enter to create custom tools to help you manage your business.</Typography>
                                                </Grid>
                                            </Grid>

                                            <Grid container style={{ marginBottom: "6%" }}>
                                                <Grid item xs={12}>
                                                    <Typography style={{ fontWeight: "bold" }} variant='subtitle2'>Get started by entering your own recipe items or by adding uploading recipe in whatever format you have and souszen team will build menu for you.</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container >
                                                <Grid item xs={12}>
                                                <Grid container>
                                                    
                                                    <Grid item xs={5}>
                                                    <Button variant='contained' color='secondary' size="small" style={{ backgroundColor: 'red', borderRadius: "25px", width: "60%", }} >Build My Menu</Button>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                    <Typography style={{ fontWeight: "bold", color:"red" }} variant='subtitle2'>Or</Typography>
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                    <Button component={Link} to={"/upload"} variant='contained' color='primary' size="small" style={{ backgroundColor: 'red', borderRadius: "25px", width: "60%" }} >Upload My Menu</Button>
                                                    </Grid>
                                                    
                                                </Grid> 
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

export default Holiday;
