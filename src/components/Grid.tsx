import { Article } from "../types/Article";
import Card from "./Card";
import style from "../assets/styles/Grid.module.scss";

type Props = {
  articles: Article[];
};

function Grid({ articles }: Props) {
  return (
    <div className={style.grid}>
      {articles.map((article, index) => (
        <Card article={article} key={index} />
      ))}
    </div>
  );
}

export default Grid;
