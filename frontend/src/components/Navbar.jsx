import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'




export default function Navbar () {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <Typography variant='overline'>Command Line</Typography>
                </Toolbar>
            </AppBar>

        </Box>
    );
}