import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './utils/theme'
import MenuAppBar from './components/MenuAppBar';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
