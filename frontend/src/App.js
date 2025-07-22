import JournalPage from './components/JournalPage';
import './App.css';
import { Header } from './Header';
import { Generate } from './components/Generate';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Journal</h1>
      <Generate/>
      <JournalPage />
    </div>
  );
}

export default App;
