import { useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:9092/countries';

function App() {

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
