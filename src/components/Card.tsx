import { Article } from "../types/Article";
import style from "../assets/styles/Card.module.scss";

type Props = {
  article: Article;
};

function Card({ article }: Props) {
  return (
    <div className={style.card}>
      <div className={style["card__image-container"]}>
        <img className={style.card__image} src={article.urlToImage} />
      </div>
      <div className="card__text-container">
        <div className={style.card__title}>{article.title}</div>
      </div>
    </div>
  );
}

export default Card;
