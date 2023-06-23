import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY


const ApiTheLordOfTheRings = axios.create({
  baseURL: 'https://the-one-api.dev/v2/',
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
});

export default ApiTheLordOfTheRings;
