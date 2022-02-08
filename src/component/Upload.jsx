import React, { useState, useCallback, useEffect } from "react";
import { Box, Card, Container, Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useDropzone } from "react-dropzone";

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

    },
    dropzone: {
        border: "2px dotted black",
        height: "250px",
        width: "650px"
    },
    selectedimages:{
height: '100%',
width:'20%',
objectFit:'cover',
backgroundColor:'white',
margin:'10px',
border: '3px solid black'



    }
}))


const Upload = () => {
    const classes = useStyles();
    const [images, setimages] = useState([]);

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach(file => {
            const reader = new FileReader()
            reader.onload = () => {
                setimages(prevState => [...prevState, reader.result])
                // setimages(prevState => [...prevState, file]) 
            }
            reader.readAsDataURL(file)
        });
        console.log('acceptedFiles', acceptedFiles);
        console.log('rejectedFiles', rejectedFiles);
    }, [])

    useEffect(() => {
        console.log(images);
    }, [images]);


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*', });

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
                                    <Card className={classes.dropzone} {...getRootProps()}>
                                        <Grid container style={{ height: '100%', display: 'flex', flexDirection:'column' , alignItems: 'center', justifyContent: 'center' }} >
                                            <Grid item >
                                                <FileUploadIcon />
                                                <Typography>Drag files Here</Typography>
                                                <Typography {...getInputProps()}></Typography>
                                                <Button variant="contained" color="primary">{isDragActive ? "Drag Active" : "Select files from Device"}</Button>
                                            </Grid>
                                           { images.length > 0 &&
                                               <Grid item>
                                               {images.map((image, index) => <img className={classes.selectedimages} src={image} key={index} />)}

                                            </Grid>
                                            }
                                        </Grid>

                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Grid container style={{ display: "flex", justifyContent: "center" }}>
                                        <Grid item>
                                            <Button component={Link} to={"/youarein"} variant='text' color='secondary' size="large" style={{ color: 'red', marginRight: "25px" }} >Back</Button>
                                        </Grid>
                                        {images.length > 0 &&
                                        <Grid item>
                                            <Button component={Link} to={"/done"} variant='contained' color='primary' style={{ backgroundColor: 'red', borderRadius: "25px", width: "150%" }} >Upload</Button>
                                        </Grid>
                                    }
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
