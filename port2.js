// Chuck Norris Jokes API
document.getElementById('getJoke').addEventListener('click', async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      document.getElementById('joke').textContent = data.value;
    } catch (error) {
      document.getElementById('joke').textContent = 'Failed to load joke.';
      console.error('Error fetching Chuck Norris joke:', error);
    }
  });