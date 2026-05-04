import { useEffect, useState } from 'react'

function Github() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("https://api.github.com/users/aayushh-30");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
      console.error("Something went wrong while fetching data!!", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={fetchData}>Refresh Data</button>
      
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.bio}</p>
          <p>Followers: {data.followers}</p>
          <p>Public Repos: {data.public_repos}</p>
          <img src={data.avatar_url} alt="avatar" style={{ width: '100px' }} />
        </div>
      )}
    </div>
  )
}

export default Github