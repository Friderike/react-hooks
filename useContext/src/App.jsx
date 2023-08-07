
import ContexComponent from "./context-component/ContextCompontent";
import { ThemeProvider } from './ThemeContext'
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider>
        <ContexComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
