// import Home from 'pages/Home';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Navigation } from './Navigtion';

export const Header = () => {
  return (
    <>
      <Box>
        <header>
          <Navigation />
        </header>
      </Box>
    </>
  );
};
