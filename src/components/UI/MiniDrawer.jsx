import { NavLink } from 'react-router-dom';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Javascript, Engineering, Work, Home, GitHub, Twitter, Mail, LocalCafe, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
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
  }),
);

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const contactLinks = [
    {
      link: 'https://github.com/Mubarek-Hassen',
      text: 'GitHub'
    },
    {
      link: 'https://www.linkedin.com/in/mubarek-hassen-wubitu/',
      text: 'LinkedIn'
    },
    {
      link: 'https://twitter.com/mubarekwubit',
      text: 'Twitter'
    },
  ]

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'ghostwhite', minHeight: '100vh', backgroundAttachment: 'fixed' }}>
      <CssBaseline  />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{backgroundColor: 'darkgreen'}}>
          <IconButton
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
          </IconButton>
          <NavLink to={'/'} style={{ textDecorationLine: 'none'}} >
            
          <Typography sx={{fontSize: '2rem', color: 'ghostwhite', }} noWrap component="div">
            Mubarek Hassen
          </Typography>
          </NavLink>
          <LocalCafe sx={{mx: 2}} />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[{title: 'Home', path: '/'},{title:'About', path: '/about'}, {title:'Skills', path: '/skills'}, {title:'Projects', path: '/projects'}].map((text, index) => (
            <NavLink className={(navData)=> navData.isActive ? 'navLink-active' : 'inactive'} key={index} to={text.path}>
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
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
                    color: 'inherit',
                  }}
                >
                  {index === 0 && <Home />}
                  {index === 1 && <Engineering />}
                  {index === 2 && <Javascript />}
                  {index === 3 && <Work />}
                </ListItemIcon>
                <ListItemText primary={text.title} sx={{ opacity: open ? 1 : 0}} />
              </ListItemButton>
            </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
        <List>
        <a href="mailto:mubarekhassen4@gmail.com" className='contactLinks'>
          <ListItem disablePadding sx={{ display: 'block' }}>
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
                  }}
                >
                  <Mail />
                </ListItemIcon>
                <ListItemText primary="Email" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </a>

          {contactLinks.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <a href={item.link} target="_blank" rel="noreferrer noopener" className='contactLinks'>
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
                  }}
                >
                  {index === 0 && <GitHub sx={{color: '#171515'}} />}
                  {index === 1 && <LinkedIn sx={{ color: '#0072b1'}} />}
                  {index === 2 && <Twitter sx={{color: '#00acee'}} />}
                  
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </a>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{ width: '100%', height: '100%'}}>
      {props.children}
      <Box sx={{ left: 0, bottom: 0, width: '100%', textAlign: 'center', mb: 3,}} 
      >
        <motion.div
        viewport={{ once: '90vh'}}
        initial={{ opacity: 0 }}
        transition={{ duration: 3}}
        whileInView={{opacity: 1}}
        >
        <>
          Developed By Mubarek Hassen
        </>
        </motion.div>
      </Box>
      </Box>
    </Box>
  );
}