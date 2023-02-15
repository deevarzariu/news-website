import { Article } from "types/Article";
import style from "assets/styles/HeroStageCard.module.scss";

type Props = {
  article: Article;
  position: "large" | "top" | "bottom";
};

function HeroStageCard({ article, position }: Props) {
  return (
    <div className={`${style.card} ${style[position]}`}>
      <img className={style.image} src={article.urlToImage} />
      <div className={style.title}>{article.title}</div>
    </div>
  );
}

export default HeroStageCard;
