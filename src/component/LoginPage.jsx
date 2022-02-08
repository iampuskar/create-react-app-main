import React from 'react';
import { Box, Card, Container, Grid, makeStyles, Typography, TextField, Button} from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginR } from '../redux/loginSlice';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.3)), url("https://cdn.pixabay.com/photo/2022/01/24/17/04/dish-6964062_960_720.jpg")`
    },
    typo: {
        flexGrow: 1,
        textAlign: "left"
    },
    text: {
        alignItems: "left"
    }
}))

const LoginPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(loginR({email,password,confirmPassword}));
        location("/profile");
    }

    return <div className={classes.root}>
        <Container>
        <img width="150px" style={{marginLeft:"500px", marginTop:"50px", marginBottom:"30px"}} src="https://static.wixstatic.com/media/7bbc60_441b50150db44d4e9b5be6c8325e2949~mv2.png/v1/fill/w_233,h_85,al_c,lg_1,q_85/SouZen_Logo_Small.webp" />
            <Grid container align='center'>
                <Grid item xs={12} style={{ }}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Box>
                        <Card elevation={20} style={{ height: "75vh", maxWidth: "50vw" }}>
                            <Grid container >
                                <Grid item xs={12}><Typography style={{ marginBottom: "30px", marginTop: "20px", fontSize: '50px', fontWeight: "600" }} variant="h2">Create Account</Typography></Grid>
                            </Grid>
                            <Grid container >
                                <Grid item xs={2}></Grid>
                                <Grid item xs={8}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography className={classes.typo} style={{ fontSize: "18px" }} variant="h6" gutterBottom>Email Address</Typography>
                                            <TextField onChange={(e)=>setEmail(e.target.value)} style={{ marginBottom: "10px" }} size="small" fullWidth variant="outlined" id="outlined-basic" label="Email">sss</TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className={classes.typo} style={{ fontSize: "18px" }} variant="h6" gutterBottom>Enter your Password</Typography>
                                            <TextField onChange={(e)=>setPassword(e.target.value)} style={{ marginBottom: "10px" }} size="small" fullWidth variant="outlined" id="outlined-basic" label="Password">sss</TextField>
                                            <Typography className={classes.typo} style={{fontSize:'13px', paddingBottom:'10px'}}>Password must be atleast 6 character and contain both lowercase and uppercase letters.</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className={classes.typo} style={{ fontSize: "18px" }} variant="h6" gutterBottom>Confirm Password</Typography>
                                            <TextField onChange={(e)=>setConfirmPassword(e.target.value)} style={{ marginBottom: "40px" }} size="small" fullWidth variant="outlined" id="outlined-basic" label="Confirm Password" >sss</TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                        <Button onClick={handleClick} variant='contained' color='primary' size="large" style={{backgroundColor:'red', borderRadius:"20px", width:'40%'}} >Next</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={3}></Grid>

            </Grid>
        </Container>
    </div>;
};

export default LoginPage;
