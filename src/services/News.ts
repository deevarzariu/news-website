import axios from "axios";
import { Article } from "../types/Article";

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
