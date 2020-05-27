const fetch = require("node-fetch");

module.exports = {
  fetchApiData: async (URL, method, query) => {
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
  },
  fetchLocalData: async (Url, method, query) => {
    const result = await fetch(Url, { method, 
                                      body: JSON.stringify(query), 
                                      headers: {'Content-Type': 'application/json'} });
    if (Array.isArray(result) !== true) {
      const data = await result.json();
      return data;
    }
    return result;
  },
  fetchApiLocationData: async (Url) => {
    const result = await fetch(`${Url}key=e606273e097efefe933265fcdf7bd23d`, { 
      headers: {
       'Accept': 'application/json'
      } 
    });

    const data = await result.json();

    return data;
  }
}

