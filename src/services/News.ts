import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export async function getTopHeadlines() {
  const res = await axios.get(BASE_URL);
  const {
    data: { articles },
  } = res;
  return articles;
}

export async function getArticlesByCategory(category: string) {
  const res = await axios.get(`${BASE_URL}&category=${category}`);
  const {
    data: { articles },
  } = res;
  return articles;
}
