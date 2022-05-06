import React, {useState, useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { createClient } from '@supabase/supabase-js'

const SITE_NAME: string = "Marketplace";
const SUPABASE_URL: string = "https://hpkupaswinocwnohjxkb.supabase.co";
const WhiteText = styled(Typography)(({ theme }) => ({
    color: '#FFFFFF'
}));

function LoginOrSignUp(props: {sx?: object}) {
    return (
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              xs="auto"
              {...props} >
            <Grid container item xs={6}>
                <Button variant="outlined" sx={{display: 'inline-block'}}>
                    <WhiteText variant="button">
                        login
                    </WhiteText>
                </Button>
            </Grid>
            <Grid container item xs={6}>
                <Button variant="contained" sx={{display: 'inline-block'}}>
                    <Typography variant="button" noWrap sx={{ flexGrow: 1}} >
                        sign up
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    );
}

export default function Application(props: { userLoginId?: number}) {
    const [loggedId, setLoggedIn] = useState(false);
    useEffect(() => {
        setLoggedIn(props.userLoginId !== undefined && props.userLoginId !== null);
    }, [setLoggedIn, props.userLoginId]);


    return (
        <Box sx={{ flexGrow: 1, alignItems: "stretch" }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }} >
                        {SITE_NAME}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    {
                        !loggedId &&
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
                            <LoginOrSignUp sx={{ flexGrow: 1 }} />
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}