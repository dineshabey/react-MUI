
import { Box, Typography } from '@mui/material';
import './App.css';
import ComponetsUsages from './ComponetsUsages';
import BoxSx from './layouts/BoxSx';


function App() {
  return (
    <div className="App">
      {/* <ComponetsUsages /> */}
      {/* <div className='MyDiv' >
        <Typography variant='h2'>Hi There</Typography>
      </div>
      <br /> */}

      <Box sx={{
        bgcolor: 'yellow',
        p: '40px',
        '&:hover': {
          bgcolor: 'red',
          cursor: 'pointer'
        },
      }}
      >

        <Typography variant='h2'>Hi There</Typography>

      </Box>
    </div>
  );
}

export default App;
