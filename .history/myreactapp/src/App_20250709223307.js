import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:9092/countries';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries List</h1>
        <p>This is a simple React application that fetches and displays a list of countries from a REST API.</p>
        <p>The data is fetched from: <a href={API_URL} target="_blank" rel="noopener noreferrer">{API_URL}</a></p>
        <p>Make sure the backend server is running on port 9092.</p>
      </header>
      <h2>Countries:</h2>
      <ul>
        {data.map((country) => (
          <li key={country.id}>
            {country.name} - {country.code}
          </li>
        ))}
      </ul>
      <p><strong>Note:</strong> The countries list will be displayed here once the API is integrated.</p>
      <p>This application fetches data from the API and displays it in a list format.</p>
      <p>For more information, check the API documentation.</p>
      <p>Data fetched from the API:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>Data is displayed in a structured format for better readability.</p>
      <p>Ensure your backend service is running and accessible at {API_URL}.</p>
      <p>Enjoy exploring the countries data!</p>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
