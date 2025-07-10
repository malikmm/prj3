import { useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:9092/countries';
const countries = [
  { name: 'United States', code: 'US' },
  { name: 'Canada', code: 'CA' },
  { name: 'Mexico', code: 'MX' },
  { name: 'United Kingdom', code: 'GB' }
];

function App() {
  const searchCountries = async () => {
    try {
      const response = await
        fetch(API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      if (!response.ok) { 
        console.log(response.json)
      }
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }
  useEffect(() => {
    searchCountries();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries List</h1>
        <div className="countries-list">
          {/* Countries will be displayed here */}
          <p>countries</p>
        </div>
        <p>
          <strong>Note:</strong> The countries list will be displayed here once the API is integrated
        </p>
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
