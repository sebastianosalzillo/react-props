import AppHeader from './components/AppHeader';
import AppCard from './components/AppCard';
import './App.css';

function App() {
    return (
        <>
            <div className="container">
                <AppHeader />
                <AppCard />
            </div>
            <footer>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laboriosam blanditiis non.</p>
            </footer>
        </>
    );
}

export default App;

