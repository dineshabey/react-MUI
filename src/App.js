
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

      <BoxSx />
      <Box sx={{
        mt: 40,
        ml: 'auto',
        mr: 'auto',
        width: '500px',
        bgcolor: 'yellow',
        p: '40px',
        borderRadius: 0,
        transition: 'boder-radius 2s mease-in-out,transform 2s ease-in-out',


        '&:hover': {
          bgcolor: 'red',
          cursor: 'pointer',
          borderRadius: 100,
          // transition:'boder-radius 2s mease-in-out,transform 2s ease-in-out',
          transform: 'rotate(90deg)',
        },
      }}
      >
        <Typography variant='h2'>Hi There</Typography>
      </Box>
    </div>
  );
}

export default App;
