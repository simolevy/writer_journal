import JournalPage from './components/JournalPage';
import './App.css';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>My Journal</h1>
      <JournalPage />
    </div>
  );
}

export default App;
