import React, { useState } from "react";
import { Switch, stack, FormGroup, Avatar, TextField, styled, FormControlLabel, Box, Card, Container, Grid, makeStyles, Typography, Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import { Link } from 'react-router-dom';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Dropzone from "react-dropzone";

const useStyles = makeStyles((theme) => ({
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

const label = { inputProps: { 'aria-label': 'Switch demo' } };



const Upload = () => {
    const classes = useStyles();
    const [fileNames, setFileNames] = useState([]);
    const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));

    return <div className={classes.root}>
        <Container>
            <Grid container align='center'>
                <Grid item xs={12} style={{ height: "18vh" }}>
                    <img width="150px" style={{ marginTop: "30px", marginBottom: "30px" }} src="https://static.wixstatic.com/media/7bbc60_441b50150db44d4e9b5be6c8325e2949~mv2.png/v1/fill/w_233,h_85,al_c,lg_1,q_85/SouZen_Logo_Small.webp" />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Box>
                        <Card elevation={20} style={{ height: "72vh", maxWidth: "60vw" }}>
                            <Grid container style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "space-between" }}>

                                <Grid item>
                                    <Typography style={{ fontSize: "27px", fontWeight: "bolder" }}>Upload Recipe and Menu</Typography>
                                    <Typography color='textSecondary' variant='caption' style={{}}>Upload Recipe and Menu of your Resturant. Souszen team will build menu for you</Typography>
                                </Grid>
                                <Grid item>
                                    <Card elevation={2} style={{ height: "43vh", width: "45vw", border: "1px dashed  black", borderRadius: "7%" }}>
                                        

                                       
                                        <Grid container style={{ height: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Grid item>
                                                <FileUploadIcon />
                                                <Typography color='textSecondary' style={{ fontWeight: 'bold', color: "black" }}>Drag files here</Typography>
                                            </Grid>
                                            <Grid item >
                                                {/* <Typography color='textSecondary' style={{ fontWeight: 'bold', fontSize: '13px' }} gutterBottom>OR</Typography> */}
                                                <Dropzone
                                            onDrop={handleDrop}
                                            accept="image/*"
                                            minSize={1024}
                                            maxSize={3072000}
                                        >
                                            {({ getRootProps, getInputProps }) => (
                                                <div {...getRootProps({ className: "dropzone" })}>
                                                    <input {...getInputProps()} />
                                                    <p>OR</p>
                                                </div>
                                            )}
                                        </Dropzone>
                                            </Grid>

                                            <Grid item>
                                                <Button style={{ borderRadius: '20px', fontSize: '12px', backgroundColor: 'blue' }} variant='contained' color='secondary'>Select file from your device</Button>
                                                {fileNames.map(fileName => (
                                            <li key={fileName}>{fileName}</li>
                                        ))}
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Grid container style={{ display: "flex", justifyContent: "center" }}>
                                        <Grid item>
                                            <Button component={Link} to={"/youarein"} variant='text' color='secondary' size="large" style={{ color: 'red', marginRight: "25px" }} >Back</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant='contained' color='primary' style={{ backgroundColor: 'red', borderRadius: "25px", width: "150%" }} >Upload</Button>
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

export default Upload;
