import '../styles/App.css';
import SearchBar from './search';
import Test from './Test';

function App() {
  return (
    <div className="Website">
      <header className="Header">
        <a href="/">nozama</a>
        <SearchBar></SearchBar>
      </header>
      <main>
        list products
      </main>  
      <TestAPI></TestAPI>    
    </div>   
  );
}

export default App;
