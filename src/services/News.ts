import axios from "axios";

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getTopHeadlines() {
  const res = await axios.get(
    `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`
  );
  const {
    data: { articles },
  } = res;
  return articles;
}

export async function getArticlesByCategory(category: string) {
  const res = await axios.get(
    `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );
  const {
    data: { articles },
  } = res;
  return articles;
}
