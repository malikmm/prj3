import { useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:9092/countries';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries List</h1>
        <p>
          This is a simple React application that fetches and displays a list of countries from a REST API.
        </p>
        <p>
          The data is fetched from: <a href={API_URL} target="_blank" rel="noopener noreferrer">{API_URL}</a>
        </p>
        <p>
          Make sure the backend server is running on port 9092.
        </p>
      </header>
    </div>
  );
  useEffect(() => {
    // Fetch the countries data from the API when the component mounts
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log('Countries data:', data);
      })
      .catch(error => {
        console.error('Error fetching countries data:', error);
      });
  }, []);   
}

export default App;
