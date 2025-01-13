

export const fetcher = async (url, options = {}) => {
    const complete_url = `http://localhost:3000/${url}`

    console.log(complete_url)
    try {
      const res = await fetch(complete_url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });
  
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Something went wrong!');
      }
  
      return await res.json();
    } catch (error) {
      console.error('Fetch error:', error.message);
      throw error;
    }
  };
  