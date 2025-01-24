import './App.css'
import HeroSection from './components/HeroSection'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App({ pageProps }) {
  return (
    <>
    <PrimeReactProvider>
      <HeroSection {...pageProps} />
    </PrimeReactProvider>
      
    </>
  )
}

export default App
