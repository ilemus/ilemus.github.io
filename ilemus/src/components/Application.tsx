import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
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
    const [loggedId, setLoggedIn] = React.useState(false);
    const [state, setState] = React.useState(false);
    React.useEffect(() => {
        setLoggedIn(props.userLoginId !== undefined && props.userLoginId !== null);
    }, [setLoggedIn, props.userLoginId]);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
    
        setState(open);
      };

    // Could be a dynamically constructed list of elements which are defined as an array elsewhere.
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            >
            <List>
            <ListItem key='image-upload' disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}>
                {/* 
                <ListItemIcon>
                {}
                </ListItemIcon>
                */}
                <ListItemText primary='Image Upload' />
            </ListItemButton>
            </ListItem>
            </List>
        </Box>
    )


    return (
        <Box sx={{ flexGrow: 1, alignItems: "stretch" }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer(true)}
                                onKeyDown={toggleDrawer(true)}
                                sx={{ mr: 2 }} >
                        <MenuIcon />
                        <SwipeableDrawer
                            anchor='left'
                            open={state}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                        >
                            {list()}
                        </SwipeableDrawer>
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