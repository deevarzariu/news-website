import Grid from "components/common/Grid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByCategory } from "services/News";
import { Article } from "types/Article";

function CategoryPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const { category = "" } = useParams();

  useEffect(() => {
    async function getArticles() {
      try {
        const headlines = await getArticlesByCategory(category);
        setArticles(headlines);
        console.log(headlines);
      } catch (err) {
        console.log(err);
      }
    }

    getArticles();
  }, [category]);

  return (
    <div className="page">
      <Grid articles={articles} />
    </div>
  );
}

export default CategoryPage;
