import { useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:9092/countries';

function App() {
  const searchCountries
  useEffect(() => {
    // Fetch countries data from the API
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Countries data:', data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
  
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
  
}

export default App;
