import { makeStyles } from '@material-ui/core';
import { Search } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';
import { Window } from '@mui/icons-material';
import { People } from '@mui/icons-material';
import { Portrait } from '@mui/icons-material';
import { Sell } from '@mui/icons-material';
import { Sms } from '@mui/icons-material';
import { CallReceived } from '@mui/icons-material';
import { Pending } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import Logo from '~/svg/logo.svg';
import User from '~/svg/user.svg';
const drawerWidth = 340;
const useStyles = makeStyles({
  drawer: {
    background: '#060607'
  },
});
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function SideBar({ active, onclick }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const styles = useStyles();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          backgroundColor: '#060607',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        open={open}
      >
        <Toolbar sx={{}}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton> */}
          <Logo
            style={{ height: 45, width: 45, marginRight: '20px' }}
            className='w-16'
          />
          {active === 0 ? (
            <Window sx={{ color: 'white', height: 25, width: 25 }} />
          ) : active === 1 ? (
            <People sx={{ color: 'white' }} />
          ) : active === 2 ? (
            <Portrait sx={{ color: 'white' }} />
          ) : active === 3 ? (
            <Sell sx={{ color: 'white' }} />
          ) : active === 4 ? (
            <Sms sx={{ color: 'white' }} />
          ) : active === 5 ? (
            <CallReceived sx={{ color: 'white' }} />
          ) : (
            <Pending sx={{ color: 'white' }} />
          )}

          <Typography
            variant='h6'
            sx={{ marginLeft: '10px',fontFamily: 'Mulish' ,fontWeight: 'bolder',fontStyle:"italic"  }}
            noWrap
            component='div'
          >
            {active == 0
              ? 'Dashboard'
              : active == 1
              ? 'Users'
              : active == 2
              ? 'Admin'
              : active == 3
              ? 'For me'
              : active == 4
              ? 'Messages'
              : active == 5
              ? 'Services'
              : 'More'}
          </Typography>
        </Toolbar>
        <Toolbar sx={{}}>
          <Search sx={{ color: 'white', height: 20, width: 20 }} />

          <Notifications
            sx={{ color: 'white', height: 20, width: 20, marginLeft: '10px' }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        classes={{ paper: styles.drawer }}
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon sx={{ color: 'white' }}></ChevronLeftIcon>
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{marginTop:'15vh'}}>
          {[
            'Dashboard',
            'Users',
            'Admin',
            'Forme',
            'Messages',
            'Services',
            'More',
          ].map((text, index) => (
            <ListItem
              key={text}
              onClick={() => onclick(index)}
              disablePadding
              sx={{ display: 'block' }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    background:
                      active === index
                        ? 'rgba(255, 234, 142, 1)'
                        : 'rgba(33, 33, 33, 1)',
                    padding: 1,
                    borderRadius: 50,
                  }}
                >
                  {index === 0 ? (
                    <Window
                      sx={{
                        color:
                          active === index ? 'rgba(42, 42, 42, 1)' : 'white',
                        height: 20,
                        width: 20,
                      }}
                    />
                  ) : index === 1 ? (
                    <People
                      sx={{
                        color:
                          active === index ? 'rgba(42, 42, 42, 1)' : 'white',
                        height: 20,
                        width: 20,
                      }}
                    />
                  ) : index === 2 ? (
                    <Portrait
                      sx={{
                        color:
                          active === index ? 'rgba(42, 42, 42, 1)' : 'white',
                        height: 20,
                        width: 20,
                      }}
                    />
                  ) : index === 3 ? (
                    <Sell
                      sx={{
                        color:
                          active === index ? 'rgba(42, 42, 42, 1)' : 'white',
                        height: 20,
                        width: 20,
                      }}
                    />
                  ) : index === 4 ? (
                    <Sms
                      sx={{
                        color:
                          active === index ? 'rgba(42, 42, 42, 1)' : 'white',
                        height: 20,
                        width: 20,
                      }}
                    />
                  ) : index === 5 ? (
                    <CallReceived
                      sx={{
                        color:
                          active === index ? 'rgba(42, 42, 42, 1)' : 'white',
                        height: 20,
                        width: 20,
                      }}
                    />
                  ) : (
                    <Pending
                      sx={{
                        color:
                          active === index ? 'rgba(42, 42, 42, 1)' : 'white',
                        height: 20,
                        width: 20,
                      }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color:
                      active === index ? 'rgba(255, 234, 142, 1)' : 'white',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <div style={{ marginTop: 'auto', alignSelf: 'center' }}>
          <User className='w-12' />
        </div>
      </Drawer>
    </Box>
  );
}
