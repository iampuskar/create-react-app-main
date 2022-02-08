import React from 'react';
import { Switch, TextField, styled, FormControlLabel, Box, Card, Container, Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { holidayR } from '../redux/holidaySlice';



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
        textAlign: "left"
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

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#C46565' : '#E81515',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));



const Holiday = () => {
    const classes = useStyles();

    const [switch1, setSwitch1] = useState(true);
    const [switch2, setSwitch2] = useState(true);
    const [switch3, setSwitch3] = useState(true);
    const [switch4, setSwitch4] = useState(true);
    const [switch5, setSwitch5] = useState(true);
    const [switch6, setSwitch6] = useState(true);
    const [switch7, setSwitch7] = useState(true);
    const [switch8, setSwitch8] = useState(true);
    const [switch9, setSwitch9] = useState(true);
    const [switch10, setSwitch10] = useState(true);
    const [switch11, setSwitch11] = useState(true);
    const [switch12, setSwitch12] = useState(true);
    const [text, setText] = useState("");

    const location = useNavigate()
    const dispatch = useDispatch()

    const data = useSelector((state) => state.holiday)
    // console.log(data);

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(holidayR({ switch1, switch2, switch3, switch4, switch5, switch6, switch7, switch8, switch9, switch10, switch11, switch12, text }))
        location("/yourhour");

    }



    return <div className={classes.root}>
        <Container>
            <img width="150px" style={{ marginLeft: "500px", marginTop: "30px", marginBottom: "30px" }} src="https://static.wixstatic.com/media/7bbc60_441b50150db44d4e9b5be6c8325e2949~mv2.png/v1/fill/w_233,h_85,al_c,lg_1,q_85/SouZen_Logo_Small.webp" />
            <Grid container align='center'>
                <Grid item xs={12} style={{}}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Box>
                        <Card elevation={20} style={{ height: "76vh", maxWidth: "60vw" }}>
                            <Grid container >
                                {/* Header text start */}
                                <Grid item xs={2}></Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ marginTop: "20px", fontSize: '35px', fontWeight: "600" }} variant="h2">
                                        Holiday
                                    </Typography>
                                    <Typography style={{ marginBottom: "20px", marginTop: "10px", fontWeight: "400" }} variant="body2"  >
                                        Let your customer know if you will be open on holidays.
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
                                    <Grid container style={{ marginBottom: "2%" }}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch1 ?
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch1(e.target.checked)} defaultChecked />}
                                                                    label=""
                                                                /> :
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch1(e.target.checked)} />}
                                                                    label=""
                                                                />}
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Ano Neuvo</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch2 ?
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch2(e.target.checked)} defaultChecked />}
                                                                    label=""
                                                                /> :
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch2(e.target.checked)} />}
                                                                    label=""
                                                                />
                                                            }
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Dia del Trabajo</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch3 ?
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch3(e.target.checked)} defaultChecked />}
                                                                    label=""
                                                                /> :
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch3(e.target.checked)} />}
                                                                    label=""
                                                                />
                                                            }
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Dia de Muertos</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container style={{ marginBottom: "2%" }}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch4 ?
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch4(e.target.checked)} defaultChecked />}
                                                                    label=""
                                                                /> :
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch4(e.target.checked)} />}
                                                                    label=""
                                                                />
                                                            }
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Ano Neuvo</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch5 ?
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch5(e.target.checked)} defaultChecked />}
                                                                    label=""
                                                                /> :
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch5(e.target.checked)} />}
                                                                    label=""
                                                                />
                                                            }
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Dia del Trabajo</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch6 ? <FormControlLabel
                                                                control={<IOSSwitch onChange={(e) => setSwitch6(e.target.checked)} defaultChecked />}
                                                                label=""
                                                            /> :
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch6(e.target.checked)} />}
                                                                    label=""
                                                                />
                                                            }
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Dia de Muertos</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container style={{ marginBottom: "2%" }}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch7 ? <FormControlLabel
                                                                control={<IOSSwitch onChange={(e) => setSwitch7(e.target.checked)} defaultChecked />}
                                                                label=""
                                                            /> :
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch7(e.target.checked)} />}
                                                                    label=""
                                                                />
                                                            }
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Ano Neuvo</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch8 ? <FormControlLabel
                                                                control={<IOSSwitch onChange={(e) => setSwitch8(e.target.checked)} defaultChecked />}
                                                                label=""
                                                            /> :
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch8(e.target.checked)} defaultChecked />}
                                                                    label=""
                                                                />
                                                            }
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Dia del Trabajo</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch9 ? <FormControlLabel
                                                                control={<IOSSwitch onChange={(e) => setSwitch9(e.target.checked)} defaultChecked />}
                                                                label=""
                                                            /> :
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch9(e.target.checked)} />}
                                                                    label=""
                                                                />
                                                            }
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Dia de Muertos</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container style={{ marginBottom: "2%" }}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch10 ?
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch10(e.target.checked)} defaultChecked />}
                                                                    label=""
                                                                /> :
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch10(e.target.checked)} />}
                                                                    label=""
                                                                />
                                                            }
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Ano Neuvo</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch11 ?
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch11(e.target.checked)} defaultChecked />}
                                                                    label=""
                                                                /> :
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch11(e.target.checked)} />}
                                                                    label=""
                                                                />
                                                            }
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Dia del Trabajo</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            {data.switch12 ?
                                                                <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch12(e.target.checked)} defaultChecked />}
                                                                    label=""
                                                                /> : <FormControlLabel
                                                                    control={<IOSSwitch onChange={(e) => setSwitch12(e.target.checked)} defaultChecked />}
                                                                    label=""
                                                                />
                                                            }

                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Grid Container >
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontWeight: "600", fontSize: "15px" }} variant="subtitle1">Dia de Muertos</Typography></Grid>
                                                                <Grid item xs={12}><Typography className={classes.typo} style={{ fontSize: "14px" }} variant="subtitle1">December 12-15</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid Container style={{ marginBottom: "2%" }}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Grid container>
                                                        <Grid item xs={12}><Typography variant='subtitle2' style={{ fontWeight: "600", fontSize: '12px' }}>Are there other days you will be closed due to holidys?</Typography></Grid>
                                                        <Grid item xs={12}>
                                                            <TextField onChange={(e) => setText(e.target.value)} style={{ marginBottom: "5px" }} multiline rows={2} size="small" fullWidth variant="outlined" id="outlined-basic" label={data.text}></TextField>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Grid container>
                                                        <Grid item xs={12} style={{ height: "20px" }}></Grid>
                                                        <Grid item xs={12}>
                                                            <Typography className={classes.typo} ml='20px' variant='subtitle2' style={{ marginLeft: '20px', fontWeight: "600", fontSize: '11px' }}>
                                                                Use this field to specify additional days you will be closed due to holiday schedule. for example, If you not be taking any additional holiday time.Simply leave it blank.
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12}></Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Button component={Link} to={"/business"} variant='text' color='secondary' size="large" style={{ color: 'red', marginRight: "25px" }} >Back</Button>
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
