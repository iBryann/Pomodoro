import Home from './pages/Home';
import { ThemeProvider } from './hooks/useTheme';
import Style from './styles/global';

function App() {
    return (
        <>
            <Style />

            <ThemeProvider>
                <Home />
            </ThemeProvider>
        </>
    );
}

export default App;
