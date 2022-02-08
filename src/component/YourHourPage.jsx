import React from 'react';
import {  Switch,  TextField,  FormControlLabel, Box, Card, Container, Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.3)), url("https://cdn.pixabay.com/photo/2022/01/24/17/04/dish-6964062_960_720.jpg")`,


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
    textcolor: {
        color: "white !important"
    }
}))


const YourHourPage = () => {
    const classes = useStyles();
    
    return <div className={classes.root}>
        <Container>
            <Grid container align='center'>
                <Grid item xs={12} style={{ height: "18vh" }}>
                    <img width="150px" style={{ marginTop: "30px", marginBottom: "30px" }} src="https://static.wixstatic.com/media/7bbc60_441b50150db44d4e9b5be6c8325e2949~mv2.png/v1/fill/w_233,h_85,al_c,lg_1,q_85/SouZen_Logo_Small.webp" />

                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>

                    <Box>

                        <Card elevation={20} style={{ height: "74vh", Width: "80vw" }}>
                            <Grid container style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "space-between" }}>
                                <Grid item style={{ marginTop: "15px" }}>
                                    <Typography style={{ fontSize: "30px", fontWeight: "bolder", color: 'white' }}>Your Hours</Typography>
                                    <Typography variant='h6' style={{ fontSize: "17px" }}> <span style={{ fontWeight: "bold", marginRight: "13px" }}>Step 1 of 4</span> Help us get to know you and your business</Typography>
                                </Grid>
                                {/* Beech ko Part start */}
                                <Grid item>
                                    <Grid container>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={10}>
                                            <Grid container style={{ marginBottom: "12px", display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Grid item align='left' xs={2}><Typography variant='h6'>Day</Typography></Grid>
                                                <Grid item xs={1}></Grid>
                                                <Grid item xs={2}></Grid>
                                                <Grid item xs={0}><Typography variant='h6'>Opening Hours</Typography></Grid>
                                                <Grid item xs={2}></Grid>
                                                <Grid item xs={0}></Grid>
                                                <Grid item xs={2}></Grid>
                                                <Grid item xs={0}></Grid>
                                                <Grid item xs={1}></Grid>
                                            </Grid>
                                            <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Grid item align='left' xs={2}>Monday</Grid>
                                                <Grid item xs={1}><FormControlLabel control={<Switch defaultChecked />} label="Open" /></Grid>

                                                <Grid item xs={2}><TextField
                                                    style={{ border: '2px solid white', borderRadius: '5px', fontColor: '#fff', padding: '1px', color: '#fff' }}
                                                    className={classes.textcolor}
                                                    id="time"
                                                    label=""
                                                    sx={{ backgroundColor: 'white' }}
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                        color: 'secondary'
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>|</Typography>

                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={1}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                            </Grid>
                                            <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Grid item align='left' xs={2}>Tuesday</Grid>
                                                <Grid item xs={1}><FormControlLabel control={<Switch defaultChecked />} label="Open" /></Grid>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>|</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={1}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                            </Grid>
                                            <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Grid item align='left' xs={2}>Wednesday</Grid>
                                                <Grid item xs={1}><FormControlLabel control={<Switch defaultChecked />} label="Open" /></Grid>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>|</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={1}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                            </Grid>
                                            <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Grid item align='left' xs={2}>Thrusday</Grid>
                                                <Grid item xs={1}><FormControlLabel control={<Switch defaultChecked />} label="Open" /></Grid>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>|</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={1}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                            </Grid>
                                            <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Grid item align='left' xs={2}>Friday</Grid>
                                                <Grid item xs={1}><FormControlLabel control={<Switch defaultChecked />} label="Open" /></Grid>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>|</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={1}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                            </Grid>
                                            <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Grid item align='left' xs={2}>Saturday</Grid>
                                                <Grid item xs={1}><FormControlLabel control={<Switch defaultChecked />} label="Open" /></Grid>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>|</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={1}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                            </Grid>
                                            <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Grid item align='left' xs={2}>Sunday</Grid>
                                                <Grid item xs={1}><FormControlLabel control={<Switch defaultChecked />} label="Open" /></Grid>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>|</Typography>
                                                <Grid item xs={2}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                                <Typography>To</Typography>
                                                <Grid item xs={1}><TextField
                                                    id="time"
                                                    label=""
                                                    size='small'
                                                    type="time"
                                                    defaultValue="07:30"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                    sx={{ width: 150 }}
                                                /></Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                    </Grid>
                                </Grid>
                                {/* Beech ko Part end */}
                                <Grid item style={{ marginBottom: "15px" }}>
                                    <Grid container style={{ display: "flex", justifyContent: "center" }}>
                                        <Grid item>
                                            <Button component={Link} to={"/holiday"} variant='text' color='secondary' size="large" style={{ color: 'red', marginRight: "25px" }} >Back</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button component={Link} to={"/integration"} variant='contained' color='primary' style={{ backgroundColor: 'red', borderRadius: "25px", width: "150%" }} >Upload</Button>
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

export default YourHourPage;
