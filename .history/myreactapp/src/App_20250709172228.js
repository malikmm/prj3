import { useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:9092/countries';

function App() {
  
  return (
    <div>
      useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await
              fetch(API_URL);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Countries:', data);
          } catch (error) {
            console.error('Error fetching countries:', error);
          }
        }
        fetchCountries();
      }, []);
    </div>
}

export default App;
