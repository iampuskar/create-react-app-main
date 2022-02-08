import React, { useState } from 'react';
import { TextField, Box, Card,  Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { update } from '../redux/userSlice';


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


const Profile = () => {
    const classes = useStyles();

    const [fname, setFirstName] = useState("data.fname")
    const [lname, setLastName] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")

    const location = useNavigate()
    const dispatch = useDispatch()

    const data = useSelector((state) => state.user)
    // console.log(data);

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(update({ fname, lname, country, phone }))
        location("/business");

    }

    return <div className={classes.root}>

        <Grid container align='center'>
            <Grid item xs={12} style={{ height: "18vh" }}>
                <img width="150px" style={{ marginTop: "30px", marginBottom: "30px" }} src="https://static.wixstatic.com/media/7bbc60_441b50150db44d4e9b5be6c8325e2949~mv2.png/v1/fill/w_233,h_85,al_c,lg_1,q_85/SouZen_Logo_Small.webp" />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Box>
                    <Card elevation={20} style={{ height: "72vh", maxWidth: "50vw" }}>
                        <Grid container style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "space-between" }}>

                            <Grid item>
                                <Typography style={{ fontSize: "30px", fontWeight: "bolder" }}>User Profile</Typography>
                                <Typography variant='h6' style={{ fontSize: "17px" }}> <span style={{ fontWeight: "bold", marginRight: "13px" }}>Step 1 of 4</span> Help us get to know you and your business</Typography>
                            </Grid>
                            {/* form part */}

                            <Grid item>

                                <Grid Container style={{ display: 'flex', marginBottom: '30px' }} >
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={5} style={{ display: 'flex', alignItems: "flex-start", flexDirection: "column" }}>
                                        <Typography variant='caption' style={{ fontWeight: 'bold' }}>First Name</Typography>
                                        <TextField onChange={(e) => setFirstName(e.target.value)} size='small' variant='outlined' label={data.fname} required></TextField>
                                    </Grid>
                                    <Grid item xs={5} style={{ display: 'flex', alignItems: "flex-start", flexDirection: "column" }}>
                                        <Typography variant='caption' style={{ fontWeight: 'bold' }}>Last Name</Typography>
                                        <TextField  onChange={(e) => setLastName(e.target.value)} size='small' variant='outlined' label={data.lname} required></TextField>
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                </Grid>

                                <Grid Container style={{ display: 'flex' }} >
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={5} style={{ display: 'flex', alignItems: "flex-start", flexDirection: "column" }}>
                                        <Typography variant='caption' style={{ fontWeight: 'bold' }}>Country</Typography>
                                        <TextField  onChange={(e) => setCountry(e.target.value)} size='small' variant='outlined' label={data.country} ></TextField>
                                    </Grid>
                                    <Grid item xs={5} style={{ display: 'flex', alignItems: "flex-start", flexDirection: "column" }}>
                                        <Typography variant='caption' style={{ fontWeight: 'bold' }}>Phone Number</Typography>
                                        <TextField onChange={(e)=>setPhone(e.target.value)} size='small' variant='outlined' placeholder={data.phone} ></TextField>
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                </Grid>

                            </Grid>
                            {/* form-part */}

                            <Grid item>
                                <Grid container style={{ display: "flex", justifyContent: "center" }}>
                                    <Grid item>
                                        <Button component={Link} to={'/'} variant='text' color='secondary' size="large" style={{ color: 'red', marginRight: "25px" }} >Back</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={handleClick} variant='contained' color='primary' style={{ backgroundColor: 'red', borderRadius: "25px", width: "150%" }} >Upload</Button>
                                    </Grid>
                                </Grid>
                            </Grid>


                        </Grid>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>

    </div>;
};

export default Profile;
