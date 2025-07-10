import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:9092/countries';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch()
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
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
