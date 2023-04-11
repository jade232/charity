import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/pexels-binyamin-mellish-186078.png'
import Namaste from "../assets/Namaste.png"
import LoaderWrapper from "../assets/ohm_circel.png"
import Ohm from "../assets/Om_symbol.png"

const Header = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'orange',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


    return (


        <Box sx={theme => ({
            [theme.breakpoints.down('md')]: {
                flex: '1',
                paddingTop: '30px',
                alignSelf: 'center',
            },
            [theme.breakpoints.up('md')]: {
                flex: '2',
                alignSelf: 'flex-end',
            },
        })}
        >
            <div style={{
                display: "grid",
                placeItems: "center",
                margin: "auto",
                width: "fit-content",
                // height: "100vh"
            }}>
                <Box className='centeringElementHome'>
                    <div className='animationWrapperHome'>
                        <img src={LoaderWrapper} style={{
                            width: "100%"
                        }} alt="" className='ohmCircleHome' />
                        <img src={Ohm} alt="" className='ohmsymbolHome' />
                    </div>
                </Box>
                <Box>
                    <Typography component='h4' sx={{ position: "relative" }}><span className='trustName'>OM Vishva Mahaguru Bhagavan Shetra</span></Typography>
                    <Typography component="h5" sx={{ position: "relative", textAlign: "center" }}><span className='trustName'>Charitable Trust (R)</span></Typography>
                </Box>
                <img
                    src={Namaste}
                    alt="headerImg"
                    style={{
                        width: "70%",
                        marginBottom: -15,
                        mixBlendMode: "darken"
                    }}
                    className='welcomeHands'
                />
            </div>
        </Box>

    )
}

export default Header