import fetch from 'node-fetch';

const fetchApiData = async (URL, method, query) => {
      const result = await fetch(`https://api-v3.igdb.com/${URL}`, {
        method,
        headers: {
          'Accept': 'application/json',
          'user-key': '3f65f8d674e832923f475e2abc23fde5'
        },
        body: query
      });
      
      const data = await result.json();
      
      return data;
}

export default fetchApiData;