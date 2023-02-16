import { getTopHeadlines } from "services/News";
import { Article } from "types/Article";
import { useEffect, useState } from "react";
import Grid from "components/common/Grid";
import HeroStage from "components/Homepage/HeroStage";

function Homepage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function getArticles() {
      try {
        const headlines = await getTopHeadlines();
        setArticles(headlines);
      } catch (err) {
        console.log(err);
      }
    }

    getArticles();
  }, []);

  if (!articles.length) {
    return <div>Empty</div>;
  }

  const [first, second, third, ...rest] = articles;

  return (
    <div className="page">
      <HeroStage large={first} top={second} bottom={third} />
      <Grid articles={rest} />
    </div>
  );
}

export default Homepage;
