import React from 'react';
import {  TextField,  Box, Card, Container, Grid, makeStyles, Typography, Button } from '@material-ui/core';

import {Link} from 'react-router-dom';


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
    },
    mainGrid: {
        display: "flex",
        alignItems: "center"

    }
}))


const SquareLogin = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <Container>
            <Grid container align='center'>
                <Grid item xs={12} style={{ height: "15vh" }}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Box>
                        <Card elevation={20} style={{ height: "72vh", maxWidth: "50vw" }}>
                            <Grid container style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "space-between" }}>

                                <Grid item>
                                    <Typography style={{ fontSize: "35px", fontWeight: "bolder" }}>Login to Square</Typography>
                                </Grid>
                                <Grid item>
                                    <Card elevation={5} style={{ height: "43vh", width: "35vw" }}>
                                        <Grid cotainer style={{ height: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <Grid item>
                                            <img width="80px" height="80px" src="https://i.pinimg.com/originals/f5/df/72/f5df72adf368f1ae837967973faeb268.jpg" />
                                            </Grid>
                                            <Grid item style={{width:"80%", height:'100%', display:"flex", flexDirection:'column', justifyContent:'space-around', alignItems:"space-around"}}> 
                                                <TextField variant='outlined' size='small' fullWidth label='Email Address'></TextField>
                                                <TextField variant='outlined' size='small' fullWidth label='Password' gutterbottom></TextField>
                                                <Button variant='contained' color='primary' fullWidth>Sign In</Button>
                                            </Grid>
                                            <Grid item>
                                                <Typography color='textSecondary'>Don't have a Square account? <span style={{color:'blue'}} > Sign Up</span></Typography>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Grid container style={{ display: "flex", justifyContent: "center" }}>
                                        <Grid item>
                                            <Button component={Link} to={"/integration"} variant='text' color='secondary' size="large" style={{ color: 'red', marginRight: "25px" }} >Back</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button component={Link} to={"/youarein"} variant='contained' color='primary' style={{ backgroundColor: 'red', borderRadius: "25px", width: "150%" }} >Next</Button>
                                        </Grid>
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

export default SquareLogin;
