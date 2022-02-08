import React, {useState} from 'react';
import { Box, Card, Container, Grid, makeStyles, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { businessR } from '../redux/businessSlice';
import { useSelector } from 'react-redux';

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

const BusinessProfile = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    
    const [businessContact, setBusinessContact] = useState("");
    const [phone, setPhone] = useState("");
    const [call, setCall] = useState("");
    const [website, setWebsite] = useState("");
    const [exterior, setExterior] = useState("");
    const [interior, setInterior] = useState("");
    const [twitter, setTwitter] = useState("");
    const [colony, setColony] = useState("");
    const [facebook, setFacebook] = useState("");
    const [state, setState] = useState("");
    const [cp, setCp] = useState("");
    const [instagram, setInstagram] = useState("");

    const location = useNavigate()

    const handleClick = (e) => {
            e.preventDefault();
            dispatch(businessR({businessContact,phone,call,website,exterior,interior,twitter,colony,facebook,state,cp,instagram}));
            location("/holiday")
    }



    const data = useSelector((state)=> state.business)
    

    return <div className={classes.root}>
        <Container>
            <img width="150px" style={{ marginLeft: "500px", marginTop: "50px", marginBottom: "30px" }} src="https://static.wixstatic.com/media/7bbc60_441b50150db44d4e9b5be6c8325e2949~mv2.png/v1/fill/w_233,h_85,al_c,lg_1,q_85/SouZen_Logo_Small.webp" />
            <Grid container align='center'>
                <Grid item xs={12} style={{}}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Box>
                        <Card elevation={20} style={{ height: "75vh", maxWidth: "60vw" }}>
                            <Grid container >
                                <Grid item xs={12}>
                                    <Typography style={{ marginBottom: "20px", marginTop: "20px", fontSize: '35px', fontWeight: "600" }} variant="h2">
                                        Business Profile
                                    </Typography>
                                    <Typography style={{ marginBottom: "30px", marginTop: "20px", fontWeight: "400" }} variant="p">
                                        <span style={{ fontWeight: "600" }}>Step 2 of 4</span> Help us get to know your business
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}  >
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4} spacing={2} >
                                    <Grid container>
                                        <Grid item xs={12} >
                                            <Typography className={classes.typo} style={{marginTop: "20px", fontSize: "14px" }} variant="subtitle1" gutterBottom>Business Contact Email</Typography>
                                            <TextField style={{ marginBottom: "10px" }} onChange={(e)=>setBusinessContact(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.businessContact}>sss</TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1" gutterBottom>Website URL (optional)</Typography>
                                            <TextField style={{ marginBottom: "10px" }} onChange={(e)=>setWebsite(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.website}>sss</TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1" gutterBottom>Twitter URL (optional)</Typography>
                                            <TextField style={{ marginBottom: "10px" }} onChange={(e)=>setTwitter(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.twitter}>sss</TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1" gutterBottom>State</Typography>
                                            <TextField style={{ marginBottom: "10px" }} onChange={(e)=>setState(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.state}>sss</TextField>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <Grid item xs={12}>
                                        <Typography className={classes.typo} style={{marginTop: "20px", fontSize: "14px" }} variant="subtitle1" gutterBottom>Phone Number</Typography>
                                        <TextField style={{ marginBottom: "10px" }} onChange={(e)=>setPhone(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.phone}>sss</TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1" gutterBottom>Exterior Number</Typography>
                                        <TextField style={{ marginBottom: "10px" }} onChange={(e)=>setExterior(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.exterior}>sss</TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1" gutterBottom>Colony of Municipality</Typography>
                                        <TextField style={{ marginBottom: "10px" }} onChange={(e)=>setColony(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.colony}>sss</TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1" gutterBottom>CP</Typography>
                                        <TextField style={{ marginBottom: "10px" }} onChange={(e)=>setCp(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.cp}>sss</TextField>
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <Grid item xs={12} >
                                        <Typography className={classes.typo} style={{marginTop: "20px", fontSize: "14px" }} variant="subtitle1" gutterBottom>Call</Typography>
                                        <TextField style={{ marginBottom: "10px" }} onChange={(e)=>setCall(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.call}>sss</TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1" gutterBottom>Interior Number</Typography>
                                        <TextField style={{ marginBottom: "10px" }} onChange={(e)=>setInterior(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.interior}>sss</TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1" gutterBottom>Facebook URL(optional)</Typography>
                                        <TextField style={{ marginBottom: "10px" }} onChange={(e)=>setFacebook(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.facebook}>sss</TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1" gutterBottom>Instagram URL(optional)</Typography>
                                        <TextField style={{ marginBottom: "5px" }} onChange={(e)=>setInstagram(e.target.value)} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.instagram}></TextField>
                                    </Grid>
                                    
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={12}>
                                        <Button component={Link} to={'/profile'} variant='text' color='secondary' size="large" style={{ color: 'red', marginRight:"25px" }} >Back</Button>
                                        <Button onClick={handleClick} variant='contained' color='primary' size="large" style={{ backgroundColor: 'red', borderRadius:"25px", width:"20%" }} >Next</Button>

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

export default BusinessProfile;
