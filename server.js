import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Endpoint to fetch website content
app.get('/api/fetch-website', async (req, res) => {
  try {
    const response = await axios.get('https://rjuhackfest.vercel.app');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching website:', error);
    res.status(500).send('Error fetching website content');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
}); 