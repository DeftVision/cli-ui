import { Box, Button, Stack } from '@mui/material';


export default function Home () {

    const handleTestApi = async () => {
        try {
            console.log('console log test.')
        } catch (error) {

        }
    }


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 5
        }}>
           <Stack direction='column' spacing={3}>
               <Button variant='outlined' onClick={handleTestApi}>Test Endpoint</Button>
           </Stack>
        </Box>
    );

}
