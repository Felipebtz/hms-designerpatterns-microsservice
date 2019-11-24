import './App.css';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';

const theme = createTheme({
  focusRing: 'never',
  fontFamily: "Poppins, sans-serif",
  headings: {fontFamily: "Merriweather, serif"},
  colors: {
    primary: [
      '#fff1eb',
      '#ffd9c7',
      '#ffc0a3',
      '#ffa47a',
      '#ff8a52',
      '#ff5a0a',
      '#dc4b08',
      '#b83e07',
      '#933205',
      '#6e2604',
      '#491903',
    ],
    deep: [
      '#f8eff9',
      '#ecd7ef',
      '#dfbfe5',
      '#d0a1d9',
      '#bd7ac7',
      '#a052ae',
      '#823991',
      '#682274',
      '#54105e',
      '#48094f',
      '#400849',
    ],
    signalOrange: [
      '#fff1eb',
      '#ffd9c7',
      '#ffc0a3',
      '#ffa47a',
      '#ff8a52',
      '#ff5a0a',
      '#dc4b08',
      '#b83e07',
      '#933205',
      '#6e2604',
      '#491903',
    ],
    neutral: [
      '#f6f6f6',
      '#e7e7e7',
      '#d1d1d1',
      '#b0b0b0',
      '#888888',
      '#6d6d6d',
      '#5d5d5d',
      '#4f4f4f',
      '#454545',
      '#3d3d3d',
      '#000000',
    ],
  },
  primaryColor: 'signalOrange',
  primaryShade: 4,
  defaultGradient: {
    from: 'primary.4',
    to: 'primary.8',
    deg: 132,
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
