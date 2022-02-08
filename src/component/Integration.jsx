import React from 'react';
import { Switch, FormGroup, styled, Box, Card, Container, Grid, makeStyles, Typography, Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { integrateR } from '../redux/integrateSlice';

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


const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

const Holiday = () => {
    const classes = useStyles();

    const [toggle, setToggle] = useState(false);
    const [select, setSelect] = useState("");
    
    const location = useNavigate()
    const dispatch = useDispatch()

    const data = useSelector((state) => state.integrate)
    

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(integrateR({ toggle, select }))
        location("/squarelogin");

    }





    return <div className={classes.root}>
        <Container>
            <img width="150px" style={{ marginLeft: "500px", marginTop: "30px", marginBottom: "30px" }} src="https://static.wixstatic.com/media/7bbc60_441b50150db44d4e9b5be6c8325e2949~mv2.png/v1/fill/w_233,h_85,al_c,lg_1,q_85/SouZen_Logo_Small.webp" />
            <Grid container align='center'>
                <Grid item xs={12} style={{}}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Box>
                        <Card elevation={20} style={{ height: "76vh", maxWidth: "55vw" }}>
                            <Grid container >
                                {/* Header text start */}
                                <Grid item xs={2}></Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ marginTop: "20px", fontSize: '35px', fontWeight: "600" }} variant="h2">
                                        Integration
                                    </Typography>
                                    <Typography style={{ marginBottom: "20px", marginTop: "10px", fontWeight: "500" }} variant="body2"  >
                                        <span style={{ fontWeight: "bold", marginRight: "30px" }}>Step 4 of 4</span>Help us get to know your POS System.
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}></Grid>
                                {/* Header text end */}
                            </Grid>
                            {/* Main part after header start */}
                            <Grid container >
                                {/* spacer-left start */}
                                <Grid item xs={1}></Grid>
                                {/* spacer-left end */}




                                {/* Main part ko left part start */}

                                <Grid item xs={10}>
                                    <Grid container style={{ height: "10%", marginBottom: "2%" }}>
                                        <Grid item xs={12}>

                                        </Grid>
                                    </Grid>

                                    <Grid container style={{ marginBottom: "10%" }}>
                                        <Grid item xs={12}>
                                            <Grid container>

                                                <Grid item xs={6}>
                                                    <Grid container>
                                                        <Grid item xs={12}>
                                                            <Typography className={classes.typo}>Already have POS System?</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Grid container>
                                                        <Grid item xs={12}>
                                                            <FormGroup>
                                                                <Stack direction="row" spacing={1} alignItems="center">
                                                                    <Typography style={{ fontWeight: "600" }}>No</Typography>
                                                                    {data.toggle ?
                                                                        <AntSwitch onChange={(e) => setToggle(e.target.checked)} defaultChecked inputProps={{ 'aria-label': 'ant design' }} /> 
                                                                        :
                                                                        <AntSwitch onChange={(e) => setToggle(e.target.checked)} inputProps={{ 'aria-label': 'ant design' }} />
                                                                    }
                                                                    <Typography style={{ fontWeight: "600" }}>Yes</Typography>
                                                                </Stack>
                                                            </FormGroup>
                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container style={{ marginBottom: "1%" }}>
                                        <Grid item xs={12}>
                                            <Grid container>

                                                <Grid item xs={6}>
                                                    <Grid container>
                                                        <Grid item xs={12}>
                                                            <Typography className={classes.typo}>If yes, Select the one you are using</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Grid container>
                                                        <Grid item align="left" xs={12}>

                                                            <FormControl fullWidth>
                                                                <InputLabel variant="Standard" htmlFor="uncontrolled-native">
                                                                    POS System
                                                                </InputLabel>
                                                                <NativeSelect onChange={(e) => setSelect(e.target.value)}
                                                                    defaultValue={data.select}
                                                                    inputProps={{
                                                                        name: 'POS',
                                                                        id: 'uncontrolled-native',
                                                                    }}
                                                                >
                                                                    <option value="Wizard POS">Wizard POS</option>
                                                                    <option value="Super8 POS">Super8 POS</option>
                                                                    <option value="Square POS">Square POS</option>
                                                                </NativeSelect>
                                                            </FormControl>


                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Grid container>

                                                <Grid item xs={6}>
                                                    <Grid container>
                                                        <Grid item xs={12}>
                                                            <Typography className={classes.typo}></Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Grid container>
                                                        <Grid item align="left" xs={12}>

                                                            <img width="150px" height="150px" src="https://i.pinimg.com/originals/f5/df/72/f5df72adf368f1ae837967973faeb268.jpg" />
                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Button component={Link} to={"/yourhour"} variant='text' color='secondary' size="large" style={{ color: 'red', marginRight: "25px" }} >Back</Button>
                                            <Button onClick={handleClick} variant='contained' color='primary' size="normal" style={{ backgroundColor: 'red', borderRadius: "25px", width: "20%" }} >Next</Button>

                                        </Grid>
                                    </Grid>




                                </Grid>

                                {/* spacer-right ko start */}
                                <Grid item xs={1}></Grid>
                                {/* spacer-right end */}
                            </Grid>
                            {/* Main part ko after header end */}
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Container>
    </div>;
};

export default Holiday;
